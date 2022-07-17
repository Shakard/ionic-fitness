import { Component, OnInit } from '@angular/core';
import { AdditionalWorkout } from '../models/additional-workout';
import { TrendingWorkout } from '../models/trending-workout';
import { TypeWorkout } from '../models/type-workout';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  // trending: TrendingWorkout[];
  // types: TypeWorkout[];
  // additional: AdditionalWorkout[];
  trendings = [];
  types = [];
  additionals = [];

  trendingSlideOpts = {
    initialSlide: 0,
    speed: 400
  };

  typeWorkoutlideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.1,
    spaceBetween:10
  };

  aditionalTrainingOpts = {
    initialSlide: 0,
    speed: 400,
     pager:"true",
     direction:"vertical",
     slidesPerView:"2",
  };

  constructor(
    private workoutService: WorkoutService
    ) {}

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts() {
    this.workoutService.getWorkouts().subscribe((res: any) => {
      this.trendings = res.trending;
      this.types = res.types;
      this.additionals = res.additional;      
      console.log(this.additionals);
      
    }); 
  }


}
