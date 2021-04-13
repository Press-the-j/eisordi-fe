import { state, style, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../../../models/article'
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {

  @Input() set article_item(payload) {
    console.log(payload);
    const article = new Article
      article.id = payload.id;
      article.img_path = payload.img_path;
      article.title = payload.title;
      article.content = payload.content;
      article.type = payload.type;
      article.date = payload.date;

    this.article$$.next(article)
  } //$ tipizza article

  article$$ = new BehaviorSubject<Article | null>(null)
  
  
  constructor() { }

  ngOnInit(): void {
/*     console.log("article item in article card: ", this.article_item);
 */  }

  toggleArticle($event) {
    
  }
}
