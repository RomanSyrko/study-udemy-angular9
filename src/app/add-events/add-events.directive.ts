import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAddEvents]'
})
export class AddEventsDirective {

  constructor(private elRef: ElementRef, private r: Renderer2) {
  }

  //@HostListener - Декоратор, який оголошує подію DOM для прослуховування та надає метод обробки, який запускається, коли ця подія відбувається.

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  //При наведені мишки змінити колір тексту
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.elRef.nativeElement, 'color', 'blue')
  }

  //Повернути колір тексту при відведені мишки
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.elRef.nativeElement, 'color', null)
  }

}
