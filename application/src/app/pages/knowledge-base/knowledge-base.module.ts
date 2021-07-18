import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeBaseComponent } from './knowledge-base.component';
import { KnowledgeBaseRoutingModule } from './knowledge-base-routing.module';
import { BaseModule } from 'src/app/base/base.module';
import { DesignModule } from 'src/app/design/design.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    KnowledgeBaseRoutingModule,
    BaseModule,
    DesignModule,
    SharedModule,
  ],
  declarations: [
    KnowledgeBaseComponent,
  ]
})
export class KnowledgeBaseModule { }
