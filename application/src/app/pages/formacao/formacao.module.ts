import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacaoComponent } from './formacao.component';
import { FormacaoRoutingModule } from './formacao-routing.module';
import { BaseModule } from 'src/app/base/base.module';
import { DesignModule } from 'src/app/design/design.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    DesignModule,
    FormacaoRoutingModule,
  ],
  declarations: [FormacaoComponent]
})
export class FormacaoModule { }
