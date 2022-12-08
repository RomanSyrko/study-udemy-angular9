import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {delay, catchError, Observable, throwError, tap} from "rxjs";
import * as events from "events";

export interface ITodo {
  completed: boolean
  title: string
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    // return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos')
    /// Створення власних Headers і передаємо його нижче як options:
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    })
    return this.http.post<ITodo>('https://jsonplaceholder.typicode.com/todos', todo, {headers})
  }

  fetchTodos(): Observable<ITodo[]> {
    // return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=4)

    /// Додавання Query параметрів і передаємо його нижче як options:
    /// Якщо передавати лише один параметр:
    const params = new HttpParams().set('_limit', '4')

    // /// Якщо передавати декілька параметрів:
    // let params = new HttpParams()
    // params = params.append('_limit', '4')
    // params = params.append('custom', 'any')

    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {
      params
    })
      // Штучна затримка в мілісекундах .pipe(delay(500)) - RxJS
      .pipe(
        delay(500),
        // Відловлювання помилок
        catchError(error => {
          console.log(error.message);
          return throwError(error)
        })
      )
  }

  removeTodo(id: number): Observable<any> {
    // return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)

    /// Параметр observe
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    }).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log('Sent:', event);
        }
        if (event.type === HttpEventType.Response)
          console.log('Response:', event);
      })
    )
  }

  completeTodo(id: number): Observable<ITodo> {
    // return this.http.put<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true})

    /// Параметр responseType
    return this.http.put<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    }, {
      responseType: 'json'
    })
  }

}
