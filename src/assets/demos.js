import deez from "./deez_wines.png";
import yodio from "./yodio-white.svg";
import placeholder from "./terminal_icon.svg";

const cardsData = [
    {
        link: "demo.url.deez",
        title: "demo.title.deez",
        body: "demo.body.deez",
        label: "nav.explore",
        img: deez.src,
        alt: "demo.alt.deez",
    },
    {
        link: "demo.url.yodio",
        title: "demo.title.yodio",
        body: "demo.body.yodio",
        label: "nav.explore",
        img: yodio.src,
        alt: "demo.alt.yodio"
    },
    {
        link: '',
        title: "demo.title.astro",
        body: "demo.body.astro",
        label: "nav.explore",
        img: placeholder.src,
        alt: "demo.alt.astro",
    }
];

export default cardsData;