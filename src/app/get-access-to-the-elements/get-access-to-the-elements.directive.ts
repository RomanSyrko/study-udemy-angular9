import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[appGetAccessToTheElements]'
})

export class getAccessToTheElementsDirective {

  constructor(private elRef: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.elRef.nativeElement, 'color', 'red')
  }
}
