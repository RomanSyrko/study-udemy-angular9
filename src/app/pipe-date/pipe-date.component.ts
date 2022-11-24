import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  templateUrl: './pipe-date.component.html'
})
export class PipeDateComponent  {
  today = new Date()
}
