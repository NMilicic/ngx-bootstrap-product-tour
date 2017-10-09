import { Component, ViewChild, Input, ContentChild, TemplateRef, AfterContentInit } from '@angular/core';
import { IStep } from '../ngx-bootstrap-product-tour.models';
import { NgxBootstrapProductTourStepService } from './ngx-bootstrap-product-tour-step.service';
import { NgxBootstrapProductTourService } from '../ngx-bootstrap-product-tour.service';

@Component({
  selector: 'ngx-bootstrap-product-tour',
  templateUrl: './ngx-bootstrap-product-tour-step.component.html'
})
export class NgxBootstrapProductTourStepComponent implements AfterContentInit {
  @ViewChild('tourStep', { read: TemplateRef }) public defaultTourStepTemplate: TemplateRef<any>;

  @Input()
  @ContentChild(TemplateRef)
  public stepTemplate: TemplateRef<{ step: IStep }>;

  constructor(private NgxBootstrapProductTourStepService: NgxBootstrapProductTourStepService, public tourService: NgxBootstrapProductTourService) {
  }

  public ngAfterContentInit(): void {
    this.NgxBootstrapProductTourStepService.template = this.stepTemplate || this.defaultTourStepTemplate;
  }
}
