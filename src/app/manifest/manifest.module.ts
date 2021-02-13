import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManifestRoutingModule } from './manifest-routing.module';
import { ManifestComponent } from './manifest.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReaderComponent } from '../shared/components/reader/reader.component';



@NgModule({
  declarations: [
    ManifestComponent,
    ReaderComponent
  ],
  imports: [
    CommonModule,
    ManifestRoutingModule,
    LayoutModule
  ]
})
export class ManifestModule { }
