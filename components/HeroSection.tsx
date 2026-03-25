"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const titleText =
        "here’s a small preview\nglimpse of our work.\nwhat’s coming next is";

      const circle = document.querySelector(".hero-circle-path") as SVGCircleElement | null;

      if (titleRef.current) {
        titleRef.current.textContent = "";
      }

      const tl = gsap.timeline();

      if (circle) {
        const length = circle.getTotalLength();

        gsap.set(circle, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        tl.to(circle, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
        });
      }

      const textObject = { value: 0 };

      tl.to(
        textObject,
        {
          value: titleText.length,
          duration: 4,
          ease: "none",
          onUpdate: () => {
            if (titleRef.current) {
              titleRef.current.textContent = titleText.slice(
                0,
                Math.floor(textObject.value)
              );
            }
          },
        },
        "-=0.3"
      );

      tl.from(
        ".hero-lines",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.1"
      );

      tl.from(
        ".hero-subtitle",
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black">
      <div className="container mx-auto flex min-h-[calc(100vh-120px)] items-center px-8 pb-16 pt-20 md:px-12 xl:px-16">
        <svg
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 lg:h-[560px] lg:w-[560px]"
          viewBox="0 0 500 500"
        >
          <circle
            cx="250"
            cy="250"
            r="220"
            fill="none"
            stroke="var(--circle)"
            strokeWidth="6"
            className="hero-circle-path"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <h1
            ref={titleRef}
            className="min-h-[220px] whitespace-pre-line text-[36px] font-light leading-tight text-[var(--soft-white)] sm:min-h-[260px] sm:text-[48px] md:min-h-[300px] md:text-[60px] lg:min-h-[330px] lg:text-[70px] xl:text-[78px]"
          />

          <div className="mt-2 flex items-center justify-center gap-4">
            <span className="hero-lines h-1 w-[60px] rounded-full bg-[var(--line)]"></span>
            <span className="hero-lines h-1 w-[30px] rounded-full bg-[var(--accent)]"></span>

            <h2 className="hero-subtitle text-[34px] font-bold text-white sm:text-[46px] md:text-[56px] lg:text-[64px] xl:text-[70px]">
              <span className="text-[var(--accent)]">even</span>{" "}
              <span className="text-white">better</span>
            </h2>

            <span className="hero-lines h-1 w-[30px] rounded-full bg-[var(--accent)]"></span>
            <span className="hero-lines h-1 w-[60px] rounded-full bg-[var(--line)]"></span>
          </div>
        </div>
      </div>
    </section>
  );
}