import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IFbCreateResponse, IPost} from "./interfaces";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  create(post: IPost): Observable<IPost> {
    return this.http.post<IFbCreateResponse>(`${environment.fbDbURL}/posts.json`, post)
      .pipe(
        map((response: IFbCreateResponse) => {
          return {
            ...post,
            id: response.name,
            date: new Date(post.date)
          }
        })
      )
  }

  getAll(): Observable<IPost[]> {
    return this.http.get(`${environment.fbDbURL}/posts.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key,
              date: new Date(response[key].date)
            }))
        })
      )
  }

  remove(id: string): Observable<void>{
    return  this.http.delete<void>(`${environment.fbDbURL}/posts/${id}.json`)
  }

}
