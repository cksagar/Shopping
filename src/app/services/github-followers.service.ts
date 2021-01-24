import { Follower } from './../github-followers/follower';
import { BadInput } from './../common/validators/bad-input';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { AppError } from '../common/validators/app-error';
import { NotFoundError } from '../common/validators/not-found-error';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class GithubFollowersService {

  url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) {

  }

  getFollowers(): Observable<Follower[]> {
    return this.http.get<Follower[]>(this.url)
      .pipe(
        map(res => res),
        catchError(this.handleError));
  }


  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    return throwError(new AppError(error));
  }
}
