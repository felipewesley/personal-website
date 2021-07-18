import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeBaseService } from './services/knowledge-base.service';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  public categorias$ = this.service.categorias$;

  constructor(private service: KnowledgeBaseService) { }

  ngOnInit() {
  }

}
