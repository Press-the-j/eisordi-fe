import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { 
  ReaderComponent,
  HeaderBarComponent,
  ArticleComponent
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
  ArticleComponent
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
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
