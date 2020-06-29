import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-changestratgey',
  templateUrl: './changestratgey.component.html',
  styleUrls: ['./changestratgey.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangestratgeyComponent implements OnInit {
  constructor() { }
  Array1=["Ganesh","Ganapati","Bhat"];
  p: any;
  ngOnInit(): void {

  }
  foods = ['Bacon', 'Lettuce', 'Tomatoes'];
  addFood(food) {
    this.foods.push(food);
    // this.foods =[...this.foods,food]
  }
 
}
