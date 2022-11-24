import {Component} from '@angular/core';

@Component({
  selector: 'app-pipe-additional',
  templateUrl: './pipe-additional.component.html'
})
export class PipeAdditionalComponent {
  float = 0.42

  obj = {
    a: 1,
    b:{
      c:2,
      d:{
        e:3,
        f:4
      }
    }
  }
}
