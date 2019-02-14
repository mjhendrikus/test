import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { DatatablesModule } from '../shared/datatables/datatables.module';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    DatatablesModule
  ],
  exports: [TeamComponent],
  providers: [TeamComponent]
})
export class TeamModule { }
