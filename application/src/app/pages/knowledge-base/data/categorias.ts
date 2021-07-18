import { CategoriaModel } from "../models/knowledge-base.model";
import { KnowledgeBaseIds } from "./id-provider";

export const Categorias: CategoriaModel[] = [
    {
        categoriaId: KnowledgeBaseIds.categoriaAngularId,
        nome: 'Guia para Angular',
        descricao: 'Apresentação de recursos interessantes oferecidos pelo Angular, com exemplos de utilizaçãoo, afim de ilustrar possíveis casos de uso.'
    }, {
        categoriaId: KnowledgeBaseIds.categoriaAspNet,
        nome: 'Config. Ambiente - Asp .NET + Entity Framework',
        descricao: 'Uma breve contextualização do conceito de camadas em aplicações produzidas sobre Entity Framework, em arquitetura Rest API.'
    }
];