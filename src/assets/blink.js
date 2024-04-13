import { gsap } from "gsap";

function blink() {
    // const tl = gsap.timeline({repeat: -1})
    gsap.to(".cursor",{
        opacity: 0,
        repeat: -1,
        ease: "none",
        yoyo: true,
        duration: 0.5
    });
}

export default blink;