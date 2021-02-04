import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  axis = new Subject();
  axis$ = this.axis.asObservable();

  
  
  constructor() { }

  ngOnInit(): void {
    fromEvent(window, 'wheel').pipe(takeUntil(this.axis$))
			.subscribe((e: Event) => {
        if (e.deltaY <0) {
          console.log('eccolo');
          
        }
      });
  }
  
  ngOnDestroy():void {
    this.axis.next();
  }

}
