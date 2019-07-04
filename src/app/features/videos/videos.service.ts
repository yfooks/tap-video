import {Injectable} from '@angular/core';

import * as _ from 'lodash';
import {Video} from '../models';
import {BehaviorSubject, Subject} from 'rxjs';


@Injectable({providedIn: 'root'})
export class VideosService {

  videos: Video[] = [
    {id: 1, width: 300, height: 300, url: 'https://www.youtube.com/watch?v=61rLFakEwk4'},
    {id: 2, width: 300, height: 300, url: 'https://www.youtube.com/watch?v=vIOn7F6o7NA'},
    {id: 3, width: 300, height: 300, url: 'https://www.youtube.com/watch?v=vIOn7F6o7NA'},
  ];

  private masterWidthListener = new BehaviorSubject<number>(300);
  private masterHeightListener = new BehaviorSubject<number>(300);
  private videosListener = new BehaviorSubject<Video[]>(this.videos);

  constructor() {
  }

  getVideosListener() {
    return this.videosListener.asObservable();
  }

  addVideo(url: string, masterHeight: number, masterWidth: number) {
    const maxId = Math.max(...this.videos.map(o => o.id), 0) + 1;
    const newVideo: Video = {id: maxId, height: masterHeight, width: masterWidth, url: url};
    this.videos.push(newVideo);
    this.videosListener.next([...this.videos]);
  }

  editVideoSize(id: number, prop: string, value: number) {
    const videoIndex = _.findIndex(this.videos, {id: id});
    if (videoIndex > -1) {
      this.videos[videoIndex][prop] = value;
      this.videos[videoIndex].isSizeOverride = true;
      this.videosListener.next([...this.videos]);
    }
  }

  getMasterWidthListener() {
    return this.masterWidthListener.asObservable();
  }

  getMasterHeightListener() {
    return this.masterHeightListener.asObservable();
  }

  updateMasterSettings(ev: any) {
    if (ev.prop === 'width') {
      this.masterWidthListener.next(ev.value);
    } else {
      this.masterHeightListener.next(ev.value);
    }
  }

}
