import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { knowledgeBase } from 'src/app/base/constants/system-constants';
import { CategoriaDetailsComponent } from './components/categoria-details/categoria-details.component';
import { RedirectToComponent } from './components/redirect-to/redirect-to.component';
import { KnowledgeBaseComponent } from './knowledge-base.component';

const routes: Routes = [
  {
    path: '',
    component: KnowledgeBaseComponent
  },
  {
    path: knowledgeBase.categoria + '/:categoriaId/:categoriaLabel',
    component: CategoriaDetailsComponent
  },
  {
    path: knowledgeBase.pasta + '/:pastaId/:pastaLabel'
  },
  {
    path: knowledgeBase.publicacao + '/:publicacaoId/:publicacaoLabel'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class KnowledgeBaseRoutingModule { }