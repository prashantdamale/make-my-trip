import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObsComponent } from './obs/obs.component';

const routes: Routes = [
  {
    path:'obs',component:ObsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleobservableRoutingModule { }
