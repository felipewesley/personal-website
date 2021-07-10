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
        label: 'Formação',
    }, {
        title: 'Competências',
        route: 'competencias',
        icon: 'lightbulb',
        label: 'Ver competências',
    }, {
        title: 'Experiência',
        route: 'none',
        icon: 'work',
        label: 'Experiências',
    }, {
        title: 'Galeria',
        route: 'galeria',
        icon: 'collections',
        label: 'Galeria',
    } ,{
        title: 'Contato',
        route: 'contato',
        icon: 'perm_phone_msg',
        label: 'Contato',
    }
];