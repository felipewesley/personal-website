import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public showFiller = false;

  public menuList: MenuItem[] = [];
  private _menuList: MenuItem[] = [
    {
      title: 'Início',
      route: '/',
      icon: 'home',
      label: 'Ir para homepage',
    }, {
      title: 'Competências',
      route: 'home',
      icon: 'lightbulb',
      label: 'Ver competências',
    }, {
      title: 'Experiência',
      route: 'home',
      icon: 'work',
      label: 'Experiências',
    }, {
      title: 'Contato',
      route: 'home',
      icon: 'perm_phone_msg',
      label: 'Contato',
    }
  ]

  constructor() { }

  ngOnInit() {
    this.menuList = this._menuList.filter(m => m.disabled !== true).slice();
  }

}
