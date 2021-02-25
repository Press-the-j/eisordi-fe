import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManifestRoutingModule } from './manifest-routing.module';
import { ManifestComponent } from './manifest.component';
import { LayoutModule } from '../shared/layout.module';
/* import { ReaderComponent } from '../shared/components/reader/reader.component';

const COMPONENTS = [
  ReaderComponent,
  HeaderBarComponent
] */

@NgModule({
  declarations: [
    ManifestComponent,
  ],
  imports: [
    CommonModule,
    ManifestRoutingModule,
    LayoutModule
  ]
})
export class ManifestModule { }
