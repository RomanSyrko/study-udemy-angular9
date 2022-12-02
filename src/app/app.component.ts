import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Forms and Validations';

  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup<any>({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ], [<any>MyValidators.uniqEmail]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    if (this.form.valid) {               // додаткова перевірка на валідність (окрім того, що є в HTML файлі)
      console.log(this.form);

      const formData = this.form.value;
      console.log(formData);

      this.form.reset() // очищає форму після submit
    }
  }

  setCapital() {
    // {[index: string]:any} - щоб не було помилки: TS7053
    const cityMap: { [index: string]: any } = {
      ua: 'Kyiv',
      pl: 'Warshaw',
      en: 'London'
    }
    const cityKey = this.form.get('address')?.get('country')?.value;
    const city = cityMap[cityKey];
    this.form.patchValue({address: {city}});  // пишемо один раз {city} замість {city: city} бо назви збігаються
  }

  AddSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control)  // або такий варінт запису: (this.form.get('skills') as FormArray).controls.push(control);
  }

  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }

}
