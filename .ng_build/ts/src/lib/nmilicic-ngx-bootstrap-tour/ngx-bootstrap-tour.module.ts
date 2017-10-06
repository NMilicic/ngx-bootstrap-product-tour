import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapTourComponent } from './ngx-bootstrap-tour.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxBootstrapTourDirective } from './ngx-bootstrap-tour.directive';
import { NgxBootstrapTourStepComponent } from './ngx-bootstrap-tour-step/ngx-bootstrap-tour-step.component';
import { NgxBootstrapTourService } from './ngx-bootstrap-tour.service';
import { NgxBootstrapTourStepService } from './ngx-bootstrap-tour-step/ngx-bootstrap-tour-step.service';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule
  ],
  declarations: [
    NgxBootstrapTourComponent,
    NgxBootstrapTourDirective,
    NgxBootstrapTourStepComponent
  ],
  exports:[
    NgxBootstrapTourComponent,
    NgxBootstrapTourDirective,
    NgxBootstrapTourStepComponent
  ],
  providers:[
    NgxBootstrapTourService, NgxBootstrapTourStepService
  ]
})
export class NgxBootstrapTourModule { }
