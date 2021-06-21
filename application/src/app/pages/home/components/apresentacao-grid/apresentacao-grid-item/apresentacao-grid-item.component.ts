import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao-grid-item',
  templateUrl: './apresentacao-grid-item.component.html',
  styleUrls: ['./apresentacao-grid-item.component.scss']
})
export class ApresentacaoGridItemComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() bgColor: string = '';
  @Input() bgImage: string = '';

  constructor() { }

  ngOnInit() { }

}
