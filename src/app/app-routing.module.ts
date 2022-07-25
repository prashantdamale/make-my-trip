import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'trip', loadChildren:()=> import('./trip/trip.module').then(m => m.TripModule)},
  {path:'portfolio', loadChildren:()=> import('./portfolio/PortfolioModule').then(m => m.PortfolioModule)},
  {path:'exampleobs', loadChildren:()=> import('./exampleobservable/exampleobservable.module').then(m => m.ExampleobservableModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
