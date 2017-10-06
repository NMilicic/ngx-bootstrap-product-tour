import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapTourStepComponent } from './ngx-bootstrap-tour-step.component';

describe('NgxBootstrapTourStepComponent', () => {
  let component: NgxBootstrapTourStepComponent;
  let fixture: ComponentFixture<NgxBootstrapTourStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapTourStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapTourStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
