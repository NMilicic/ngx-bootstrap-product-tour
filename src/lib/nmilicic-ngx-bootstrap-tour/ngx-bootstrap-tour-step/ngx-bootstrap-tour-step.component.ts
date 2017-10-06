import { Component, ViewChild, Input, ContentChild, TemplateRef, AfterContentInit } from '@angular/core';
import { IStep } from '../ngx-bootstrap-tour.models';
import { NgxBootstrapTourStepService } from './ngx-bootstrap-tour-step.service';
import { NgxBootstrapTourService } from '../ngx-bootstrap-tour.service';

@Component({
  selector: 'app-ngx-bootstrap-tour-step',
  templateUrl: './ngx-bootstrap-tour-step.component.html'
})
export class NgxBootstrapTourStepComponent implements AfterContentInit {
  @ViewChild('tourStep', { read: TemplateRef }) public defaultTourStepTemplate: TemplateRef<any>;

  @Input()
  @ContentChild(TemplateRef)
  public stepTemplate: TemplateRef<{ step: IStep }>;

  constructor(private ngxBootstrapTourStepService: NgxBootstrapTourStepService, public tourService: NgxBootstrapTourService) {
  }

  public ngAfterContentInit(): void {
    debugger;
    this.ngxBootstrapTourStepService.template = this.stepTemplate || this.defaultTourStepTemplate;
  }
}
