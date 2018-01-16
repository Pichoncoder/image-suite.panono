import { Component, OnInit } from '@angular/core';
import { EventImagesService } from '../../providers/event-images/event-images.service';

@Component({
  selector: 'panono-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  filters = [
    {value: 'all', viewValue: 'All'},
    {value: 'fav', viewValue: 'Starred'}
  ];

  constructor(private eventImages: EventImagesService) { }

  ngOnInit() {}

  onFilter(filter) {
    this.eventImages.filter(filter);
  }

  viewMode(mode) {
    this.eventImages.display(mode);
  }
}
