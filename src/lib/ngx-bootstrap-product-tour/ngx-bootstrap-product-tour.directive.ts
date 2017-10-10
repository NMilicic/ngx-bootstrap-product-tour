import { ComponentFactoryResolver, Directive, ElementRef, Injector, Input, NgZone, OnDestroy, OnInit, Renderer2, ViewContainerRef, Renderer } from '@angular/core';
import { ComponentLoaderFactory, PopoverConfig, PopoverDirective } from 'ngx-bootstrap';
import { NgxBootstrapProductTourService } from './ngx-bootstrap-product-tour.service';
import { IStep } from './ngx-bootstrap-product-tour.models';

import withinviewport from 'withinviewport';
import { NgxBootstrapProductTourStepService } from './ngx-bootstrap-product-tour-step/ngx-bootstrap-product-tour-step.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[tourAnchor]'
})
export class NgxBootstrapProductTourDirective extends PopoverDirective implements OnInit, OnDestroy {

  @Input() public tourAnchor: string;
  private element: ElementRef;

  constructor(private tourService: NgxBootstrapProductTourService,
    private tourStepTemplate: NgxBootstrapProductTourStepService,
    _elementRef: ElementRef,
    _renderer: Renderer,
    viewContainerRef: ViewContainerRef,
    _config: PopoverConfig,
    _cis: ComponentLoaderFactory

  ) {
    super(_elementRef, _renderer, viewContainerRef, _config, _cis);
    this.element = _elementRef;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStep): void {
    this.popover = this.tourStepTemplate.template;
    this.popoverTitle = step.title;
    this.containerClass = step.containerClass ? step.containerClass : '';
    this.placement = step.placement ? step.placement : 'top';
    this.container = 'body';

    this.show();
    if (!step.preventScrolling) {
      if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(false);
      } else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(true);
      }
    }
  }

  public hideTourStep(): void {
    this.hide();
  }
}
