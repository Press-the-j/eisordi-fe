import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { first, takeUntil, tap } from 'rxjs/operators';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  
  subscriptions =  new Subscription;
  wheel$ = fromEvent(window, 'wheel')
  touch$ = fromEvent(window, 'touch')
  

  
  constructor(
    private homeService: HomeService,
    private  router: Router, 
  ) { }

  ngOnInit(): void {
    const wheelSub$ = this.wheel$.pipe(
      tap((e: WheelEvent) => {
        this.homeService.onSwipe(e.deltaY);  
      })
    ).subscribe();
    
    const touch$ = this.touch$.pipe(
      tap(e => console.log(e, 'touch'))
    ).subscribe()
      

    this.subscriptions
          .add(wheelSub$);
  }


  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  
  ngOnDestroy():void {
    this.subscriptions.unsubscribe();
  }

}
