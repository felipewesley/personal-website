import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-code-dialog',
  templateUrl: './qr-code-dialog.component.html',
  styleUrls: ['./qr-code-dialog.component.scss']
})
export class QrCodeDialogComponent implements OnInit {

  public felipeWebpageUrl = 'https://www.google.com';

  constructor(private dialogRef: MatDialogRef<QrCodeDialogComponent>) { }

  ngOnInit() { }

  onCopyToClipboard(): void {

    this.dialogRef.close(true);
  }

}
