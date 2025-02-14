import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const fadeUP = (target) => {
    useGSAP(() => {
        gsap.fromTo(
            target,
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "sine.out",
              scrollTrigger: {
                trigger: target,
                start: "top 80%",
                end: "center center",
                markers: true,
                toggleActions: "play none none reset"
              },
            }
        );
    })
};