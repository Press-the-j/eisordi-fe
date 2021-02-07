import { Component, OnInit,  HostBinding  } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { Location } from '@angular/common'; 
import { ResponsiveService } from '../services/responsive.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HomeService } from '../services/home.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
}from '@angular/animations';
import { slideInAnimation } from './components/animations/slide-in-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // animation triggers go here
    slideInAnimation
  ]
})
export class HomeComponent implements OnInit {

  screen$: string;
  subscriptions =  new Subscription;
  
  
  constructor(
    private  responsiveService: ResponsiveService,
    private  route: ActivatedRoute,
    private  router: Router, 
    private  homeService: HomeService,
    private  location: Location
  ) { 
    
    
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  ngOnInit(): void {
    const screenSub$ = this.responsiveService.getSizeStatus().subscribe((size) => {
              this.screen$=size;
              console.log(size)
            });

    const locationSub$ = this.homeService.streamLocation().pipe(
      tap((path) => {
        this.router.navigate([path])
      })
    ).subscribe()
    
    this.subscriptions
            .add(screenSub$)
            .add(locationSub$);
    
    this.responsiveService.checkResolution();
    
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  

}
