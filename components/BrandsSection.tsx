"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const brandCards = [
  {
    id: 1,
    title: "Fresh seafood selection",
    image: "/images/cards1.jpg",
    large: false,
  },
  {
    id: 2,
    title: "Premium quality products",
    image: "/images/cards2.jpg",
    large: false,
  },
  {
    id: 3,
    title: "Best burgers in town",
    image: "/images/cards3.jpg",
    large: true,
  },
  {
    id: 4,
    title: "Carefully prepared items",
    image: "/images/cards4.jpg",
    large: false,
  },
  {
    id: 5,
    title: "Trusted by professionals",
    image: "/images/cards5.jpg",
    large: false,
  },
];

export default function BrandsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".brands-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".brands-title",
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });

      gsap.from(".brands-button", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".brands-title",
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });

      gsap.from(".brand-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".brands-title",
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f6f7] px-6 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="brands-title text-[34px] font-bold text-[#0c4f70] md:text-[58px]">
            Explore our new items
          </h2>

          <button className="brands-button text-[14px] font-bold uppercase text-[#18cfd0] hover:text-[#0c4f70]">
            Go to shop →
          </button>
        </div>

        <div className="brands-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {brandCards.map((card) => (
            <div
              key={card.id}
              className={`brand-card group relative overflow-hidden rounded-[26px] ${
                card.large ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${
                  card.large
                    ? "h-[380px] md:h-full md:min-h-[700px]"
                    : "h-[300px] md:h-[340px]"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#58dbc9]/90 via-[#58dbc9]/50 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="max-w-[70%] translate-y-6 pr-10 text-[24px] font-bold uppercase leading-tight text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 md:text-[28px]">
                    {card.title}
                  </h3>
                </div>

                <div className="absolute bottom-6 right-6 h-12 w-12">
                  <span className="absolute bottom-0 left-0 h-[10px] w-[10px] bg-white" />
                  <span className="absolute right-[2px] top-[2px] h-[24px] w-[24px] border-r-[4px] border-t-[4px] border-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}