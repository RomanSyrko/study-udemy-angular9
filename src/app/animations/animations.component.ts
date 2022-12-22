import {Component} from '@angular/core';
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('box', [
      state('start', style({background: '#0074D9'})),
      state('end', style({background: 'yellow', transform: 'scale(1.2)'})),
    ])
  ]
})

export class AnimationsComponent {
  boxState = 'start'

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}
