import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'prefix',
      redirectTo: 'home'
    },
    {
      path: 'home',
      loadChildren: () => import("../pages/home/home.module").then(m => m.HomeModule)
    },
    {
      path: 'formacao',
      loadChildren: () => import("../pages/formacao/formacao.module").then(m => m.FormacaoModule)
    },
    {
      path: 'competencias',
      loadChildren: () => import("../pages/competencias/competencias.module").then(m => m.CompetenciasModule)
    },
    {
      path: 'galeria',
      loadChildren: () => import("../pages/galeria/galeria.module").then(m => m.GaleriaModule)
    },
    {
      path: 'contato',
      loadChildren: () => import("../pages/contato/contato.module").then(m => m.ContatoModule)
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
