//? template da dare in pasto al reader

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manifest-template',
  templateUrl: './manifest-template.component.html',
  styleUrls: ['./manifest-template.component.scss']
})
export class ManifestTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('manifest template');
    
  }

}
