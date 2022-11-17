import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  inputValue = ''
  enterValue = ''
  buttonValue = ''

  onInput(event: any) {
    this.inputValue = event.target.value
  }

  onEnterClick(event: any) {
    this.enterValue = event.target.value
  }

  onButtonClick(event: any) {
    this.buttonValue = this.inputValue
  }
}
