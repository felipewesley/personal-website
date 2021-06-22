import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciasComponent } from './competencias.component';
import { BaseModule } from 'src/app/base/base.module';
import { DesignModule } from 'src/app/design/design.module';
import { CompetenciasRoutingModule } from './competencias-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    DesignModule,
    CompetenciasRoutingModule,
  ],
  declarations: [CompetenciasComponent]
})
export class CompetenciasModule { }
