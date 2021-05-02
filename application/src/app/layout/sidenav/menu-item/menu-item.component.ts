import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input('active') active: boolean = false;
  @Input('item') menuItem: MenuItem;

  constructor() { }

  ngOnInit() { }

}
