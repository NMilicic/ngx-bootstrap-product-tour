import { UrlSegment } from '@angular/router';

export interface IStep {
  stepId?: string;
  anchorId?: string;
  title?: string;
  content?: string;
  route?: string | UrlSegment[];
  nextStep?: number | string;
  prevStep?: number | string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  preventScrolling?: boolean;
  containerClass?: string;
  orphan?: boolean;
}

export enum TourState {
  OFF,
  ON,
  PAUSED
}
