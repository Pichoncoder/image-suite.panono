import {Component, Input } from '@angular/core';
import { EventImagesService } from '../../../providers/event-images/event-images.service';

@Component({
  selector: 'panono-image-select-btn',
  templateUrl: './image-select-btn.component.html',
  styleUrls: ['./image-select-btn.component.scss']
})
export class ImageSelectBtnComponent  {
  @Input('image') public image: number;

  constructor(private eventImages: EventImagesService) {

  }

  makeFavorite() {
    this.image['favorite'] = !this.image['favorite'];//toggle fav

    if (this.image['favorite']) {
      this.eventImages.select(this.image);
    } else {
      this.eventImages.deselect(this.image);
    }
  }
}
