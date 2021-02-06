import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { StepsComponent } from './sections/steps/steps.component';



@NgModule({
  declarations: [
    JumbotronComponent, 
    HomeComponent, 
    WelcomeComponent, 
    StepsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
