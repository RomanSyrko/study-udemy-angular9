import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/// Емуляція логінації

  private isAuth: boolean = false

  login() {
    this.isAuth = true
  }

  logout() {
    this.isAuth = false
  }

  isAuthentication(): Promise<boolean> {
    return new Promise(resolve => {
      resolve(this.isAuth)
    })
  }

}
