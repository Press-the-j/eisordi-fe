import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./sections/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: '**', 
    redirectTo: 'welcome' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
