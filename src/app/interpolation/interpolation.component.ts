import {Component} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  title = 'Angular';
  number = 42;
  array = [2, 3, 4];
  obj = {a: 1, b: {c: 2}}
}
