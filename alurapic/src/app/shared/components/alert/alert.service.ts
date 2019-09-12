import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Alert, AlertType } from "./alert";

@Injectable({ providedIn: "root" })
export class AlertService{

  alertSubject: Subject<Alert>

  success(message: string): void{
    this.alert(AlertType.SUCCESS, message);
  }

  warning(message:string): void{
    this.alert(AlertType.WARNING, message);
  }
  danger(message:string): void{
    this.alert(AlertType.DANGER, message);
  }
  info(message:string): void{
    this.alert(AlertType.INFO, message);
  }

  private alert(alertType: AlertType, message: string){
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert(){
    return this.alertSubject.asObservable();
  }
}
