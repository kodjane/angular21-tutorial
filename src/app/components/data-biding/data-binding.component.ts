import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBinding {
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
