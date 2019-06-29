import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Video} from '../../models';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {VideosService} from '../videos.service';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit, OnDestroy {
  @Input() video: Video;

  masterWidth: number;
  masterHeight: number;

  videoSizeForm: FormGroup;
  url: any;
  widthSub: Subscription;
  masterWidthSub: Subscription;
  heightSub: Subscription;
  masterHeightSub: Subscription;
  @Output() videoSizeChanged: EventEmitter<{ id: number, prop: string, value: number }> = new EventEmitter();


  constructor(private formBuilder: FormBuilder,
              private videosService: VideosService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    this.videoSizeForm = this.formBuilder.group({
      width: [this.video.height, [Validators.required]],
      height: [this.video.width, [Validators.required]],
    });

    this.masterWidthSub = this.videosService.getMasterWidthListener().subscribe(
      (res) => {
        this.masterWidth = res;
      }
    );
    this.masterHeightSub = this.videosService.getMasterHeightListener().subscribe(
      (res) => {
        this.masterHeight = res;
      }
    );


    this.widthSub = this.videoSizeForm.get('width').valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        this.videoSizeChanged.emit({id: this.video.id, prop: 'width', value: this.videoSizeForm.get('width').value});
      });

    this.heightSub = this.videoSizeForm.get('height').valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        this.videoSizeChanged.emit({id: this.video.id, prop: 'height', value: this.videoSizeForm.get('height').value});
      });

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url.replace('watch?v', 'embed/'));
  }

  getSize(type: string) {
    if (type === 'height') {
      return (this.video.isSizeOverride ? this.video.height : this.masterHeight) + 'px';
    } else {
      return (this.video.isSizeOverride ? this.video.width : this.masterWidth) + 'px';
    }
  }

  ngOnDestroy() {
    this.widthSub.unsubscribe();
    this.heightSub.unsubscribe();
    this.masterWidthSub.unsubscribe();
    this.masterHeightSub.unsubscribe();
  }
}
