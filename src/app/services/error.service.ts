import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  alertError(error) {
    console.log(error);
    
    return alert(error)
  }
}
