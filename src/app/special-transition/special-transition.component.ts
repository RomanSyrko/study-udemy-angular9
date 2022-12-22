import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-special-transition',
  templateUrl: './special-transition.component.html',
  styleUrls: ['./special-transition.component.css'],
  animations: [
    trigger('box', [
      state('start', style({background: '#0074D9'})),
      state('end', style({background: 'yellow', transform: 'scale(1.2)'})),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.8)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(500)),
      transition('end => start', animate('800ms ease-in-out')),

      /// <=> = Двостороннє звязування (Щоб не писати багато варіантів)
      /// Другим параметром можемо передати масив зі стилями і часом анімації
      transition('special <=> *', [
        style({background: 'green'}),
        animate(500, style({
          background: 'purple'
        })),
        animate(500)]),
    ])
  ]
})
export class SpecialTransitionComponent {
  boxState = 'start'

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

}
