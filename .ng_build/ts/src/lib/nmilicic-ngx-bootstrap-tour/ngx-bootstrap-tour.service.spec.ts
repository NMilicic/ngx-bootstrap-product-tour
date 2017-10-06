import { TestBed, inject } from '@angular/core/testing';

import { NgxBootstrapTourService } from './ngx-bootstrap-tour.service';

describe('NgxBootstrapTourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxBootstrapTourService]
    });
  });

  it('should be created', inject([NgxBootstrapTourService], (service: NgxBootstrapTourService) => {
    expect(service).toBeTruthy();
  }));
});
