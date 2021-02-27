import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../shared/layout.module';
import { HomeRoutingModule } from './routing/home-routing.module';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { StepsComponent } from './sections/steps/steps.component';
import { HomeService } from '../services/home.service';

const COMPONENTS = [
  JumbotronComponent, 
  HomeComponent, 
  WelcomeComponent, 
  StepsComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule
  ],
  providers: [
    HomeService,
  ]
})
export class HomeModule { }
