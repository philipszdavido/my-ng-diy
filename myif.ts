import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]',
  standalone: true,
})
export class MyIf {
  constructor(private vcr: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  @Input() set myIf(condition: boolean) {
    if (condition) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else {
      this.vcr.clear();
    }
  }
}
