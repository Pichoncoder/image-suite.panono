import {Component, Input } from '@angular/core';
import { ImageData } from '../image-card.model';

@Component({
  selector: 'panono-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent  {
  @Input('image') public image: ImageData;

  constructor() { }
}
