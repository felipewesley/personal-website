import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public showFiller = false;

  public menuList: MenuItem[] = [
    {
      title: 'Início',
      route: 'home',
      icon: 'home',
      label: 'Ir para homepage',
      isActive: true
    }, {
      title: 'Competências',
      route: 'home',
      icon: 'lightbulb',
      label: 'Ver competências',
      isActive: false
    }, {
      title: 'Experiência',
      route: 'home',
      icon: 'work',
      label: 'Experiências',
      isActive: false
    }, {
      title: 'Contato',
      route: 'home',
      icon: 'perm_phone_msg',
      label: 'Contato',
      isActive: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
