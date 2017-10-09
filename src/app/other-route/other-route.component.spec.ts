import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRouteComponent } from './other-route.component';

describe('OtherRouteComponent', () => {
  let component: OtherRouteComponent;
  let fixture: ComponentFixture<OtherRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
