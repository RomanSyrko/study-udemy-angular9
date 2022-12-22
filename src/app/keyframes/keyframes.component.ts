import {Component} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.css'],
  animations: [
    trigger('box', [
      state('start', style({background: '#0074D9'})),
      transition(':enter', [

        /// keyframes([]) - берез всі стилі і ділить на вказані секунди
        /// offset: - можна вказати конкретний час для кожного стилю в %
        animate('4s', keyframes([
          style({background: '#0074D9', offset: 0}),
          style({background: 'grey', offset: 0.2}),
          style({background: 'green', offset: 0.3}),
          style({background: 'yellow', offset: 1}),
        ]))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate(750, style({
          opacity: 0,
          transform: 'scale(1.2)'
        })),
      ])
    ])
  ]
})
export class KeyframesComponent {
  boxState = 'start'
  visible = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}
