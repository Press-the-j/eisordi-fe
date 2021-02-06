import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  swipe: Subject<any>=new Subject
  
  constructor() { }

  onSwipe() {
    return this.swipe.next();
  }

  listenSwipe() {
    return this.swipe.asObservable();
  }

}
