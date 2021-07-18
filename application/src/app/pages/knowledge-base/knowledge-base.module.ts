import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeBaseComponent } from './knowledge-base.component';
import { KnowledgeBaseRoutingModule } from './knowledge-base-routing.module';
import { BaseModule } from 'src/app/base/base.module';
import { DesignModule } from 'src/app/design/design.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { KnowledgeBaseService } from './services/knowledge-base.service';
import { GridCategoriasComponent } from './components/grid-categorias/grid-categorias.component';
import { GridCategoriasItemComponent } from './components/grid-categorias/grid-categorias-item/grid-categorias-item.component';
import { CategoriaDetailsComponent } from './components/categoria-details/categoria-details.component';

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
    GridCategoriasComponent,
    GridCategoriasItemComponent,
    CategoriaDetailsComponent,
  ],
  providers: [
    KnowledgeBaseService
  ]
})
export class KnowledgeBaseModule { }
