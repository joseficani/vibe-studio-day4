import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSlideUpAnimation(scope) {
  const elements = scope.querySelectorAll(".slideup");

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      }
    );
  });
}