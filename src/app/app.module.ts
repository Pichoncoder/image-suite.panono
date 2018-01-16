import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanonoImageOverview } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//components
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ImageCardComponent } from './components/image-layout/image-card/image-card.component';
import { ImageListComponent } from './components/image-layout/image-list/image-list.component';
import { ImageSelectBtnComponent } from './components/image-layout/image-select-btn/image-select-btn.component';
import { ImageLayoutComponent } from './components/image-layout/image-layout.component';
//services
import { DataService } from './providers/server-data/server-data.service';
import { EventImagesService } from './providers/event-images/event-images.service';

//materials
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    PanonoImageOverview,
    MainMenuComponent,
    SideBarComponent,
    ImageCardComponent,
    ImageLayoutComponent,
    ImageListComponent,
    ImageSelectBtnComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatSidenavModule
  ],
  providers: [DataService, EventImagesService],
  bootstrap: [PanonoImageOverview]
})
export class AppModule { }
