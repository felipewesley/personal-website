import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('openDrawer') menu: EventEmitter<boolean> = new EventEmitter<boolean>();

  title = 'Felipe Wesley';

  constructor() { }

  ngOnInit() { }

  onMenuClick(): void {

    this.menu.emit(true);
  }

}
