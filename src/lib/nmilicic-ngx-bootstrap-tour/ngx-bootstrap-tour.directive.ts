import { ComponentFactoryResolver,Directive,ElementRef,Injector,Input,NgZone,OnDestroy,OnInit,Renderer2,ViewContainerRef, Renderer} from '@angular/core';
import { ComponentLoaderFactory, PopoverConfig, PopoverDirective } from 'ngx-bootstrap';
import { NgxBootstrapTourService } from './ngx-bootstrap-tour.service';
import {IStep} from './ngx-bootstrap-tour.models';

//import withinviewport from 'withinviewport';
import { NgxBootstrapTourStepService } from './ngx-bootstrap-tour-step/ngx-bootstrap-tour-step.service';

@Directive({
  selector: '[appNgxBootstrapTour]'
})
export class NgxBootstrapTourDirective  extends PopoverDirective implements OnInit, OnDestroy{

  @Input() public appNgxBootstrapTour: string;
  private element: ElementRef;

  constructor(private tourService: NgxBootstrapTourService,
              private tourStepTemplate: NgxBootstrapTourStepService,
              _elementRef: ElementRef,
              _renderer: Renderer,
              viewContainerRef: ViewContainerRef,
              _config: PopoverConfig,
              _cis: ComponentLoaderFactory,
  ) {
    super(_elementRef, _renderer, viewContainerRef, _config, _cis);
    this.element = _elementRef;
  }

  public ngOnInit(): void {
    debugger;
    this.tourService.register(this.appNgxBootstrapTour, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.appNgxBootstrapTour);
  }

  public showTourStep(step: IStep): void {
    debugger;
    this.popover = this.tourStepTemplate.template;
    this.popoverTitle = step.title;
    this.container =  'body';
    switch (step.placement) {
      case 'above':
        this.placement = 'top';
        break;
      case 'below':
        this.placement = 'bottom';
        break;
      case 'right':
      case 'after':
        this.placement = 'right';
        break;
      case 'left':
      case 'before':
        this.placement = 'left';
        break;
      default:
        this.placement = 'top';
    }
    // this.show({ step });
    this.show();
  /*  if (!step.preventScrolling) {
      if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(false);
      } else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(true);
      }
    }*/
  }

  public hideTourStep(): void {
    this.hide();
  }
}
