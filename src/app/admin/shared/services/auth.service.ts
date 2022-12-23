import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IFbAuthResponse, IUser} from "../../../shared/interfaces";
import {Observable, tap} from "rxjs";
import {environment} from "../../../../environments/environment";

  // let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {
  }

  /// get - використовуємо для додаткових перевірок (наприклад, чи токен валідний)
  get token(): string {
    return ''
  }

  /// Login
  login(user: IUser): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
    // @ts-ignore
        tap(this.setToken)
      )
  }

  /// Logout
  logout() {
  }

  /// даний метод буде нам "говорити" чи авторизований користувач на даний момент чи ні
  /// !! - приводить до boolean значення (Якщо щось є, тоді буде true)
  isAuthenticated(): boolean {
    return !!this.token
  }

  /// Робимо приватний setToken, щоб не було доступу ззовні
  /// Тут ми будемо описувати логіку, щоб змінювати Токени
  // @ts-ignore
  private setToken(response: IFbAuthResponse) {
    console.log(response);
  }
}
