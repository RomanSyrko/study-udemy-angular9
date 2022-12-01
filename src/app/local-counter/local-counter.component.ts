import {Component} from '@angular/core';
import {LocalCounterService} from "./local-counter.service";

@Component({
  selector: 'app-local-counter',
  templateUrl: './local-counter.component.html',
  providers: [LocalCounterService] // Дозволяє зареєструвати локальний сервіс
})
export class LocalCounterComponent {

  constructor(public LocalCounterService: LocalCounterService) {
  }


}
