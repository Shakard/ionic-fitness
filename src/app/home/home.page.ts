import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  trendingSlideOpts = {
    initialSlide: 1,
    speed: 400
  };

  typeWorkoutlideOpts = {
    freeMode: true,
    slidesPerView: 2.1,
    slidesOffsetBefore: 11,
  };

  constructor() {}

}
