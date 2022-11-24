import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  @Input('appStyle') color: string = 'blue'

  @HostBinding('style.color') elColor: any = null


  //При наведені мишки змінити колір тексту
  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
  }

  //Повернути колір тексту при відведені мишки
  @HostListener('mouseleave') onLeave() {
    this.elColor = null
  }

}
