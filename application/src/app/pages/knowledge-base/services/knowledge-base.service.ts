import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categorias } from '../data/categorias';
import { Pastas } from '../data/pastas';
import { Publicacoes } from '../data/publicacoes';
import { CategoriaModel, PastaModel, PublicacaoModel } from '../models/knowledge-base.model';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeBaseService {

  private _categorias = new BehaviorSubject<CategoriaModel[]>([]);
  public categorias$ = this._categorias.asObservable();

  private _pastas = new BehaviorSubject<PastaModel[]>([]);
  public pastas$ = this._pastas.asObservable();

  private _publicacoes = new BehaviorSubject<PublicacaoModel[]>([]);
  public publicacoes$ = this._publicacoes.asObservable();

  constructor() {
    
    this._init();
  }

  private _init(): void {

    this._setCategorias();
    this._setPastas();
    this._setPublicacoes();
  }

  private _setCategorias(): void {

    const categorias: CategoriaModel[] = Categorias;

    this._categorias.next(categorias);
  }

  private _setPastas(): void {
    
    const pastas: PastaModel[] = Pastas;

    this._pastas.next(pastas);
  }

  private _setPublicacoes(): void {
    
    const publicacoes: PublicacaoModel[] = Publicacoes;

    this._publicacoes.next(publicacoes);
  }

  public findCategoria(categoriaId: string): string {

    return this._categorias.getValue().find(c => c.categoriaId == categoriaId)?.nome ?? null;
  }

  public findPasta(pastaId: string): string {

    return this._pastas.getValue().find(p => p.pastaId == pastaId)?.nome ?? null;
  }

  public findPublicacao(publicacaoId: string): string {

    return this._publicacoes.getValue().find(p => p.publicacaoId == publicacaoId)?.titulo;
  }

  public makeShortName = (name: string): string => name.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase();

}
