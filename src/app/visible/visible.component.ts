import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-visible',
  templateUrl: './visible.component.html',
  styleUrls: ['./visible.component.css'],
  animations: [
    trigger('box', [
      state('start', style({background: '#0074D9'})),

      /// Для visible компонента
      /// void = зарезервований стан компонента (коли його нема)
      /// 'void => *' = ':enter'
      transition(':enter', [
        style({opacity: 0}),
        animate('850ms ease-out')
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
export class VisibleComponent {
  boxState = 'start'
  visible = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}
