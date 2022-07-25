import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../guard/authentication.guard';
import { HolidaypackComponent } from './holidaypack/holidaypack.component';
import { LoginnComponent } from './loginn/loginn.component';
import { NavComponent } from './nav/nav.component';
import { OnewaybookingComponent } from './onewaybooking/onewaybooking.component';
import { TrivelInfoComponent } from './trivel-info/trivel-info.component';
 

const routes: Routes = [
  {
    path:'',component:LoginnComponent
  },
  {
    path:'tripinfo',component:TrivelInfoComponent,canActivate:[AuthenticationGuard]
  },
  {
    path:'oneway',component:OnewaybookingComponent
  },
  {
    path:'holiday',component:HolidaypackComponent
  },
  {
    path:'login',component:LoginnComponent
  },
  {
    path:'navication',component:NavComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TripRoutingModule { }
