import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { QrCodeDialogComponent } from '../../dialogs/qr-code-dialog/qr-code-dialog.component';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('openDrawer') menu: EventEmitter<boolean> = new EventEmitter<boolean>();

  public title = 'Felipe Wesley';
  public appQrCode = {};

  constructor(
    private templateService: TemplateService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) { }

  ngOnInit() { }

  onMenuClick(): void {

    this.menu.emit(true);
  }

  openShare(): void {

    const dialogRef = this.dialog.open(QrCodeDialogComponent);

    dialogRef.afterClosed()
    .pipe(
      filter(result => result)
    )
    .subscribe(() => this.notificationService.notify('URL copiada!'));
  }

}
