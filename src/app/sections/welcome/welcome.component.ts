import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveService } from 'src/app/service/responsive.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  screen$: string;
  screenSub$: Subscription;
  

  constructor(
    private  responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
    this.screenSub$ = this.responsiveService.getSizeStatus().subscribe((size) => {
      this.screen$=size;
      console.log(size)
    })
    this.responsiveService.checkResolution();
    
  }


  ngOnDestroy(): void {
    this.screenSub$.unsubscribe()
  }
  
}
