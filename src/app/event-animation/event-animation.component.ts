import {Component} from '@angular/core';
import {animate, state, style, transition, trigger, AnimationEvent} from "@angular/animations";

@Component({
  selector: 'app-event-animation',
  templateUrl: './event-animation.component.html',
  styleUrls: ['./event-animation.component.css'],
  animations: [
    trigger('box', [
      state('start', style({background: '#0074D9'})),
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
export class EventAnimationComponent {
  boxState = 'start'
  visible = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

  /// має бути тип AnimationEvent
  animationStarted(event: AnimationEvent) {
    console.log('animationStarted:', event);
  }

  animationDone(event: AnimationEvent) {
    console.log('animationDone:', event);

  }
}
