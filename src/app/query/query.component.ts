import {Component} from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
  animations: [
    trigger('box', [
      state('start', style({background: '#0074D9'})),
      state('end', style({background: 'yellow', transform: 'scale(1.2)'})),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.8)',
        borderRadius: '50%'
      })),

      /// transition - відповідає за Анімацію
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        /// query() - також пхаємо в group([])
        group([
          query('h4', animate(1500, style({
            fontSize: '1.5rem',
            color: 'red'
          }))),
          style({background: 'green'}),
          animate('1s', style({
            background: 'pink'
          })),
          animate(750)]),
      ])
    ])
  ]
})
export class QueryComponent {
  boxState = 'start'

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}
