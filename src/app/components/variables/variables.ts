import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  // string | number | boolean | string[] | jsonType

  courseName : String = "Angular 21";
  rollNumber : number = 225;
  isActive : boolean = true;
  cityList : string[] = ['Abidjan'];
  creationDate : Date = new Date();
  student = {
    name : 'Kodjane',
    age : 35,
    birthDate : 21/5/1991
  }

  constructor() {
    this.courseName = "React";
    this.rollNumber = 500;
  }
}
