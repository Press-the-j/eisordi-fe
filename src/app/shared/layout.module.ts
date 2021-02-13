import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReaderComponent } from './components';



@NgModule({
  declarations: [ReaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
