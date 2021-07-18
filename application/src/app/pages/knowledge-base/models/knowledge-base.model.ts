// Model de categorias
export interface CategoriaModel {
    categoriaId: string;
    nome: string;
    descricao: string;
}

// Model de pasta
export interface PastaModel {
    pastaId: string;
    categoriaId: string;
    nome: string;
    descricao: string;
    visible?: boolean;
}

// Model de publicação
export interface PublicacaoModel {
    publicacaoId: string;
    pastaId: string;
    titulo: string;
    src: string;
    dataHoraCriacao?: Date;
}