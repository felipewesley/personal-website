import { MenuItem } from "src/app/base/models/menu-item.model";

export const navigation: MenuItem[] = [
    {
        title: 'Início',
        route: '/home',
        icon: 'home',
        label: 'Ir para homepage',
    }, {
        title: 'Formação',
        route: 'formacao',
        icon: 'school',
        label: 'Formação acadêmica',
    }, {
        title: 'Competências',
        route: 'competencias',
        icon: 'lightbulb',
        label: 'Soft Skills, competências gerais e técnicas',
    }, {
        title: 'Experiência',
        route: 'experiencia',
        icon: 'work',
        label: 'Experiência de mercado',
    }, {
        title: 'Galeria',
        route: 'galeria',
        icon: 'collections',
        label: 'Galeria de Felipe',
    } ,{
        title: 'Contato',
        route: 'contato',
        icon: 'perm_phone_msg',
        label: 'Entre em contato',
    }
];