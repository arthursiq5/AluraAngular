import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const api = 'http://localhost:3000';
@Injectable({
  providedIn:'root'
})
export class PhotoService{
  constructor(private http: HttpClient){}

  listFromUser(userName:string){
    return this.http.get<Photo[]>
          (`${api}/${userName}/photos`);
  }
}
