import { TestBed, inject } from '@angular/core/testing';

import { NgxBootstrapTourStepService } from './ngx-bootstrap-tour-step.service';

describe('NgxBootstrapTourStepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxBootstrapTourStepService]
    });
  });

  it('should be created', inject([NgxBootstrapTourStepService], (service: NgxBootstrapTourStepService) => {
    expect(service).toBeTruthy();
  }));
});
