import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClientModule
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmtPipe } from './shared/pipes/gmt.pipe';
import { DashifyPipe } from './shared/pipes/dashify.pipe';
import { TextifyPipe } from './shared/pipes/textify.pipe';


import { NavComponent } from './nav/nav.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { GeoComponent } from './shared/geo/geo.component';
import { CardComponent } from './shared/card/card.component';
import { MessageDialogComponent } from './shared/message-dialog/message-dialog.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { PipesModule } from './shared/pipes/pipes.module';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';


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
import { PostComponent } from './post/post.component';
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
    DashifyPipe,
    TextifyPipe,
    NavComponent,
    TeamComponent,
    HomeComponent,
    GeoComponent,
    CardComponent,
    MessageDialogComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
