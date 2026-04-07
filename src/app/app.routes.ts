import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-biding/data-binding.component';
import { SignalComponent } from './components/signalComponent/signal.component';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';

export const routes: Routes = [
  {path: "", component: Variables, pathMatch:"full"},
  {path: "variables", component: Variables},
  {path: "dataBinding", component: DataBinding},
  {path: "signal", component: SignalComponent},
  {path: "controlFlow", component: ControlFlow},
  {path: "**", component: NotFound}
];
