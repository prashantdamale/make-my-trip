import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { ExampleobservableModule } from './exampleobservable/exampleobservable.module';
import{HttpClientModule} from '@angular/common/http'
import { PortfolioModule } from "./portfolio/PortfolioModule";
import { LoginpageComponent } from './portfolio/loginpage/loginpage.component';
import { MatSliderModule } from '@angular/material/slider';
import { TripModule } from './trip/trip.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
   
   
 ],
  imports: [
    BrowserModule,
    CommonModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PortfolioModule,
    MatButtonModule,
    ReactiveFormsModule,
    ExampleobservableModule,
    HttpClientModule,
    TripModule,
    BrowserAnimationsModule
    
  ],
  exports:[],
  providers: [ ],
bootstrap: [AppComponent],

})
export class AppModule { }
