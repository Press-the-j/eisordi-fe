import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

import { 
  ReaderComponent,
  HeaderBarComponent,
  ArticleComponent,
  ArticleCardComponent,
} from './components';

import {
  ManifestTemplateComponent
} from './components/templates'

const TEMPLATES = [
  ManifestTemplateComponent
]

const COMPONENTS = [
  ReaderComponent,
  HeaderBarComponent,
  ArticleComponent,
  ArticleCardComponent,
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    ...COMPONENTS
  ], 
  declarations: [ 
    ...COMPONENTS,
    ...TEMPLATES
  ]
})
export class LayoutModule { }
