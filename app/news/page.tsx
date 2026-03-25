"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { initSlideUpAnimation } from "../utils/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const swiperRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    async function getNews() {
      try {
        const res = await fetch("https://hanzo.dxpshift.com/api/page/news");
        const data = await res.json();

        const sections = data.data.sections;

        const newsItems = sections.filter(
          (item: any) => item.section_type === "image"
        );

        setNews(newsItems);
      } catch (error) {
        console.log("error:", error);
      } finally {
        setLoading(false);
      }
    }

    getNews();
  }, []);

  useGSAP(
    () => {
      if (!loading && sectionRef.current) {
        initSlideUpAnimation(sectionRef.current);
      }
    },
    { scope: sectionRef, dependencies: [news, loading] }
  );

  const totalPages = Math.ceil(news.length / slidesPerView);

  return (
    <>
      <Navbar />

      <section ref={sectionRef} className="bg-black px-8 py-20 text-white">
        <div className="container mx-auto max-w-[1300px]">
          {loading ? (
            <>
              <div className="mb-12 flex justify-center">
                <div className="h-10 w-[260px] animate-pulse rounded bg-white/10"></div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="min-h-[620px] overflow-hidden rounded bg-[#111]"
                  >
                    <div className="h-[250px] animate-pulse bg-white/10"></div>

                    <div className="p-6">
                      <div className="h-7 w-3/4 animate-pulse rounded bg-white/10"></div>
                      <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-white/10"></div>
                      <div className="mt-6 h-4 w-full animate-pulse rounded bg-white/10"></div>
                      <div className="mt-3 h-4 w-full animate-pulse rounded bg-white/10"></div>
                      <div className="mt-3 h-4 w-5/6 animate-pulse rounded bg-white/10"></div>
                      <div className="mt-8 h-5 w-[110px] animate-pulse rounded bg-white/10"></div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="slideup mb-12 text-center text-3xl">LATEST NEWS</h1>

              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  const value = swiper.params.slidesPerView;
                  setSlidesPerView(typeof value === "number" ? value : 1);
                  setCurrentSlide(swiper.realIndex + 1);
                  setCurrentPage(1);
                }}
                onBreakpoint={(swiper) => {
                  const value = swiper.params.slidesPerView;
                  const currentValue = typeof value === "number" ? value : 1;
                  setSlidesPerView(currentValue);
                  setCurrentPage(Math.floor(swiper.realIndex / currentValue) + 1);
                }}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1);

                  const value = swiper.params.slidesPerView;
                  const currentValue = typeof value === "number" ? value : 1;
                  setCurrentPage(Math.floor(swiper.realIndex / currentValue) + 1);
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {news.map((item: any) => (
                  <SwiperSlide key={item.id} className="h-auto">
                    <div className="flex h-full min-h-[620px] flex-col overflow-hidden rounded bg-[#111]">
                      <img
                        src={item.details.image}
                        alt={item.title}
                        className="h-[250px] w-full object-cover"
                      />

                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <h2 className="slideup text-[18px] font-semibold leading-9">
                            {item.title}
                          </h2>

                          <p className="mt-3 text-sm text-gray-400">
                            {item.details.cta_text}
                          </p>

                          {item.details.text && (
                            <div
                              className="mt-5 text-sm leading-7 text-gray-300"
                              dangerouslySetInnerHTML={{
                                __html: item.details.text,
                              }}
                            />
                          )}
                        </div>

                        <a
                          href={item.details.cta_link}
                          target="_blank"
                          rel="noreferrer"
                          className="slideup mt-6 inline-block text-cyan-400"
                        >
                          Read more →
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {news.length > 0 && (
                <div className="mx-auto mt-12 flex max-w-[700px] items-center justify-between gap-6">
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="text-[42px] leading-none text-cyan-400"
                  >
                    ‹
                  </button>

                  <div className="flex flex-1 items-center gap-4">
                    <span className="w-[50px] text-[48px] font-light leading-none text-[#0b4568]">
                      {String(currentPage).padStart(2, "0")}
                    </span>

                    <div className="h-[4px] flex-1 bg-gray-300/50">
                      <div
                        className="h-full bg-cyan-400 transition-all duration-300"
                        style={{
                          width: `${(currentPage / totalPages) * 100}%`,
                        }}
                      ></div>
                    </div>

                    <span className="w-[50px] text-right text-[48px] font-light leading-none text-[#0b4568]">
                      {String(totalPages).padStart(2, "0")}
                    </span>
                  </div>

                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="text-[42px] leading-none text-cyan-400"
                  >
                    ›
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}