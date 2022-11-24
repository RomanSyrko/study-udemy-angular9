import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPassingParametersToTheDirective]'
})
export class PassingParametersToTheDirectiveDirective {

  @Input('appPassingParametersToTheDirective') color: string = 'blue'
  @Input() fontSize = 'normal'
  @Input() dStyles: { border?: string, borderRadius?: string }

  constructor(private elRef: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Element) {
    console.log(event);
  }

  //При наведені мишки змінити колір тексту
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.elRef.nativeElement, 'color', this.color)
    this.r.setStyle(this.elRef.nativeElement, 'fontSize', this.fontSize)
    this.r.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border)
    this.r.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius)
  }

  //Повернути колір тексту при відведені мишки
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.elRef.nativeElement, 'color', null)
    this.r.setStyle(this.elRef.nativeElement, 'fontSize', null)
    this.r.setStyle(this.elRef.nativeElement, 'border', null)
    this.r.setStyle(this.elRef.nativeElement, 'borderRadius', null)
  }
}
