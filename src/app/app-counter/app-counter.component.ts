import {Component} from '@angular/core';
import {AppCounterService} from "./app-counter.service";

@Component({
  selector: 'app-app-counter',
  templateUrl: './app-counter.component.html'
})
export class AppCounterComponent {

  constructor(public appCounterService: AppCounterService) {
  }

}
