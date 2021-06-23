import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciasComponent } from './competencias.component';
import { BaseModule } from 'src/app/base/base.module';
import { DesignModule } from 'src/app/design/design.module';
import { CompetenciasRoutingModule } from './competencias-routing.module';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { GeralComponent } from './components/geral/geral.component';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    DesignModule,
    CompetenciasRoutingModule,
  ],
  declarations: [
    CompetenciasComponent,
    TecnologiasComponent,
    SoftSkillsComponent,
    GeralComponent,
  ]
})
export class CompetenciasModule { }
