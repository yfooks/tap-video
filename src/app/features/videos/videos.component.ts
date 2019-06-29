import { Component, OnInit } from '@angular/core';
import {Video} from '../models';
import {VideosService} from './videos.service';
import {MatDialog} from '@angular/material';
import {AddVideoDialogComponent} from './add-video-dialog/add-video-dialog.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[] = [];
  masterHeight = 300;
  masterWidth = 300;


  constructor(private videosService: VideosService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.videos = this.videosService.getVideos();
  }

  onMasterSettingsUpdated(ev: any){
    this.videosService.updateMasterSettings(ev);
  }

  onSizeChanged(ev: any) {
    this.videosService.editVideoSize(ev.id, ev.prop,  ev.value);
  }

  openAddVideoDialog(): void {
    const dialogRef = this.dialog.open(AddVideoDialogComponent, {
      width: '250px',
      data: {url: ''}
    });

    dialogRef.afterClosed().subscribe(url => {
      if (url) {
        this.videosService.addVideo(url, this.masterHeight, this.masterWidth);
      }
    });
  }


}
