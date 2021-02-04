import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
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
