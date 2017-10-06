import { Component, ViewChild, Input, ContentChild, TemplateRef, AfterContentInit } from '@angular/core';
import { IStep } from '../ngx-bootstrap-tour.models';
import { NgxBootstrapTourStepService } from './ngx-bootstrap-tour-step.service';
import { NgxBootstrapTourService } from '../ngx-bootstrap-tour.service';

@Component({
  selector: 'app-ngx-bootstrap-tour-step',
  template: `
    <ng-template #tourStep let-step="step">
      <p class="tour-step-content">{{step?.content}}</p>
      <div class="tour-step-navigation">
        <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">« Prev</button>
        <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">Next »</button>
        <button class="btn btn-sm btn-default" (click)="tourService.end()">End</button>
      </div>
    </ng-template>
  `
})
export class NgxBootstrapTourStepComponent implements AfterContentInit {
  @ViewChild('tourStep', { read: TemplateRef }) public defaultTourStepTemplate: TemplateRef<any>;

  @Input()
  @ContentChild(TemplateRef)
  public stepTemplate: TemplateRef<{ step: IStep }>;

  constructor(private ngxBootstrapTourStepService: NgxBootstrapTourStepService, public tourService: NgxBootstrapTourService) {
  }

  public ngAfterContentInit(): void {
    this.ngxBootstrapTourStepService.template = this.stepTemplate || this.defaultTourStepTemplate;
  }
}
