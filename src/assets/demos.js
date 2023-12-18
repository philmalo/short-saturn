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
    },
    {
        link: "demo.url.yodio",
        title: "demo.title.yodio",
        body: "demo.body.yodio",
        label: "nav.explore",
        img: yodio.src,
    },
    {
        link: '',
        title: "demo.title.astro",
        body: "demo.body.astro",
        label: "nav.explore",
        img: placeholder.src,
    }
];

export default cardsData;