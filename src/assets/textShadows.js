import { gsap } from "gsap";

function textShadowsCrt() {
    const tl = gsap.timeline({repeat: -1});
    const textShadows = [
        "0.44px 0 1px rgba(0,30,255,0.5), -0.44px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "2.79px 0 1px rgba(0,30,255,0.5), -2.79px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "0.03px 0 1px rgba(0,30,255,0.5), -0.03px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "0.40px 0 1px rgba(0,30,255,0.5), -0.40px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "3.48px 0 1px rgba(0,30,255,0.5), -3.48px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "1.61px 0 1px rgba(0,30,255,0.5), -1.61px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "0.70px 0 1px rgba(0,30,255,0.5), -0.70px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "3.90px 0 1px rgba(0,30,255,0.5), -3.90px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "3.87px 0 1px rgba(0,30,255,0.5), -3.87px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "2.23px 0 1px rgba(0,30,255,0.5), -2.23px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "0.08px 0 1px rgba(0,30,255,0.5), -0.08px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "2.38px 0 1px rgba(0,30,255,0.5), -2.38px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "2.20px 0 1px rgba(0,30,255,0.5), -2.20px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "2.86px 0 1px rgba(0,30,255,0.5), -2.86px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "0.49px 0 1px rgba(0,30,255,0.5), -0.49px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "1.89px 0 1px rgba(0,30,255,0.5), -1.89px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "0.08px 0 1px rgba(0,30,255,0.5), -0.08px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "0.10px 0 1px rgba(0,30,255,0.5), -0.10px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "3.44px 0 1px rgba(0,30,255,0.5), -3.44px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "2.18px 0 1px rgba(0,30,255,0.5), -2.18px 0 1px rgba(255,0,80,0.3), 0 0 3px",
        "2.62px 0 1px rgba(0,30,255,0.5), -2.62px 0 1px rgba(255,0,80,0.3), 0 0 3px"
    ];

    textShadows.forEach((shadow, index) => {
        tl.to(".crt", {
            duration: 0.08,
            textShadow: shadow,
        }, index * 0.08);
    });
}

export default textShadowsCrt;