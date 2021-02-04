import { Component, OnInit } from '@angular/core';
/* SERVICES */
import { ResponsiveService } from './service/responsive.service';
/* CONSTANTS */
/* RXJSß */
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eisordi';
  screen$: string;

  constructor(
    private responsiveService: ResponsiveService,
    
  ) {

  }

  ngOnInit() {
    /* Check Resolution of Screen */
    this.responsiveService.getSizeStatus().subscribe( (size) => {
      this.screen$ = size
    })
    this.onResize()
  }

  onResize() {
    this.responsiveService.checkResolution();
  }

}
