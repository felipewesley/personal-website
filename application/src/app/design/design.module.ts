import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importacao Angular - Material Modules
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

// Importação CDK Angular Material
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatRippleModule,
    MatGridListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule,

    CdkAccordionModule,
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatRippleModule,
    MatGridListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule,

    CdkAccordionModule,
  ]
})
export class DesignModule { }
