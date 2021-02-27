import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/serivices/articles.service';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss']
})
export class ArticlesContainerComponent implements OnInit {

  articles; 

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    //todo prendo carico gli articoli da vedere dallo store
  }

  getArticles() {
    //todo funzione di richiamo degli articoli dallo store in  base ad un index
  }





}
