"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronDown, Play, X } from "lucide-react";
import "swiper/css";

const sayingSlides = [
  {
    id: 1,
    stars: "★★★★★",
    count: "(850)",
    text: "Our chefs value consistency, and NAQUA delivers every time. The freshness and quality of their seafood truly stand out compared to other suppliers.",
    author: "-Lorem Ipsum",
  },
  {
    id: 2,
    stars: "★★★★★",
    count: "(850)",
    text: "Working with NAQUA has elevated our seafood offering. Customers recognize the premium quality, and we appreciate the strong support from their team.",
    author: "-Lorem Ipsum",
  },
  {
    id: 3,
    stars: "★★★★★",
    count: "(850)",
    text: "NAQUA's commitment to sustainability and quality is unmatched. Our restaurant has built a loyal customer base thanks to their exceptional products.",
    author: "-Lorem Ipsum",
  },
  {
    id: 4,
    stars: "★★★★★",
    count: "(850)",
    text: "From farm to table, NAQUA ensures the best. Their transparency and dedication make them our preferred seafood partner.",
    author: "-Lorem Ipsum",
  },
  {
    id: 5,
    stars: "★★★★★",
    count: "(850)",
    text: "The consistency in taste and texture from NAQUA products has transformed our menu. We couldn't be happier with our partnership.",
    author: "-Lorem Ipsum",
  },
  {
    id: 6,
    stars: "★★★★★",
    count: "(850)",
    text: "Every order arrives fresh and on time. Their quality control gives us confidence every single day in service.",
    author: "-Lorem Ipsum",
  },
  {
    id: 7,
    stars: "★★★★★",
    count: "(850)",
    text: "We trust the quality, the support, and the result. It has become an essential part of our kitchen standards.",
    author: "-Lorem Ipsum",
  },
];

const cookingSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
];

function formatNumber(number: number) {
  return String(number).padStart(2, "0");
}

function Pagination({
  current,
  total,
  onPrev,
  onNext,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mx-auto mt-10 flex max-w-[460px] items-center justify-center gap-4">
      <button
        type="button"
        onClick={onPrev}
        className="text-[36px] leading-none text-[#18d1d0]"
      >
        ‹
      </button>

      <span className="w-[50px] text-right text-[36px] font-light leading-none text-[#0c4f70]">
        {formatNumber(current)}
      </span>

      <div className="h-[4px] flex-1 bg-[#cdd6da]">
        <div
          className="h-full bg-[#18d1d0] transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>

      <span className="w-[50px] text-[36px] font-light leading-none text-[#0c4f70]">
        {formatNumber(total)}
      </span>

      <button
        type="button"
        onClick={onNext}
        className="text-[36px] leading-none text-[#18d1d0]"
      >
        ›
      </button>
    </div>
  );
}

function VideoModal({
  video,
  closeVideo,
}: {
  video: string;
  closeVideo: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6">
      <div className="relative w-full max-w-[900px] rounded-[20px] bg-black p-4">
        <button
          type="button"
          onClick={closeVideo}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
        >
          <X size={20} />
        </button>

        <video
          src={video}
          controls
          autoPlay
          className="aspect-video w-full rounded-[14px]"
        />
      </div>
    </div>
  );
}

