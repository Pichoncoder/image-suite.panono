import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get('http://api3-dev.panono.com/explore').map((res) => res["items"]);
  }
}
