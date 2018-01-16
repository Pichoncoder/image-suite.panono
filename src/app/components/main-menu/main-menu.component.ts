import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panono-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input("sidenav") private sidenav: any;

  ngOnInit() {
  }

}
