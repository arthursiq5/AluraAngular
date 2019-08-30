import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const api = 'http://localhost:3000';
@Injectable({
  providedIn:'root'
})
export class PhotoService{
  constructor(private http: HttpClient){}

  listFromUser(userName:string){
    return this.http.get<Object[]>
          (api + '/flavio/photos')

  }
}
