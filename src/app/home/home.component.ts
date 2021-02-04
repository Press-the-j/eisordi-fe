import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveService } from '../service/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  screen$
  subscriptions: Subscription;
  constructor(
    private  responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
    const screenSub$ = this.responsiveService.getSizeStatus().subscribe((size) => {
      this.screen$=size;
      console.log(size)
    })
    this.subscriptions.add(screenSub$)
    this.responsiveService.checkResolution();
    
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
