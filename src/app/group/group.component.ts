import {Component} from '@angular/core';
import {animate, group, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  animations: [
    trigger('box', [
      state('start', style({background: '#0074D9'})),

      transition(':enter', [
        style({opacity: 0}),
        animate('1500ms ease-out')
      ]),
      transition(':leave', [
        style({opacity: 1}),

        /// group([]) - одночасна анімація у групі (sequence([]) - працює по замовчуваню)
        group([
          animate(2000, style({
            opacity: 0,
            transform: 'scale(1.2)'
          })),
          animate(1000, style({
            color: 'white',
            fontWeight: 'bold'
          })),
          animate(1500)
        ])
      ])
    ])
  ]
})
export class GroupComponent {
  boxState = 'start'
  visible = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}
