import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { MYExperienceComponent } from './myexperience/myexperience.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {"path":"" , component:LoginpageComponent},
  {"path":"navbar" , component:NavbarComponent},
  {"path":"abousMe" , component:AboutMeComponent},
  {"path":"contact" , component:ContactMeComponent},
  {"path":"education" , component:MyEducationComponent},
  {"path":"experience" , component:MYExperienceComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
