import { Component, OnInit } from '@angular/core';
import { AdditionalWorkout } from 'src/app/models/additional-workout';
import { TrendingWorkout } from 'src/app/models/trending-workout';
import { TypeWorkout } from 'src/app/models/type-workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  trendings:TrendingWorkout[];
  types:TypeWorkout[];
  additionals:AdditionalWorkout[];
  // ion-sliders options
  trendingSlideOpts = {
    initialSlide: 0,
    speed: 400
  };

  typeWorkoutlideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.1,
    spaceBetween: 10
  };

  aditionalTrainingOpts = {
    initialSlide: 0,
    speed: 400,
    pager: "true",
    direction: "vertical",
    slidesPerView: "2.6",
  };

  constructor(
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    this.getWorkouts();
  }
  // I search for all the workouts from the API and assign them according to their category
  getWorkouts() {
    this.workoutService.getWorkouts().subscribe((res: any) => {
      this.trendings = res.trending;
      this.types = res.types;
      this.additionals = res.additional;
      console.log(this.additionals);
    });
  }

}
