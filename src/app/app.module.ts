import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBootstrapProductTourModule } from '../lib/ngx-bootstrap-product-tour';
import { TourComponentComponent } from './tour-component/tour-component.component';
import { RouterModule } from '@angular/router';
import { OtherRouteComponent } from './other-route/other-route.component';

@NgModule({
  declarations: [
    AppComponent,
    TourComponentComponent,
    OtherRouteComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapProductTourModule.forRoot(),
    RouterModule.forRoot([{
      component: TourComponentComponent,
      path: '',
    },
    {
      component: OtherRouteComponent,
      path: 'other',
    },
    {
      path: 'lazyLoadDemo',
      loadChildren: 'app/lazy-load-demo/lazy-load-demo.module#LazyLoadDemoModule'
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
