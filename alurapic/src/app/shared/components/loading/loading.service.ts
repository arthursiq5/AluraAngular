import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { LoadingType } from "./loading-type";
import { startWith } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class LoadingService{

  loadingSubject:Subject<LoadingType> = new Subject<LoadingType>();

  getLoading(): Observable<LoadingType>{
    return this.loadingSubject
               .asObservable()
               .pipe(startWith(LoadingType.STOPPED));
  }

  start(): void {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop(): void {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}
