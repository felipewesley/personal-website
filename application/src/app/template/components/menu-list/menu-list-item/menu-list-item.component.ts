import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/template/models/menu-item.model';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {

  @Input('active') active: boolean = false;
  @Input('item') menuItem: MenuItem;

  constructor() { }

  ngOnInit() { }

}
