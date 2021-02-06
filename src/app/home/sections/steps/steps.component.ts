import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { first, takeUntil, tap } from 'rxjs/operators';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  
  subscriptions =  new Subscription;
  wheel$ = fromEvent(window, 'wheel')
  

  
  constructor(
    private homeService: HomeService,
    private  router: Router, 
  ) { }

  ngOnInit(): void {
    const wheelSub$ = this.wheel$.pipe((
      tap((e: WheelEvent) => {
        this.homeService.onSwipe(e.deltaY);  
      })
    )).subscribe();

      

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
