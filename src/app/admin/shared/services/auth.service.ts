import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IFbAuthResponse, IUser} from "../../../shared/interfaces";
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";

// let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`

@Injectable({providedIn:'root'})
export class AuthService {

  /// $ - означає що це буде Стрім
  public error$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) {
  }

  /// get - використовуємо для додаткових перевірок (наприклад, чи токен валідний)
  get token(): any {
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('fb-token-exp'))
    if (new Date() > expDate) {
      // if (Date.now() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  /// Login
  login(user: IUser): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        // @ts-ignore
        tap(this.setToken),
        /// catchError - ловити помилки при не правильному вводі логіну чи паролю
        catchError(this.handleError.bind(this))
      )
  }

  /// Logout
  logout() {
    this.setToken(null)
  }

  /// даний метод буде нам "говорити" чи авторизований користувач на даний момент чи ні
  /// !! - приводить до boolean значення (Якщо щось є, тоді буде true)
  isAuthenticated(): boolean {
    return !!this.token
  }

  /// Видавати помилку при неправильній логінації
  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('INVALID EMAIL')
        break
      case 'INVALID_PASSWORD':
        this.error$.next('INVALID PASSWORD')
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next('EMAIL NOT FOUND')
        break
    }
    return throwError(error)
  }

  /// Робимо приватний setToken, щоб не було доступу ззовні
  /// Тут ми будемо описувати логіку, щоб змінювати Токени
  private setToken(response: IFbAuthResponse | null) {
    if (response) {
      /// expDate - для отримання дати, щоб в подальшому занести в localStorage
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}
