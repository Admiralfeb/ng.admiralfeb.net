import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiningSelectorComponent } from './dining-selector.component';

const routes: Routes = [
  { path: 'main', component: DiningSelectorComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiningSelectorRoutingModule { }
