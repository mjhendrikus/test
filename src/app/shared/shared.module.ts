import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatablesComponent } from './datatables/datatables.component';
import { CardComponent } from './card/card.component';
import { CardModule } from './card/card.module';

import { GmtPipe } from '../shared/pipes/gmt.pipe';
import { NavComponent } from '../nav/nav.component';
import { TeamComponent } from '../team/team.component';
import { HomeComponent } from '../home/home.component';
import { GeoComponent } from '../shared/geo/geo.component';
import { DashifyPipe } from './pipes/dashify.pipe';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@NgModule({
  declarations: [DashifyPipe, MessageDialogComponent],
  providers: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
