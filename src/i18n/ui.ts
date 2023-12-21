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

        'demo.title.yodio': "Yodio migration to Astro",
        'demo.body.yodio': `Weekend projet with a friend of mine, <a class="demo" href="https://pascalmeunier.info/">Pascal Meunier</a> who built it originally on *something else* and wanted to learn a bit more about <a class="demo" href="https://astro.build">Astro</a>.`,
        'demo.url.yodio': "https://yodio.ca",

        'demo.title.deez': "Final college project",
        'demo.body.deez': `Project built with <a class="demo" href="#">Louis Roby</a> and <a class="demo" href="https://www.eknox.ca/">Émile Daigneault</a>. A "mobile-first" web app to manage one's wine collection/cellars.`,
        'demo.url.deez': "https://deez.philippemalo.dev",

        'demo.title.astro': "This portfolio",
        'demo.body.astro': `I have used this opportunity to learn a new framework for deploying static web pages. This is the end result. you can check out my repo <a class="demo" href="https://github.com/philmalo/short-saturn">here</a>.`,
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

        'demo.title.yodio': "Migration Yodio vers Astro",
        'demo.body.yodio': `Projet de fin de semaine en collaboration avec un ami,<a class="demo" href="https://pascalmeunier.info/">Pascal Meunier</a>, qui a originalement développé le site et était intéressé à le transposer dans le framework<a class="demo" href="https://astro.build">Astro</a>.`,
        'demo.url.yodio': 'https://yodio.ca',

        'demo.title.deez': "Projet final collégial",
        'demo.body.deez': `Projet développé en collaboration avec <a class="demo" href="#">Louis Roby</a> et <a class="demo" href="https://www.eknox.ca/">Émile Daigneault</a>. Un site "mobile first" dédié à la gestion de collections de bouteilles de vin/celliers.`,
        'demo.url.deez': 'https://deez.philippemalo.dev',

        'demo.title.astro': "Ce portefolio",
        'demo.body.astro': `J'ai profité de l'opportunité en créant ce site à l'aide du framework Astro. vous pouvez consulter mon dépôt github<a class="demo" href="https://github.com/philmalo/short-saturn">ici</a>.`,
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