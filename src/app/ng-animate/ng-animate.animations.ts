import {transition, trigger, useAnimation} from "@angular/animations";
import {bounce, bounceOutUp} from "ng-animate";

export const boxAnimation = trigger('bounce', [

  /// Використовуєсо готові анімації useAnimation з бібліонетки ng-animate
  /// https://www.npmjs.com/package/ng-animate
  transition('void => *', useAnimation(bounce)),
  transition('* => void', useAnimation(bounceOutUp, {
    // Встановіть тривалість (timing: 5) секунд і затримку (delay: 2) секунди
    params: {timing: 3, delay: 0.3}
  })),
])
