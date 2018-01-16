import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventImagesService {
  constructor() { }

  private _filter = new Subject();
  private _layout = new Subject();
  private _select = new Subject();

  public filter$ = this._filter.asObservable();
  public layout$ = this._layout.asObservable();
  public select$ = this._select.asObservable();

  filter(filter : string) {
    this._filter.next(filter);
  }

  display(mode: string) {
    this._layout.next(mode);
  }

  select(image) {
    this._select.next(image);
  }

  deselect(image) {
    this._select.next(image);
  }
}


