import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';
import { GaleriaGridComponent } from './components/galeria-grid/galeria-grid.component';
import { DesignModule } from 'src/app/design/design.module';
import { GaleriaRoutingModule } from './galeria-routing.module';
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    DesignModule,
    GaleriaRoutingModule,
  ],
  declarations: [
    GaleriaComponent,
    GaleriaGridComponent,
  ]
})
export class GaleriaModule { }
