import {Component} from '@angular/core';
import {boxAnimation} from "./ng-animate.animations";

@Component({
  selector: 'app-ng-animate',
  templateUrl: 'ng-animate.component.html',
  styleUrls: ['./ng-animate.component.css'],
  animations: [boxAnimation], /// Виводити всі анімації в окремий файл
})
export class NgAnimateComponent {
  bounce: any;
  visible = true
}
