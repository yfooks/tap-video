import {Injectable} from '@angular/core';

import * as _ from 'lodash';
import {Video} from '../models';


@Injectable({providedIn: 'root'})
export class VideosService {

  videos: Video[] = [
    {id: 1, width: 300, height: 300, url: 'https://www.youtube.com/watch?v=61rLFakEwk4'},
    {id: 2, width: 300, height: 300, url: 'https://www.youtube.com/watch?v=vIOn7F6o7NA'},
  ];

  constructor() {
  }

  getVideos() {
    return this.videos;
  }

  addVideo(url: string, masterHeight: number, masterWidth: number) {
    const maxId = Math.max(...this.videos.map(o => o.id), 0) + 1;
    this.videos.push({id: maxId, height: masterHeight, width: masterWidth, url: url});
  }
}
