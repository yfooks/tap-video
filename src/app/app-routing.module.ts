import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VideosComponent} from './features/videos/videos.component';

const routes: Routes = [
  {path: '', component: VideosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
