/* ANGULAR */
import { BrowserModule } from '@angular/platform-browser';
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



@NgModule({
  declarations: [
    AppComponent,
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
