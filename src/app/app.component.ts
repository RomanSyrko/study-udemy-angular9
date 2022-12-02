import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular NgModels';

  appState = 'on'

  handChange() {
    console.log(this.appState);
  }
}
