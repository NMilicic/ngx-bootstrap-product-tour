import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadDemoComponent } from './lazy-load-demo.component';

const routes: Routes = [
  {
    path:'', component:LazyLoadDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadDemoRoutingModule { }
