import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBootstrapTourModule } from '../lib/ngx-bootstrap-product-tour';
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
    NgxBootstrapTourModule.forRoot(),
    RouterModule.forRoot([{
      component: TourComponentComponent,
      path: '',
    },
  {
    component: OtherRouteComponent,
    path: 'other',
  }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
