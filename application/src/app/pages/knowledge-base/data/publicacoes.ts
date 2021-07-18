import { PublicacaoModel } from "../models/knowledge-base.model";
import { KnowledgeBaseIds } from "./id-provider";

export const Publicacoes: PublicacaoModel[] = [
    {
        publicacaoId: KnowledgeBaseIds.publicacaoAngularConfigEnv,
        pastaId: KnowledgeBaseIds.pastaAngularEnv,
        titulo: 'Configurando o ambiente',
        src: 'https://www.notion.so/Configurando-o-ambiente-bf832428a97848fd903c1b201e10001f',
        dataHoraCriacao: new Date(2021, 2, 15)
    }, {
        publicacaoId: KnowledgeBaseIds.publicacaoAngularDebug,
        pastaId: KnowledgeBaseIds.pastaAngularEnv,
        titulo: 'Ferramentas para Debug',
        src: 'https://www.notion.so/Ferramentas-para-Debug-2a9a3d60c6a64bbdb85d2a3adc6ac97a',
        dataHoraCriacao: new Date(2021, 2, 19)
    }, 
];