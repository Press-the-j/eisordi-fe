import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pager } from 'src/app/models/pager';
import { Direction } from '../../../constants/direction-constants'


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() set pager(value: Pager) {
    console.log(value);
    this.setTotalVisited(value);
    this.setButtonsState(value) 

    this.totalItems$$.next(value.total_items)
  }

  @Output() pageFilter = new EventEmitter<number>();
  @Output() changePage = new EventEmitter<Direction>();
  
  totalVisited$$= new BehaviorSubject<number>(0);
  totalItems$$= new BehaviorSubject<number>(0);
  disableNextButton$$ = new BehaviorSubject<boolean>(false);
  disablePrevButton$$ = new BehaviorSubject<boolean>(false);
  constructor() { }

  ngOnInit() {    
    
     
  }
  

  onPageFilter(event) {
    this.pageFilter.emit(event.target.value)
  }

  setTotalVisited(pager) {
    if (pager.current_page === 1) {
      this.totalVisited$$.next(pager.total_in_page)
      return
    }
    const total = (pager.current_page - 1) * pager.per_page + pager.total_in_page
    this.totalVisited$$.next(total)
  }

  setButtonsState(pager: Pager) {
    if (pager.current_page === 1) {
      this.disablePrevButton$$.next(true);
    } else {
      this.disablePrevButton$$.next(false)
    }

    if (pager.current_page === pager.total_page) {
      this.disableNextButton$$.next(true);
    } else {
      this.disableNextButton$$.next(false);
    }
  }

  onNext() {
    this.changePage.emit(Direction.NEXT);
  }

  onPrev() {
    this.changePage.emit(Direction.PREV);
  }

  

}
