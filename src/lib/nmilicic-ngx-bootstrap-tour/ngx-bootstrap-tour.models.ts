import { UrlSegment } from '@angular/router';

export interface IStep {
    stepId?: string;
    anchorId?: string;
    title?: string;
    content?: string;
    route?: string | UrlSegment[];
    nextStep?: number | string;
    prevStep?: number | string;
    placement?: 'above' | 'below' | 'after' | 'before' | 'left' | 'right';
    preventScrolling?: boolean;
  }
  
  export enum TourState {
    OFF,
    ON,
    PAUSED
  }
