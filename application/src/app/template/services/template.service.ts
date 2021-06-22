import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TemplateService {

  constructor(private http: HttpClient) { }

  public generateQrCode(): Observable<any> {

    return this._generateQrCode();
  }

  private _generateQrCode(): Observable<any> {

    const url = 'https://api.qr-code-generator.com/v1/create/';
    const data = {
      "frame_name": "no-frame",
      "qr_code_text": "https://www.google.com/",
      "image_format": "SVG",
      "qr_code_logo": "scan-me-square"
    };

    return this.http.post(url, data);
  }

}
