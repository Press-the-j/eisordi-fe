import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-top',
  templateUrl: './articles-top.component.html',
  styleUrls: ['./articles-top.component.scss']
})
export class ArticlesTopComponent implements OnInit {

  @Input() articles_top: object[];

  constructor() { }

  ngOnInit(): void {
    console.log("articles top in component" , this.articles_top)
  }

}
