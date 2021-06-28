import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule,
    BaseModule,
  ],
  declarations: [ContatoComponent]
})
export class ContatoModule { }
