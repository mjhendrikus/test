import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClientModule
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmtPipe } from './shared/pipes/gmt.pipe';
import { NavComponent } from './nav/nav.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { GeoComponent } from './shared/geo/geo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faThLarge,
  faUsers,
  faMedkit,
  faServer,
  faFlask,
  faUser,
  faChartPie,
  faChartBar,
  faFileImage,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';
library.add(faThLarge);
library.add(faUser);
library.add(faUsers);
library.add(faMedkit);
library.add(faServer);
library.add(faFlask);
library.add(faChartPie);
library.add(faChartBar);
library.add(faFileImage);
library.add(faCircleNotch);

@NgModule({
  declarations: [
    AppComponent,
    GmtPipe,
    NavComponent,
    TeamComponent,
    HomeComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
