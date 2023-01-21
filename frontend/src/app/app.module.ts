import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AllmenuComponent } from './allmenu/allmenu.component';
import { OrdermenuComponent } from './ordermenu/ordermenu.component';
import { HomeComponent } from './home/home.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { ParentComponent } from './grandparent/parent/parent.component';
import { ChildComponent } from './grandparent/parent/child/child.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddmenuComponent,
    AllmenuComponent,
    OrdermenuComponent,
    HomeComponent,
    TrackbyComponent,
    GrandparentComponent,
    ParentComponent,
    ChildComponent,
    ConcatmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
