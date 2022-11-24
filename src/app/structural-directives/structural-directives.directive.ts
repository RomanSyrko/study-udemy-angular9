import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStructuralDirectives]'
})
export class StructuralDirectivesDirective {

  // If Not Directive
  @Input('appStructuralDirectives') set ifNot(condition: boolean) {
    if (!condition) {
      //SHOW ELEMENT
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      //HIDE
      this.viewContainer.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

}
