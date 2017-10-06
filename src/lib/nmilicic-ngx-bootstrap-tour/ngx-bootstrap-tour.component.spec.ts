import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapTourComponent } from './ngx-bootstrap-tour.component';

describe('NgxBootstrapTourComponent', () => {
  let component: NgxBootstrapTourComponent;
  let fixture: ComponentFixture<NgxBootstrapTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
