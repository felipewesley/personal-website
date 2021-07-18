import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { knowledgeBase } from 'src/app/base/constants/system-constants';
import { KnowledgeBaseService } from '../../services/knowledge-base.service';

@Component({
    selector: 'app-redirect-to',
    template: ''
})
export class RedirectToComponent implements OnInit {

    constructor(
        private service: KnowledgeBaseService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this.route.url
        .pipe(
            switchMap((data: UrlSegment[]) : Observable<{target: string, id: string, shortName: string}> => {

                const segment = data[0].path;
                const id = data[1].path;

                let target: string = null;
                let shortName: string = null;

                switch(segment) {

                    case knowledgeBase.categoria:
                        target = knowledgeBase.categoria;
                        shortName = this._getCategoria(id);
                        break;
                    case knowledgeBase.pasta:
                        target = knowledgeBase.pasta;
                        shortName = this._getPasta(id);
                        break;
                    case knowledgeBase.publicacao:
                        target = knowledgeBase.publicacao;
                        shortName = this._getPublicacao(id);
                        break;
                }

                return of({id, target, shortName});
            })
        )
        .subscribe((data) => {

            if (data.shortName)
                this.router.navigate([data.shortName], {relativeTo: this.route});
        });
    }

    private _getCategoria(categoriaId: string): string {

        const categoriaNome = this.service.findCategoria(categoriaId);
        return this.service.makeShortName(categoriaNome);
    }

    private _getPasta(pastaId: string): string {

        const pastaNome = this.service.findPasta(pastaId);
        return this.service.makeShortName(pastaNome);
    }

    private _getPublicacao(publicacaoId: string): string {

        const publicacaoNome = this.service.findPublicacao(publicacaoId);
        return this.service.makeShortName(publicacaoNome);
    }
}