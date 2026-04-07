import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isActive: boolean = false;
  protected isVisible= signal(false);

  protected isToggleVisible() {
    this.isVisible.set(!this.isVisible());
  }
}
