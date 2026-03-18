"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef<any>(null);

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
      }
    }

    getNews();
  }, []);

  const totalSlides = news.length;

  return (
    <>
      <Navbar />

      <section className="bg-black px-8 py-20 text-white">
        <div className="container mx-auto max-w-[1300px]">
          <h1 className="mb-12 text-center text-3xl">LATEST NEWS</h1>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex + 1);
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

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="min-h-[135px] text-[18px] font-semibold leading-9">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-400">
                      {item.details.cta_text}
                    </p>

                    <div className="mt-5 min-h-[110px] text-sm leading-7 text-gray-300">
                      {item.details.text ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.details.text,
                          }}
                        />
                      ) : null}
                    </div>

                    <a
                      href={item.details.cta_link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-block pt-6 text-cyan-400"
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
                  {String(currentSlide).padStart(2, "0")}
                </span>

                <div className="h-[4px] flex-1 bg-gray-300/50">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-300"
                    style={{
                      width: `${(currentSlide / totalSlides) * 100}%`,
                    }}
                  ></div>
                </div>

                <span className="w-[50px] text-right text-[48px] font-light leading-none text-[#0b4568]">
                  {String(totalSlides).padStart(2, "0")}
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
        </div>
      </section>

      <Footer />
    </>
  );
}