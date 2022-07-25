import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleobservableRoutingModule } from './exampleobservable-routing.module';
import { ObsComponent } from './obs/obs.component';
import { LogingComponent } from './loging/loging.component';



@NgModule({
  declarations: [
    ObsComponent,
    LogingComponent
  ],
  imports: [
    CommonModule,
    ExampleobservableRoutingModule
  ],  
  exports:[
    ObsComponent,
    LogingComponent
  ]
})
export class ExampleobservableModule { }
