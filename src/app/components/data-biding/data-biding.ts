import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  imports: [],
  templateUrl: './data-biding.html',
  styleUrl: './data-biding.css',
})
export class DataBiding {
  courseName: String = 'Angular 21';
  teacherName = signal("Kodjane");

  function1() {
    alert("Angular 21")
    let name = this.teacherName();
    this.teacherName.set("This is a signal");
  }

  protected function2() {
    alert("Selection changed")
  }
}
