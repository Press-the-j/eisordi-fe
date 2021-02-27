import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  @Input() visible: boolean;
  interval
  constructor() { }

  ngOnInit(): void {
    /* this.interval = setInterval(()=>{
      console.log('ci sono')
    }, 100) */
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

}
