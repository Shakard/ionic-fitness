import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  constructor(private http: HttpClient) { }
  // Service that returns workouts
  public getWorkouts() {
    return this.http.get('https://mocki.io/v1/ce7cb887-7c83-4baf-86e0-3fc1cbe227e3');
  }
}
