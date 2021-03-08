import { state, style, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {

  @Input() article_item: object; //$ tipizza article

  
  
  constructor() { }

  ngOnInit(): void {
/*     console.log("article item in article card: ", this.article_item);
 */  }

  toggleArticle($event) {
    
  }
}
