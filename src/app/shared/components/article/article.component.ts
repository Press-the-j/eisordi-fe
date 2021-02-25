import { Component, Input, OnInit } from '@angular/core';

import { TemplateConstants } from '../../../../assets/constants/template-constants.js'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() template: string //todo tipizza template

  readonly templateConstants = TemplateConstants

  constructor() { }

  ngOnInit(): void {
  }

}
