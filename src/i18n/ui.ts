export const showDefaultLang = false;

export const languages = {
    en: 'English',
    fr: 'Français',
};

export const defaultLang = 'fr';

export const ui = {
    en: {
        'nav.home': '~',
        'nav.about': 'About',
        'nav.demos': 'Demos',
        'nav.contact': 'Contact',
        'nav.explore': 'Explore',
        'title.home': 'Home',
        'title.about': 'About me',
        'title.demos': 'My projects',
        'title.contact': 'Contact me',
    },
    fr: {
        'nav.home': '~',
        'nav.about': 'À propos de moi',
        'nav.demos': 'Démos',
        'nav.contact': 'Me contacter',
        'nav.explore': 'Explorer',
        'title.home': 'Accueil',
        'title.about': 'À propos de moi',
        'title.demos': 'Mes projets',
        'title.contact': 'Contactez moi',
    },
} as const;

export const routes = {
    en: {
        'home': 'home',
        'about': 'about',
        'demos': 'demos',
        'contact': 'contact'
    },
    fr: {
        'home': 'home',
        'about': 'about',
        'demos': 'demos',
        'contact': 'contact'
    },
}