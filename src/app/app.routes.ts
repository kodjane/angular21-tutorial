import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-biding/data-binding.component';
import { Signal } from './components/signal/signal';

export const routes: Routes = [
  {path: "variables", component: Variables},
  {path: "dataBinding", component: DataBinding},
  {path: "signals", component: Signal},
];
