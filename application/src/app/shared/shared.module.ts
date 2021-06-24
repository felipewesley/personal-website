import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UntilTodayPipe } from './pipes/until-today.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [
    UntilTodayPipe,
  ]
})
export class SharedModule { }
