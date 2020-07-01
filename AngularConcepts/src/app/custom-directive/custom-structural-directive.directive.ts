import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }
    @Input() set appCustomStructuralDirective(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();        }
    }

    // TemplateRef represents the embedded template which is used to instantiate the embedded views. These embedded views are linked to the template which is to be rendered.

    // ViewContainerRef is a container where one or more views can be attached. We can use createEmbeddedView() function to attach the embedded templates in the container.
}
