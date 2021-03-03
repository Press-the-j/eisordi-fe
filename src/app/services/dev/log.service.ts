import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logThis(message,payload) {
    console.log(message, payload);
    
  }
}
