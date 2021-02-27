import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logThis(payload) {
    console.log(payload);
    
  }
}
