import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  templateUrl: './pipe-date.component.html',
  styleUrls: ['./pipe-date.component.css']
})
export class PipeDateComponent  {
  today = new Date()
}
