import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadDemoRoutingModule } from './lazy-load-demo-routing.module';
import { LazyLoadDemoComponent } from './lazy-load-demo.component';
import { NgxBootstrapProductTourModule } from '../../lib/ngx-bootstrap-product-tour';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadDemoRoutingModule,
    NgxBootstrapProductTourModule
  ],
  declarations: [LazyLoadDemoComponent]
})
export class LazyLoadDemoModule { }
