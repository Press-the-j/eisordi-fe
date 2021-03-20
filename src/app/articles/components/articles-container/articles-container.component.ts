import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pager } from 'src/app/models/pager';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit {

  @Input() articles_all: object[]
  @Input() articles_top:object[] //$ {type} = Article
  @Input() articles_pager: Pager;
  @Output() pageFilter = new EventEmitter<number>()

  constructor(
    public articlesService: ArticlesService,
    private store: Store
  ) { }
  
  ngOnInit(): void {
    
  }

  onPageFilter(value) {
    console.log('catch in container');
    this.pageFilter.emit(value)
  }





}
