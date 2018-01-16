import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataService } from '../../providers/server-data/server-data.service';
import { EventImagesService } from '../../providers/event-images/event-images.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ImageData } from './image-card.model';

@Component({
  selector: 'panono-image-layout',
  templateUrl: './image-layout.component.html',
  styleUrls: ['./image-layout.component.scss']
})

export class ImageLayoutComponent implements OnInit {
  viewImages : ImageData[]= [];
  dataImages : ImageData[]= [];
  current_filter: string = 'all';
  view: string = 'grid';

  constructor(private toastr: ToastsManager,
              private vRef: ViewContainerRef,
              private data: DataService,
              private eventImages : EventImagesService) {

    //saved view
    if (localStorage.getItem('active_view') !== null) {
      this.view = JSON.parse(localStorage.getItem('active_view'));
    }

    this.toastr.setRootViewContainerRef(vRef);

    this.listenView();
    this.listenSelection();
    this.listenFiltering();
  }

  ngOnInit() {
    this.fetchData();
  }

  private listenSelection() {
    this.eventImages.select$.subscribe(
      (image : ImageData) => {
        if (this.current_filter === 'fav') this.filterFavorites();//update view

        if (image['favorite']) this.showSuccess(); //has been added

        this.setSessionImages();
      },
      (err) => {
        console.error(err);
        this.showWarning();
      });
  }

  private listenView() {
    this.eventImages.layout$.subscribe(
      (view : string) => {
        this.view = view;
        localStorage.setItem('active_view', JSON.stringify(view));
      },
      (err) => {
        console.error(err);
        this.showWarning();
      });
  }

  private listenFiltering() {
   this.eventImages.filter$.subscribe(
      (filter : string) => {
        this.current_filter = filter;

        if(filter === 'fav') { //fav
          this.viewImages = this.getSessionImages();
          this.filterFavorites();

        } else if(filter === 'all') {//all
          this.fetchData();
        }
      },
      (err) => {
        console.error(err);
        this.showWarning();
      });
  }

  fetchData() {
    this.data.getImages()
      .subscribe(
      (items) => {
        let favorites = this.getSessionImages(),
             _dataImages;

        _dataImages = items.map((item) => {
          return {
            id: item.id,
            image_data: item.data.images.thumbnails[0],
            created_at: item.data.created_at,
            title: item.data.title,
            favorite: false, //default
          }
        });

        if (favorites) { //find already selection
          favorites.forEach((favImage, index ) => {
            _dataImages.forEach((image) => {
              if (image.id === favImage.id && image.favorite !== favImage.favorite  ) {
                _dataImages[index].favorite = true;
              }
            })
          });
        }

        this.dataImages = _dataImages;
        this.viewImages = _dataImages;

      },(err) => {
        console.error(err);
        this.showWarning();
      });
  }

  filterFavorites() {
    this.viewImages = this.dataImages.filter(image => image.favorite);
  }

  setSessionImages() {
    localStorage.setItem('user_images', JSON.stringify(this.dataImages));
  }

  getSessionImages() {
    if (localStorage.getItem('user_images') == null) return false;

    return JSON.parse(localStorage.getItem('user_images'));
  }

  showSuccess() {
    this.toastr.success('', 'Starred Image!');
  }

  showWarning() {
    this.toastr.warning('try again.', 'Something went wrong!');
  }
}
