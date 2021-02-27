import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _isEmpty from 'lodash/isEmpty';
import { debounceTime, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  //isVisibile è l'opposto di isLoading, e pusho ogni volta lo stato con la funzione load
  isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isVisible$: Observable<boolean>;

  constructor() {
    this.isVisible$ = this.isLoading$$.asObservable().pipe(
      tap((pageLoading) => console.log(pageLoading)
      ),
      debounceTime(100),
      tap(loaded => (loaded ? this.enableScroll() : this.disableScroll()))
    );
   }

  disableScroll() {
    document.body.classList.add('no-scroll');
  }

  enableScroll() {
    document.body.classList.remove('no-scroll');
  }

  load(loading: boolean) {
    console.log(`[SPINNER LOAD] ${loading}`);
    this.isLoading$$.next(loading);
  } 
}
