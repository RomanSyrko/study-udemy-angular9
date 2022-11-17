import {Component} from '@angular/core';

@Component({
  selector: 'app-to-way-binding',
  templateUrl: './to-way-binding.component.html',
  styleUrls: ['./to-way-binding.component.css']
})
export class ToWayBindingComponent {
  title = ''

  //Щоб не використовувати методи такі як onInput,
  // ми будемо використовувати FormsModule
  // Імпортуємо в app.module.ts >>> imports: >>> FormsModule

  //А в .html файлі пишемо [(ngModel)]=""

}
