import { colorForIntegration } from "astro/runtime/client/dev-overlay/plugins/utils/icons.js";
import { gsap } from "gsap";

function flicker() {
    const tl = gsap.timeline({repeat:-1});
    const flickers = [
        0.27861,
        0.34769,
        0.23604,
        0.90626,
        0.18128,
        0.83891,
        0.65583,
        0.67807,
        0.26559,
        0.84693,
        0.96019,
        0.08594,
        0.20313,
        0.71988,
        0.53455,
        0.37288,
        0.71428,
        0.70419,
        0.7003,
        0.36108,
        0.24387
    ];

    flickers.forEach((flicker, index)=>{
        tl.to(".crt",{
            '--flicker': flicker,
            duration: 0.02857,
        }, index * 0.02857)
    })
}

export default flicker;