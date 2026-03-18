"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]); 

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

  return (
    <>
      <Navbar />

      <section className="bg-black text-white px-8 py-20">
        <div className="container mx-auto max-w-[1200px]">

          <h1 className="text-center text-3xl mb-12">LATEST NEWS</h1>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {news.map((item: any) => ( 
              <SwiperSlide key={item.id}>
                <div className="bg-[#111] rounded overflow-hidden">
                  <img
                    src={item.details.image}
                    alt={item.title}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-5">

                    <h2 className="text-lg font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-400 mt-2">
                      {item.details.cta_text}
                    </p>

                    {item.details.text && (
                      <div
                        className="text-sm mt-3 text-gray-300"
                        dangerouslySetInnerHTML={{
                          __html: item.details.text,
                        }}
                      />
                    )}

                    <a
                      href={item.details.cta_link}
                      target="_blank"
                      className="inline-block mt-4 text-cyan-400"
                    >
                      Read more →
                    </a>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      <Footer />
    </>
  );
}