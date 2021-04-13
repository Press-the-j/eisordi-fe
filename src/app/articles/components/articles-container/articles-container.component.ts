import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pager } from 'src/app/models/pager';
import { ArticlesService } from 'src/app/services/articles.service';
import { Direction } from '../../../constants/direction-constants'

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit {

  @Input() set articles_all(value) {
    this.articles_all$$.next(value);
  }
  @Input() set articles_top(value) {
    this.articles_top$$.next(value);
  } //$ {type} = Article
  @Input() set articles_pager(value: Pager) {
    this.pager$$.next(value);;
  };
  
  @Output() pageFilter = new EventEmitter<number>();
  @Output() changePage = new EventEmitter<Direction>();

  articles_top$$ = new BehaviorSubject<any>(null)
  articles_all$$ = new BehaviorSubject<any>(null)
  pager$$ = new BehaviorSubject<any>(null)

  constructor(
    public articlesService: ArticlesService,
    private store: Store
  ) { }
  
  ngOnInit(): void {
    
  }

  onPageFilter(value: number) {
    console.log('catch in container');
    return this.pageFilter.emit(value)
  }

  onChangePage(value: Direction) {
    return this.changePage.emit(value)
  }




}
