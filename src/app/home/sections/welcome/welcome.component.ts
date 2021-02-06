import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  
  subscriptions =  new Subscription;
  wheel$ = fromEvent(window, 'wheel')
  

  
  constructor(
    private homeService: HomeService,
    private  router: Router, 
  ) { }

  ngOnInit(): void {
    const wheelSub$ = this.wheel$.pipe((
      tap((e: Event) => {
        if (e.deltaY < 0) {
          //this.homeService.onSwipe()
        this.homeService.onSwipe();  
        }
      })
    )).subscribe();

      

      this.subscriptions
            .add(wheelSub$);
  }


  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  
  ngOnDestroy():void {
   
  }

}
