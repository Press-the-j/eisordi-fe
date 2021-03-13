/* ANGULAR */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
/* APP_MODULE */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
/* MATERIAL */
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
/* SERVICES */
import { ResponsiveService } from 'src/app/services/responsive.service';
/* NGRX */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
/* ENV */
import { environment } from '../environments/environment';
import { LayoutModule } from './shared/layout.module';
import { ArticlesReducer } from './store/articles/articles.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffects } from './store/articles/articles.effects';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    LayoutModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('articlesState', ArticlesReducer),
    EffectsModule.forRoot([
      ArticlesEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
