import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../models';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {
  @Input() video: Video;
  @Input() masterHeight: number;
  @Input() masterWidth: number;

  url: any;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url.replace('watch?v', 'embed/'));
  }

}
