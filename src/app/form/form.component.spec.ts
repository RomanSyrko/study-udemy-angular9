import {FormComponent} from './form.component';
import {FormBuilder} from "@angular/forms";

describe('FormComponent', () => {

  let component: FormComponent

  beforeEach(() => {
    component = new FormComponent(new FormBuilder())
  });

  it('should create form with 2 controls', () => {
    expect(component.form.contains('login')).toBe(true)
    expect(component.form.contains('email')).toBe(true)
  });

  it('should mark login as invalid if empty value', () => {
    const control = component.form.get('login')

    control?.setValue('')

    expect(control?.valid).toBe(false)
  });

});

