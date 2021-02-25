import { Component, OnInit } from '@angular/core';

import { TemplateConstants } from '../../assets/constants/template-constants.js'
@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss']
})
export class ManifestComponent implements OnInit {

  readonly templateConstants = TemplateConstants

  constructor() { }

  ngOnInit(): void {
  }

}
