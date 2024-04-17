import { gsap } from "gsap";

function blink() {
    gsap.to(".cursor",{
        opacity: 0,
        repeat: -1,
        ease: "none",
        yoyo: true,
        duration: 0.7
    });
}

export default blink;