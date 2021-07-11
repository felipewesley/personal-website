import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia.component';
import { BaseModule } from 'src/app/base/base.module';
import { DesignModule } from 'src/app/design/design.module';
import { ExperienciaRoutingModule } from './experiencia-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    DesignModule,
    ExperienciaRoutingModule,
  ],
  declarations: [ExperienciaComponent]
})
export class ExperienciaModule { }
