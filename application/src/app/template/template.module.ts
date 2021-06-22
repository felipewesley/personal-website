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
import { TemplateService } from './services/template.service';
import { HttpClientModule } from '@angular/common/http';
import { QrCodeDialogComponent } from './dialogs/qr-code-dialog/qr-code-dialog.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    TemplateRoutingModule,
    RouterModule,
    HttpClientModule,
    ClipboardModule,
  ],
  declarations: [
    TemplateComponent,
    HeaderComponent,
    ProfileComponent,
    SocialNetworkComponent,
    MenuListComponent,
    MenuListItemComponent,
    QrCodeDialogComponent,
  ],
  exports: [
    TemplateComponent,
  ],
  providers: [TemplateService]
})
export class TemplateModule { }
