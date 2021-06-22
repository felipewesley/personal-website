import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignModule } from '../design/design.module';
import { BaseHeaderComponent } from './components/base-header/base-header.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
  ],
  declarations: [
    BaseHeaderComponent,
  ],
  exports: [
    BaseHeaderComponent
  ]
})
export class BaseModule { }
