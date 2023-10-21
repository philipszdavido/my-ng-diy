import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]',
  standalone: true,
})
export class MyFor {
  constructor(private vcr: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  @Input() set myFor(expression: any) {
    console.log(expression, this.vcr, this.templateRef);
  }

  myForOf() {

  }
}

@Directive({
    selector: '[myForOf]',
    standalone: true,
  })
  export class MyForOf {
    constructor(private vcr: ViewContainerRef, private templateRef: TemplateRef<any>) {}
  
    @Input() set myForOf(expression: Array<any>) {
      console.log(expression, this.vcr, this.templateRef);
      expression.forEach((item) => {
        this.vcr.createEmbeddedView(this.templateRef, { $implicit: item });
      });
    }
 
  }