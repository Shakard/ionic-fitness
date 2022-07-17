import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  // Local mock data
  private WORKOUTS = [
    {
      "trending": [{
        "difficulty": "Beginner",
        "type": "Full Body",
        "calories": 360,
        "duration": 85,
        "rating": 4.8,
        "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/c1.png"
      },
      {
        "difficulty": "Expert",
        "type": "Core",
        "calories": 520,
        "duration": 60,
        "rating": 4.9,
        "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/c2.png"
      },
      {
        "difficulty": "Intermediate",
        "type": "Arms",
        "calories": 250,
        "duration": 40,
        "rating": 4.7,
        "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/c3.png"
      }
      ],
      "types": [{
        "type": "Hiit",
        "session": 12,
        "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/n1.png"
      },
      {
        "type": "Amrap",
        "session": 15,
        "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/n2.png"
      },
      {
        "type": "Functional",
        "session": 10,
        "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/n3.png"
      },
      {
        "type": "Core",
        "session": 18,
        "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/n4.png"
      }
      ],
      "additional": [
        {
          "name": "Deep Amrap Burner",
          "difficulty": "Beginner",
          "type": "Full body",
          "calories": 125,
          "duration": 15,
          "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/f1.jpeg"
        },
        {
          "name": "Deep Butt Sculp",
          "difficulty": "Expert",
          "type": "Legs",
          "calories": 250,
          "duration": 30,
          "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/f1.jpeg"
        },
        {
          "name": "Warmup",
          "difficulty": "Beginner",
          "type": "Full body",
          "calories": 100,
          "duration": 10,
          "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/f1.jpeg"
        },
        {
          "name": "Burn Belly Fat Fast",
          "difficulty": "Intermediate",
          "type": "Core",
          "calories": 320,
          "duration": 15,
          "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/f1.jpeg"
        },
        {
          "name": "Deep Back Sculp",
          "difficulty": "Intermediate",
          "type": "Back",
          "calories": 200,
          "duration": 30,
          "img": "https://devdactic.fra1.digitaloceanspaces.com/foodui/f1.jpeg"
        }
      ]
    }
  ];

  constructor(private http: HttpClient) { }
  // Service that returns the days of the week with their "pico y placa" configurations
  public getWorkouts() {
    return this.http.get('https://mocki.io/v1/ce7cb887-7c83-4baf-86e0-3fc1cbe227e3');
  }
}
