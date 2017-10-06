import { Component, OnInit } from '@angular/core';
import { NgxBootstrapTourService } from '../../lib/nmilicic-ngx-bootstrap-tour/ngx-bootstrap-tour.service';

@Component({
  selector: 'app-tour-component',
  templateUrl: './tour-component.component.html',
  styleUrls: ['./tour-component.component.css']
})
export class TourComponentComponent {

  constructor(public tourService: NgxBootstrapTourService) { 

  this.tourService.events$.subscribe(console.log);
  this.tourService.initialize([{
    anchorId: 'start.tour',
    content: 'Welcome to the Ngx-Tour tour!',
    placement: 'below',
    title: 'Welcome',
  }]);
  }
}
