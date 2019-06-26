import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VideosComponent} from './features/videos/videos.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import { VideoContainerComponent } from './features/videos/video-container/video-container.component';
import { MasterConfigComponent } from './features/videos/master-config/master-config.component';
import { AddVideoDialogComponent } from './features/videos/add-video-dialog/add-video-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoContainerComponent,
    MasterConfigComponent,
    AddVideoDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddVideoDialogComponent
  ]
})
export class AppModule {
}
