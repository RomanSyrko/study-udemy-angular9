import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css'],
  animations: [
    trigger('box', [
      state('start', style({background: '#0074D9'})),
      state('end', style({background: 'yellow', transform: 'scale(1.2)'})),

      /// transition - відповідає за Анімацію
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
    ])
  ]
})
export class TransitionComponent {
  boxState = 'start'

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}
