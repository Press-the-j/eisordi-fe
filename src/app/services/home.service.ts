import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Map } from '../models/map';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  map: Map[] = [
    {
      'location': 'welcome',
      'path':'welcome',
      'isActive': true
    },
    {
      'location': 'steps-to-follow',
      'path':'welcome/steps-to-follow',
      'isActive': false
    }

  ]

  path: BehaviorSubject<string> = new BehaviorSubject(''); 
  
  constructor(
    private router: Router,
  ) { }

  onSwipe(delta: number) {
    const currIndex = this.findActive()
     
    if (delta < -15) {
      this.changeLocation(currIndex, 'up' )
      ;
    } else if(delta > 15){
      this.changeLocation(currIndex, 'down' );
    }
  }

  changeLocation(i: number, direction: string): void  {
    let newMap = [...this.map];  
    if (direction === 'up' && this.map[i-1]) {      
      newMap = [...this.switch(i, newMap)];
      newMap = [...this.switch(i-1, newMap)];
    } else if(direction === 'down' && this.map[i+1]) {
      newMap = [...this.switch(i, newMap)];
      newMap = [...this.switch(i+1, newMap)];
    } else {
      return
    } 

    this.map=[...newMap];
    const newPath = this.newLocation();

    this.path.next(newPath);
  }

  streamLocation(): Observable<string> {
    return this.path.asObservable();
  }

  newLocation(): string {
    const i = this.findActive()
    return this.map[i].path
  }

  findActive(): number {
    return this.map.findIndex((e: Map) => e.isActive);
  }

  switch(i: number, newMap: Map[]): Map[] {
    newMap[i].isActive = !newMap[i].isActive
    return newMap;
  }

}
