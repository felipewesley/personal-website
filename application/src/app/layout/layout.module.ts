import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { DesignModule } from '../design/design.module';
import { LayoutService } from './layout.service';
import { MenuItemComponent } from './sidenav/menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    MenuItemComponent,
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    LayoutService
  ]
})
export class LayoutModule { }
