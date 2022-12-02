import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class MyValidators {

  static restrictedEmails(control: FormControl): { [key: string]: boolean } | null {
    if (['v@com', 'test@com'].includes(control.value)) {
      return {restrictedEmail: true}
    }
    return null
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      if (control.value === 'async@com') {
        resolve({uniqEmail: true})
      } else {
        resolve(null)
      }
    })
  }

}
