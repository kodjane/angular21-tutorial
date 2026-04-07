import { Component, signal } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  fullNameWithoutSignal = 'Robert D. Martin';
  // fullNameWithSignal = signal('Aime D. Kodjane');

  constructor() {
    // This one does not update the view when the value changes
    console.log(this.fullNameWithoutSignal);
    setTimeout(() => {
      this.fullNameWithoutSignal = 'Angular 21';
      console.log(this.fullNameWithoutSignal);
    }, 3000);
    //
    // // This one updates the view when the value changes
    // console.log(this.fullNameWithSignal());
    // setTimeout(() => {
    //   this.fullNameWithSignal.set('Mastering Angular 21');
    // }, 3000);
  }
}
