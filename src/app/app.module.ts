/* ANGULAR */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* APP_MODULE */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* MATERIAL */
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
/* SERVICES */
import { ResponsiveService } from 'src/app/service/responsive.service';
/* NGRX */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
/* ENV */
import { environment } from '../environments/environment';
import { HeroWelcomeComponent } from './welcome/hero-welcome/hero-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
