import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MYExperienceComponent } from './myexperience/myexperience.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginpageComponent,
    NavbarComponent,
    AboutMeComponent,
    MYExperienceComponent,
    MyEducationComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginpageComponent,
  ],
})
export class PortfolioModule {
}
