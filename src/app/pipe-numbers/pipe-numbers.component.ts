import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-numbers',
  templateUrl: './pipe-numbers.component.html',
  styleUrls: ['./pipe-numbers.component.css']
})
export class PipeNumbersComponent {
  e: number = Math.PI
}
