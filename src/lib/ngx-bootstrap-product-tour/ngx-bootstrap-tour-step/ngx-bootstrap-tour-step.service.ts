import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class NgxBootstrapTourStepService {
  public template: TemplateRef<{ content: string }>;
}