export default function MediaTabsSection() {
  const [activeTab, setActiveTab] = useState("saying");
  const [activeSaying, setActiveSaying] = useState(1);
  const [activeCooking, setActiveCooking] = useState(1);
  const [video, setVideo] = useState("");

  const sayingSwiperRef = useRef<any>(null);
  const cookingSwiperRef = useRef<any>(null);

  return (
    <section className="bg-[#dbe5e9] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-16 flex w-full max-w-[760px] overflow-hidden rounded-[14px]">
          <button
            type="button"
            onClick={() => setActiveTab("saying")}
            className={`flex flex-1 items-center justify-between px-6 py-5 text-left text-[19px] font-semibold leading-7 ${
              activeTab === "saying"
                ? "bg-[#1bcfcd] text-white"
                : "bg-[#07546d] text-white"
            }`}
          >
            <span>What others are saying about Naqua</span>
            {activeTab === "saying" && <ChevronDown size={24} />}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("cooking")}
            className={`flex flex-1 items-center justify-between px-6 py-5 text-left text-[19px] font-semibold leading-7 ${
              activeTab === "cooking"
                ? "bg-[#1bcfcd] text-white"
                : "bg-[#07546d] text-white"
            }`}
          >
            <span>What others are cooking with Naqua</span>
            {activeTab === "cooking" && <ChevronDown size={24} />}
          </button>
        </div>

        {activeTab === "saying" && (
          <div>
            <Swiper
              spaceBetween={14}
              slidesPerView={1.2}
              initialSlide={0}
              onSwiper={(swiper) => {
                sayingSwiperRef.current = swiper;
                setActiveSaying(1);
              }}
              onSlideChange={(swiper) => {
                setActiveSaying(swiper.activeIndex + 1);
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3.2,
                  spaceBetween: 14,
                },
                1200: {
                  slidesPerView: 5.2,
                  spaceBetween: 14,
                },
              }}
            >
              {sayingSlides.map((item, index) => {
                const isActive = activeSaying === index + 1;

                return (
                  <SwiperSlide key={item.id} className="!h-auto">
                    <div
                      className={`rounded-[18px] px-6 py-8 transition-all duration-300 ${
                        isActive
                          ? "min-h-[445px] bg-[#07546d] text-white"
                          : "min-h-[355px] bg-[#f4f4f4] text-[#1b6f89]"
                      }`}
                    >
                      <div className="mb-8 flex items-center gap-2 text-[14px]">
                        <span className="tracking-[0.2em] text-[#16cfd0]">
                          {item.stars}
                        </span>
                        <span className="text-[#16cfd0]">{item.count}</span>
                      </div>

                      <p
                        className={`${
                          isActive
                            ? "text-[21px] font-semibold leading-[1.55]"
                            : "text-[18px] leading-[1.7]"
                        }`}
                      >
                        {item.text}
                      </p>

                      <p className="mt-12 font-semibold">{item.author}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Pagination
              current={activeSaying}
              total={sayingSlides.length}
              onPrev={() => sayingSwiperRef.current?.slidePrev()}
              onNext={() => sayingSwiperRef.current?.slideNext()}
            />
          </div>
        )}

        {activeTab === "cooking" && (
          <div className="grid items-center gap-12 lg:grid-cols-[360px_minmax(0,1fr)]">
            <div className="hidden lg:block">
              <h2 className="text-[76px] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-[#c6d5db]">
                Simple
                <br />
                recipes
                <br />
                made
                <br />
                for you!
              </h2>
            </div>

            <div>
              <Swiper
                spaceBetween={18}
                slidesPerView={1.3}
                initialSlide={0}
                onSwiper={(swiper) => {
                  cookingSwiperRef.current = swiper;
                  setActiveCooking(1);
                }}
                onSlideChange={(swiper) => {
                  setActiveCooking(swiper.activeIndex + 1);
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2.6,
                    spaceBetween: 16,
                  },
                  1200: {
                    slidesPerView: 4.1,
                    spaceBetween: 18,
                  },
                }}
              >
                {cookingSlides.map((item, index) => {
                  const isActive = activeCooking === index + 1;

                  return (
                    <SwiperSlide key={item.id} className="!h-auto">
                      <div
                        className={`relative overflow-hidden rounded-[20px] transition-all duration-300 ${
                          isActive
                            ? "h-[470px] scale-100 md:h-[560px]"
                            : "h-[350px] scale-[0.93] md:h-[440px]"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={`Slide ${item.id}`}
                          className="h-full w-full object-cover"
                        />

                        <button
                          type="button"
                          onClick={() => setVideo(item.video)}
                          className={`absolute bottom-4 right-4 flex items-center justify-center rounded-full bg-[#f0dfc4] text-[#0c4f70] ${
                            isActive ? "h-16 w-16" : "h-12 w-12"
                          }`}
                        >
                          <Play
                            size={isActive ? 24 : 18}
                            className="ml-[2px]"
                            fill="currentColor"
                          />
                        </button>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="mt-8 text-center">
                <button
                  type="button"
                  className="rounded-[4px] bg-[#17bfe0] px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-white"
                >
                  View our recipes
                </button>
              </div>

              <Pagination
                current={activeCooking}
                total={cookingSlides.length}
                onPrev={() => cookingSwiperRef.current?.slidePrev()}
                onNext={() => cookingSwiperRef.current?.slideNext()}
              />
            </div>
          </div>
        )}
      </div>

      {video && <VideoModal video={video} closeVideo={() => setVideo("")} />}
    </section>
  );
}