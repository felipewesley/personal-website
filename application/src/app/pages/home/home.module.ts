import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignModule } from 'src/app/design/design.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ApresentacaoGridComponent } from './components/apresentacao-grid/apresentacao-grid.component';
import { ApresentacaoGridItemComponent } from './components/apresentacao-grid/apresentacao-grid-item/apresentacao-grid-item.component';
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    DesignModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    WelcomeComponent,
    ApresentacaoGridComponent,
    ApresentacaoGridItemComponent,
  ]
})
export class HomeModule { }
