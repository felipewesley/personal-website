import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DesignModule } from '../design/design.module';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuListItemComponent } from './components/menu-list/menu-list-item/menu-list-item.component';
import { SocialNetworkComponent } from './components/profile/social-network/social-network.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    TemplateRoutingModule,
    RouterModule,
  ],
  declarations: [
    TemplateComponent,
    HeaderComponent,
    ProfileComponent,
    SocialNetworkComponent,
    MenuListComponent,
    MenuListItemComponent,
  ],
  exports: [
    TemplateComponent,
  ]
})
export class TemplateModule { }
