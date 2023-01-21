import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AllmenuComponent } from './allmenu/allmenu.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { HomeComponent } from './home/home.component';
import { OrdermenuComponent } from './ordermenu/ordermenu.component';
import { TrackbyComponent } from './trackby/trackby.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home', component:HomeComponent },
  {path:'allmenu', component:AllmenuComponent },
  {path:'addmenu', component:AddmenuComponent },
  {path:'ordermenu', component:OrdermenuComponent },
  {path:'trackby', component:TrackbyComponent },
  {path:'grandparent', component:GrandparentComponent },
  {path:'concatmap', component:ConcatmapComponent },
  {path:'**', redirectTo:'home',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
