import { PastaModel } from "../models/knowledge-base.model";
import { KnowledgeBaseIds } from "./id-provider";

export const Pastas: PastaModel[] = [
    {
        pastaId: KnowledgeBaseIds.pastaAngularEnv,
        categoriaId: KnowledgeBaseIds.categoriaAngularId,
        nome: 'Configuração de ambiente',
        descricao: 'Apresentação simples do ambiente e arquitetura do Angular, bem como realizar as configurações corretamente até a execução do Hello World!',
        visible: true
    }, {
        pastaId: KnowledgeBaseIds.pastaAngularDecorators,
        categoriaId: KnowledgeBaseIds.categoriaAngularId,
        nome: 'Decorators',
        descricao: 'Recursos Decorators - quando e como utilizar os principais decorators, com exemplos e overview dos recursos.',
        visible: true
    }, {
        pastaId: KnowledgeBaseIds.pastaAngularElementRef,
        categoriaId: KnowledgeBaseIds.categoriaAngularId,
        nome: 'Referência de elementos',
        descricao: 'Como trabalhar com referências de elementos em Angular, bem como todas as suas variações, inclusive content e template.',
        visible: true
    }, {
        pastaId: KnowledgeBaseIds.pastaAspNetEnv,
        categoriaId: KnowledgeBaseIds.categoriaAspNet,
        nome: 'Configuração de ambiente',
        descricao: 'Arquitetura e configuração de ambiente para aplicação com Asp .NET e Entity Framework.',
        visible: true
    }, {
        pastaId: KnowledgeBaseIds.pastaAngularEnv,
        categoriaId: KnowledgeBaseIds.categoriaAngularId,
        nome: '',
        descricao: '',
        visible: true
    }, {
        pastaId: KnowledgeBaseIds.pastaAngularEnv,
        categoriaId: KnowledgeBaseIds.categoriaAngularId,
        nome: '',
        descricao: '',
        visible: true
    }
];