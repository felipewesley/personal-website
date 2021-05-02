import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService {

  private _openSidenav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  openSidenav$ = this._openSidenav.asObservable();

  constructor() { }

  closeSidenav(): void {

    this._openSidenav.next(false);
  }

  openSidenav(): void {

    this._openSidenav.next(true);
  }

}
