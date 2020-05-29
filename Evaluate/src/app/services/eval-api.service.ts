import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class EvalAPIService {
  private baseUrl = environment.EvalAPIBaseUrl;

  get defaultUserId() { return 0; }

  constructor(private http: HttpClient) { }

  httpOptions =
  {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

// ! ~~~~~~~~~~~~~~~~~~~~~~~~~~
// ! ******* USERS *********
// ! ~~~~~~~~~~~~~~~~~~~~~~~~~~

  getUsersAll() : Observable<User[]>
  {
    return this.http.get<User[]>(`${this.baseUrl}api/Users`)
      .pipe(
        catchError(this.handleError<User[]>(`getUsersAll`,[]))
      );
  }

  getUserById(id : number) : Observable<User>
{
  return this.http.get<User>(`${this.baseUrl}api/Users/${id}`)
    .pipe(
      catchError(this.handleError<User>(`getUserById`))
    );
}

createUser(user : User) : Observable<User>
{
  return this.http.post<User>(`${this.baseUrl}api/Users`, user, this.httpOptions)
    .pipe(
      catchError(this.handleError<User>(`createUser`))
    );;
}

searchUser(term : string): Observable<User[]>
{
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<User[]>(`${this.baseUrl}api/Users?search=${term}`).pipe(
    catchError(this.handleError<User[]>('searchUser', []))
  );
}

updateUser(user : User): Observable<any>
{
  return this.http.put(`${this.baseUrl}api/Users/${user.userId}`, user, this.httpOptions).pipe(
    catchError(this.handleError<User>('updateUser'))
  );
}

deleteUser(id: number)
{
  return this.http.delete(`${this.baseUrl}api/Users/${id}`)
    .pipe(
      catchError(this.handleError<User[]>(`deleteUser`,[]))
    );;
}



  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> => {
      console.error(operation + " " + error);
      return of(result as T);
    };
}
}
