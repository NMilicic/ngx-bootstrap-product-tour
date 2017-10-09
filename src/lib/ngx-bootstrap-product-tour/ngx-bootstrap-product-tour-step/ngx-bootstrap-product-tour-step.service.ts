import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class NgxBootstrapProductTourStepService {
  public template: TemplateRef<{ content: string }>;
}
