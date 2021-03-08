import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'manifesto',
    loadChildren: () => import('./manifest/manifest.module').then(m => m.ManifestModule),
  },
  {
    path: 'pubblicazioni',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
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
