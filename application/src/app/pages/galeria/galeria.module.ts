import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';
import { GaleriaGridComponent } from './components/galeria-grid/galeria-grid.component';
import { DesignModule } from 'src/app/design/design.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
  ],
  declarations: [
    GaleriaComponent,
    GaleriaGridComponent
  ]
})
export class GaleriaModule { }
