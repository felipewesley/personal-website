import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignModule } from './design/design.module';
import { TemplateModule } from './template/template.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SharedModule } from './shared/shared.module';
import { NotificationService } from './shared/services/notification.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesignModule,
    SharedModule,
    TemplateModule,
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
