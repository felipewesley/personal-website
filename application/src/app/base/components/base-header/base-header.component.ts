import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss']
})
export class BaseHeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() icon: string = '';

  constructor() { }

  ngOnInit() { }

}
