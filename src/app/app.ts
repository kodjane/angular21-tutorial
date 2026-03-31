import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBiding } from './components/data-biding/data-biding';

@Component({
  selector: 'app-root',
  imports: [DataBiding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21-tutorial');
}
