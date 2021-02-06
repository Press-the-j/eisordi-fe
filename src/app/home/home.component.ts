import { Component, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { Location } from '@angular/common'; 
import { ResponsiveService } from '../service/responsive.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
    console.log(this.router.navigate(['steps-to-follow']));
    const baseUrl = this.location
    
  }

  ngOnInit(): void {
    const screenSub$ = this.responsiveService.getSizeStatus().subscribe((size) => {
              this.screen$=size;
              console.log(size)
            });

    const onSwipeSub$ = this.homeService.listenSwipe().subscribe( () => {
            console.log(this.router)
            this.router.navigate(['welcome/steps-to-follow']);
    })
    
    
    
    this.subscriptions
            .add(screenSub$)
            .add(onSwipeSub$);
           

    this.responsiveService.checkResolution();
    
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
