import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadDemoComponent } from './lazy-load-demo.component';

describe('LazyLoadDemoComponent', () => {
  let component: LazyLoadDemoComponent;
  let fixture: ComponentFixture<LazyLoadDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
