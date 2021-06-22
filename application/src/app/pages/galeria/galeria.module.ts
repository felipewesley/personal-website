import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';
import { GaleriaGridComponent } from './components/galeria-grid/galeria-grid.component';
import { DesignModule } from 'src/app/design/design.module';
import { GaleriaRoutingModule } from './galeria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    GaleriaRoutingModule,
  ],
  declarations: [
    GaleriaComponent,
    GaleriaGridComponent
  ]
})
export class GaleriaModule { }
