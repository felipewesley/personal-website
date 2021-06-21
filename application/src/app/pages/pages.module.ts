import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DesignModule } from '../design/design.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    DesignModule,
  ],
  declarations: []
})
export class PagesModule { }
