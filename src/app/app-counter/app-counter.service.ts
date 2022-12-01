import {Injectable} from '@angular/core';

// Декоратор Injectable дозволяє не реєструвати сервіси в app.module
@Injectable({
  providedIn: 'root'
})

export class AppCounterService {

  counter = 0

  increase() {
    this.counter++
  }

  decrease() {
    this.counter--
  }
}
