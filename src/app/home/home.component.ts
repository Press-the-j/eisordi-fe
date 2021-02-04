import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { ResponsiveService } from '../service/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  axis = new Subject();
  axis$ = this.axis.asObservable();
  
  screen$: string;
  subscriptions =  new Subscription;
  
  
  constructor(
    private  responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
    const screenSub$ = this.responsiveService.getSizeStatus().subscribe((size) => {
      this.screen$=size;
      console.log(size)
    })
    

    fromEvent(window, 'wheel').pipe(takeUntil(this.axis$))
			.subscribe((e: Event) => {
        if (e.deltaY <0) {
          console.log('eccolo');
          
        }
      });
    
    this.subscriptions.add(screenSub$);
    this.responsiveService.checkResolution();
    
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }


  ngOnDestroy(): void {
    this.axis.next();
    this.subscriptions.unsubscribe()
  }

}
