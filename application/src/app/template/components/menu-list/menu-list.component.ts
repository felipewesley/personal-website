import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Output() public onNavigate = new EventEmitter<boolean>();

  public showFiller = false;

  public menuList: MenuItem[] = [];
  private _menuList: MenuItem[] = [
    {
      title: 'Início',
      route: '/home',
      icon: 'home',
      label: 'Ir para homepage',
    }, {
      title: 'Competências',
      route: 'competencias',
      icon: 'lightbulb',
      label: 'Ver competências',
    }, {
      title: 'Experiência',
      route: 'none',
      icon: 'work',
      label: 'Experiências',
    }, {
      title: 'Galeria',
      route: 'galeria',
      icon: 'collections',
      label: 'Galeria',
    } ,{
      title: 'Contato',
      route: 'contato',
      icon: 'perm_phone_msg',
      label: 'Contato',
    }
  ]

  constructor() { }

  ngOnInit() {
    this.menuList = this._menuList.filter(m => m.disabled !== true).slice();
  }

}
