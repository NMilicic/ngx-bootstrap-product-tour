import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxBootstrapProductTourDirective } from './ngx-bootstrap-product-tour.directive';
import { NgxBootstrapProductTourStepComponent } from './ngx-bootstrap-product-tour-step/ngx-bootstrap-product-tour-step.component';
import { NgxBootstrapProductTourService } from './ngx-bootstrap-product-tour.service';
import { NgxBootstrapProductTourStepService } from './ngx-bootstrap-product-tour-step/ngx-bootstrap-product-tour-step.service';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule.forRoot()
  ],
  declarations: [
    NgxBootstrapProductTourDirective,
    NgxBootstrapProductTourStepComponent
  ],
  entryComponents: [
    NgxBootstrapProductTourDirective,
    NgxBootstrapProductTourStepComponent
  ],
  exports: [
    NgxBootstrapProductTourDirective,
    NgxBootstrapProductTourStepComponent
  ],
  providers: [
    NgxBootstrapProductTourService, NgxBootstrapProductTourStepService
  ]
})
export class NgxBootstrapProductTourModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBootstrapProductTourModule,
      providers: [
        NgxBootstrapProductTourService,
        NgxBootstrapProductTourStepService
      ],
    };
  }
}
