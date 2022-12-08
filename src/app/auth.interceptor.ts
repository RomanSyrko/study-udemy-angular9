import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpEventType} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept Request', request);

    const cloned = request.clone({
      headers: request.headers.append('Auth', 'SOME RANDOM TOKEN')
    })

    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Intercept Response', event);
        }
      })
    )
  }
}
