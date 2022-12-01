import {Component} from '@angular/core';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html'
})
export class AsyncPipeComponent {

  p$: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 1000)
  })

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 2000)
  })

  time$ = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => {
      observer.next(new Date().toString())
    }, 3000);
  });


}
