import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() set pager(value) {
    console.log(value);
    
  };
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
