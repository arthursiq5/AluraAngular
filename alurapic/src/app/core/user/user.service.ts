import { Injectable } from "@angular/core";
import { TokenService } from "../token/token.service";
import { Subject, Observable } from "rxjs";
import { User } from "./user";
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService{

  private userSubject: Subject<User> = new Subject<User>();

  constructor(private tokenService: TokenService){
    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  setToken(token:string):void{
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser():Observable<User>{
    return this.userSubject.asObservable();
  }

  private decodeAndNotify():void{
    const token = this.tokenService.getToken();
    const user: User = jwt_decode(token) as User;
    this.userSubject.next(user);
  }
}