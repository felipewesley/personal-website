import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidenavTitle = 'Felipe Wesley Basso';
  openMode = 'over'; // over | side | push

  constructor (private layoutService: LayoutService) { }

  ngOnInit() { }

}
