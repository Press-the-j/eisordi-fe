import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ArticlesService } from 'src/app/services/articles.service';
import { getArticles, getArticlesTop } from 'src/app/store/articles/articles.selectors';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit {

  articles$: Observable<object[]>; //$ tipizza article
  articles_top$:Observable<object[]>; //$ {type} = Article

  constructor(
    public articlesService: ArticlesService,
    private store: Store
  ) { }
  
  ngOnInit(): void {
    //$ carico gli articoli da vedere dallo store
    this.articles$ = this.store.select(getArticles).pipe(
      /* tap((articles)=>{
        console.log('articles',articles);
      }) */
    )

    this.articles_top$ = this.store.select(getArticlesTop).pipe(
      /* tap((articlesTop) => console.log('articlesTop',articlesTop)) */
    )
  }

  loadArticles() {
    //$ funzione di richiamo degli articoli dallo store in  base ad un index
  }





}
