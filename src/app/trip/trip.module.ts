import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { NavComponent } from './nav/nav.component';
import { TrivelInfoComponent } from './trivel-info/trivel-info.component';
import { HolidaypackComponent } from './holidaypack/holidaypack.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OnewaybookingComponent } from './onewaybooking/onewaybooking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginnComponent } from './loginn/loginn.component';
import { ReativeComponent } from './reative/reative.component';



@NgModule({
  declarations: [
    NavComponent,
    TrivelInfoComponent,
    HolidaypackComponent,
    OnewaybookingComponent,
    LoginnComponent,
    ReativeComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,MatSliderModule,
    MatStepperModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    NavComponent,
    TrivelInfoComponent,MatSliderModule,
    OnewaybookingComponent
  ]

})
export class TripModule { }
