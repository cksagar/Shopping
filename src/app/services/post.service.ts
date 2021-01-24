import { NotFoundError } from './../common/validators/not-found-error';
import { AppError } from './../common/validators/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Posts } from '../posts/posts';

@Injectable()
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.url)
      .pipe(map(res => res),
        catchError(this.handleError));
  }

  createPosts(post): Observable<Posts> {
    return this.httpClient.post<Posts>(this.url,
      JSON.stringify(post)).pipe(
        map(res => res),
        catchError(this.handleError));
  }

  updatePosts(post) {
    return this.httpClient.put(this.url + '/' + post.id,
      post).pipe(
        map(res => res),
        catchError(this.handleError));
  }

  patchPosts(post) {
    return this.httpClient.patch(this.url + '/' + post.id, post.title)
      .pipe(
        map(res => res),
        catchError(this.handleError));
  }

  deletePosts(id): Observable<number> {
    return this.httpClient.
      delete<number>(this.url + '/' + id)
      .pipe(
        map(res => res),
        catchError(this.handleError));
  }


  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    return throwError(new AppError(error));
  }
}
