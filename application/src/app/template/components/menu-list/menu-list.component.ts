import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navigation } from 'src/app/base/navigation/navigation';
import { MenuItem } from '../../../base/models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Output() public onNavigate = new EventEmitter<boolean>();

  public showFiller = false;

  public menuList: MenuItem[] = [];
  private _menuList: MenuItem[] = navigation;

  constructor() { }

  ngOnInit() {
    this.menuList = this._menuList.filter(m => m.disabled !== true).slice();
  }

}
