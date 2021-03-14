import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit {

  @Input() articles: object[]
  @Input() articles_top:object[] //$ {type} = Article

  constructor(
    public articlesService: ArticlesService,
    private store: Store
  ) { }
  
  ngOnInit(): void {
    
  }

  





}
