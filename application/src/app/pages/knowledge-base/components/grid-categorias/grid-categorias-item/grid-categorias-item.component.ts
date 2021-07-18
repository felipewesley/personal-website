import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KnowledgeBase } from '../../../class/knowledge-base';
import { CategoriaModel } from '../../../models/knowledge-base.model';

@Component({
  selector: 'app-grid-categorias-item',
  templateUrl: './grid-categorias-item.component.html',
  styleUrls: ['./grid-categorias-item.component.scss']
})
export class GridCategoriasItemComponent extends KnowledgeBase implements OnInit {

  @Input() categoria: CategoriaModel = {} as CategoriaModel;
  public shortName: string = null;

  private _visitIsVisible = new BehaviorSubject<boolean>(false);
  public visitIsVisible$ = this._visitIsVisible.asObservable();

  constructor() {
    super();
  }

  ngOnInit() {

    this.shortName = this.makeShortName(this.categoria.nome);
  }

  public showVisitBtn = (): void => this._visitIsVisible.next(!this._visitIsVisible.getValue());

}
