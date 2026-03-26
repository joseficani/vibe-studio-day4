"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Language } from "../app/page";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type BrandsSectionProps = {
  lang: Language;
};

export default function BrandsSection({ lang }: BrandsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const brandCards =
    lang === "ar"
      ? [
          {
            id: 1,
            title: "تشكيلة مأكولات بحرية طازجة",
            image: "/images/cards1.jpg",
            large: false,
          },
          {
            id: 2,
            title: "منتجات بجودة عالية",
            image: "/images/cards2.jpg",
            large: false,
          },
          {
            id: 3,
            title: "أفضل برغر في المدينة",
            image: "/images/cards3.jpg",
            large: true,
          },
          {
            id: 4,
            title: "أطباق محضرة بعناية",
            image: "/images/cards4.jpg",
            large: false,
          },
          {
            id: 5,
            title: "موثوق من المحترفين",
            image: "/images/cards5.jpg",
            large: false,
          },
        ]
      : [
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

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".brands-title",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".brands-section",
              start: "top 80%",
              toggleActions: "restart none none none",
            },
          }
        );

        gsap.fromTo(
          ".brands-button",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".brands-section",
              start: "top 80%",
              toggleActions: "restart none none none",
            },
          }
        );

        gsap.fromTo(
          ".brand-card",
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".brands-section",
              start: "top 75%",
              toggleActions: "restart none none none",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [lang] }
  );

  return (
    <section
      ref={sectionRef}
      className="brands-section bg-[#f5f6f7] px-6 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="brands-title text-[34px] font-bold text-[#0c4f70] md:text-[58px]">
            {lang === "ar" ? "اكتشف عناصرنا الجديدة" : "Explore our new items"}
          </h2>

          <button className="brands-button text-[14px] font-bold uppercase text-[#18cfd0] hover:text-[#0c4f70]">
            {lang === "ar" ? "اذهب إلى المتجر ←" : "Go to shop →"}
          </button>
        </div>

        <div className="brands-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {brandCards.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                className={`brand-card relative overflow-hidden rounded-[26px] ${
                  card.large ? "md:row-span-2" : ""
                }`}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard((prev) => (prev === card.id ? null : card.id))}
                onTouchStart={() =>
                  setActiveCard((prev) => (prev === card.id ? null : card.id))
                }
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
                    className={`h-full w-full object-cover transition duration-500 ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 transition ${
                      isActive ? "bg-black/30" : "bg-black/10"
                    }`}
                  />

                  <div
                    className={`absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#58dbc9]/90 via-[#58dbc9]/50 to-transparent transition ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="absolute inset-0 flex items-end p-6">
                    <h3
                      className={`font-bold uppercase leading-tight text-white transition duration-300
                        text-[22px] md:text-[22px] lg:text-[24px] xl:text-[28px]
                        ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                        }
                        ${
                          lang === "ar"
                            ? "text-right max-w-[45%] ml-14 mr-2"
                            : "text-left max-w-[60%] pr-12 pl-2"
                        }`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {lang === "ar" ? (
                    <div className="absolute bottom-6 left-6 h-12 w-12">
                      <span className="absolute bottom-0 right-0 h-[10px] w-[10px] bg-white" />
                      <span className="absolute left-[2px] top-[2px] h-[24px] w-[24px] border-l-[4px] border-t-[4px] border-white" />
                    </div>
                  ) : (
                    <div className="absolute bottom-6 right-6 h-12 w-12">
                      <span className="absolute bottom-0 left-0 h-[10px] w-[10px] bg-white" />
                      <span className="absolute right-[2px] top-[2px] h-[24px] w-[24px] border-r-[4px] border-t-[4px] border-white" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}