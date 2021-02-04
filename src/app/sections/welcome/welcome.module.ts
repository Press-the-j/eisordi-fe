import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module'
import { MaterialModule } from '../../shared/material.module';
import { WelcomeLogoComponent } from './welcome-logo/welcome-logo.component';




@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeLogoComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MaterialModule
  ]
})
export class WelcomeModule { }
