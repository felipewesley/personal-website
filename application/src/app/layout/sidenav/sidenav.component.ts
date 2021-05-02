import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';

import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from '../layout.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showFiller = false;

  menuList: MenuItem[] = [
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

  constructor (private layoutService: LayoutService) { }

  ngOnInit() { }

}
