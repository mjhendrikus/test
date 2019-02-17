import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { DatatablesModule } from '../shared/datatables/datatables.module';
import { TeamComponent } from './team.component';
import { CardModule } from '../shared/card/card.module';
import { CardComponent } from '../shared/card/card.component';
// import { NbCardModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    DatatablesModule,
    CardModule
  ],
  exports: [TeamComponent],
  providers: []
})
export class TeamModule { }
