import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Video} from '../../models';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit, OnDestroy {
  @Input() video: Video;
  @Input() masterHeight: number;
  @Input() masterWidth: number;
  videoSizeForm: FormGroup;
  url: any;
  widthSub: Subscription;
  heightSub: Subscription;
  @Output() videoSizeChanged: EventEmitter<{id: number, prop: string, value: number}> = new EventEmitter();


  constructor(private formBuilder: FormBuilder, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {

    this.videoSizeForm = this.formBuilder.group({
      width: [this.masterHeight !== this.video.height ? this.video.height : this.masterHeight, [Validators.required]],
      height: [this.masterWidth !== this.video.width ? this.video.width : this.masterWidth, [Validators.required]],
    });

    this.widthSub = this.videoSizeForm.get('width').valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        this.videoSizeChanged.emit({id: this.video.id, prop: 'width', value: this.videoSizeForm.get('width').value}) ;
      });

    this.heightSub = this.videoSizeForm.get('height').valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        this.videoSizeChanged.emit({id: this.video.id, prop: 'height', value: this.videoSizeForm.get('height').value}) ;
      });

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url.replace('watch?v', 'embed/'));
  }

  ngOnDestroy() {
    this.widthSub.unsubscribe();
    this.heightSub.unsubscribe();
  }
}
