import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {

  @Input('appStyle') color: string = 'blue'
  @Input() dStyles: { border?: string, borderRadius?: string }

  @HostBinding('style.color') elColor: any = null

  constructor(private elRef: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.elRef.nativeElement, 'color', 'blue')
    // elRef.nativeElement.style.color = 'red' //Не дуже добре
  }

  //@HostListener - Декоратор, який оголошує подію DOM для прослуховування та надає метод обробки, який запускається, коли ця подія відбувається.

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  //При наведені мишки змінити колір тексту
  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
    // this.r.setStyle(this.elRef.nativeElement, 'color', this.color)
    // this.r.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border)
    // this.r.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius)
  }

  //Повернути колір тексту при відведені мишки
  @HostListener('mouseleave') onLeave() {
    this.elColor = null
    // this.r.setStyle(this.elRef.nativeElement, 'color', null)
    // this.r.setStyle(this.elRef.nativeElement, 'border', null)
    // this.r.setStyle(this.elRef.nativeElement, 'borderRadius', null)
  }
}
