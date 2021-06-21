import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DesignModule } from 'src/app/design/design.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    WelcomeComponent,
  ]
})
export class HomeModule { }
