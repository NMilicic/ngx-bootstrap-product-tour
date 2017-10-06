import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBootstrapTourModule } from '../lib/nmilicic-ngx-bootstrap-tour/ngx-bootstrap-tour.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapTourModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
