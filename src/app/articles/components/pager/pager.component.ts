import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pager } from 'src/app/models/pager';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() pager: Pager;
  @Output() pageFilter= new EventEmitter<number>();
  
  totalVisited$= new BehaviorSubject<number>(0);
  totalItems$= new BehaviorSubject<number>(0);
  constructor() { }

  ngOnInit(): void {    
    this.totalVisited$.next(this.pager.total_in_page) 
    this.totalItems$.next(this.pager.total_items) 
  }
  

  onPageFilter(event) {
    this.pageFilter.emit(event.target.value)
  }

  calculateTotalVisited() {
    const pager = this.pager;
    if (pager.current_page === 1) {
      this.totalVisited$.next(pager.total_in_page)
      return
    }
    const total = (pager.current_page - 1) * pager.per_page + pager.total_in_page
    this.totalVisited$.next(total)
  }

  

}
