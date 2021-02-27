import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';
import { articles } from 'src/app/store/articles/articles.selectors';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit {

  articles$: Observable<object[]>; //todo tipizza article

  constructor(
    private articlesService: ArticlesService,
    private store: Store
  ) { }
  
  ngOnInit(): void {
    //todo prendo carico gli articoli da vedere dallo store
    this.articles$ = this.store.select(articles)
  }

  getArticles() {
    //todo funzione di richiamo degli articoli dallo store in  base ad un index
  }





}
