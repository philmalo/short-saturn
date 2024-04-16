import { gsap } from "gsap";

function displayResults(duration, delay) {
    gsap.to(".cover", {y:'100%', duration:duration, delay:delay})
}

export default displayResults;