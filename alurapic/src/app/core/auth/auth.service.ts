import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  authenticate(userName:string, password:string): Observable<HttpResponse<object>>{
    return this.http
      .post(
        API_URL + "/user/login",
        { userName, password },
        { observe:'response' }
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        window.localStorage.setItem('authtoken', authToken);
        console.log(authToken);
      }));
  }
}
