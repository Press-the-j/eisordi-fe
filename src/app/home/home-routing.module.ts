import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { StepsComponent } from './sections/steps/steps.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,// 
        pathMatch: 'full'
      }, 
      {
        path: 'steps-to-follow',
        component: StepsComponent,// 
        
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
