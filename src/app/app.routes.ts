import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-biding/data-binding.component';
import { Signal } from './components/signal/signal';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {path: "", component: Variables, pathMatch:"full"},
  {path: "variables", component: Variables},
  {path: "dataBinding", component: DataBinding},
  {path: "signal", component: Signal},
  {path: "**", component: NotFound}
];
