import {Component, Input } from '@angular/core';
import { ImageData } from '../image-card.model';

@Component({
  selector: 'panono-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {
  @Input('image') public image: ImageData;

  constructor() { }
}
