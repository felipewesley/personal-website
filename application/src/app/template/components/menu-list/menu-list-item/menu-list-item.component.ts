import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/base/models/menu-item.model';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {

  @Input('active') active: boolean = false;
  @Input('item') menuItem: MenuItem;
  @Output() onNavigate = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

}
