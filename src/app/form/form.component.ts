import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  template: 'FormComponent'
})
export class FormComponent {

  public form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    })
  }

}
