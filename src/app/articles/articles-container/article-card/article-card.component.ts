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

  isOpen$$ = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  ngOnInit(): void {
/*     console.log("article item in article card: ", this.article_item);
 */  }

  toggleArticle($event) {
    console.log($event);
    this.isOpen$$.next(!this.isOpen$$.value)
    /* let target= $event.target;
    this.isOpen = !this.isOpen
    let topPosition=target.getBoundingClientRect().clientY
    console.log(target.getBoundingClientRect().top);
    console.log(topPosition);
    
    
    if (target.classList.contains('is-open')){
      target.classList.remove('is-open');
      target.style.removeProperty('top'); 
      target.style.removeProperty('width'); 
      target.style.removeProperty('margin'); 
      target.style.removeProperty('position'); 
    } else {
      target.classList.add('is-open');
      target.style.top = `${topPosition}px`;
      target.style.width = '100%';
      target.style.margin = 0;
      target.style.position = 'absolute';
    } */
  }
}
