import { Component, Input, OnInit } from '@angular/core';
import { CategoriaModel } from '../../models/knowledge-base.model';

@Component({
  selector: 'app-grid-categorias',
  templateUrl: './grid-categorias.component.html',
  styleUrls: ['./grid-categorias.component.scss']
})
export class GridCategoriasComponent implements OnInit {

  @Input() categorias: CategoriaModel[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
