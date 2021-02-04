import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
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
        path: '/steps-to-follow',
        component: WelcomeComponent,// 
        pathMatch: 'full'
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
