"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronDown, Play } from "lucide-react";
import "swiper/css";

const reviewSlides = [
  {
    id: 1,
    stars: "★★★★★",
    count: "(850)",
    text: "Our chefs value consistency, and these products deliver every time. The freshness and quality truly stand out compared to other suppliers.",
    author: "-Lorem Ipsum",
  },
  {
    id: 2,
    stars: "★★★★★",
    count: "(850)",
    text: "Working with this brand has elevated our seafood offering. Customers recognize the premium quality, and we appreciate the strong support from the team.",
    author: "-Lorem Ipsum",
  },
  {
    id: 3,
    stars: "★★★★★",
    count: "(850)",
    text: "The commitment to sustainability and quality is unmatched. Our restaurant has built a loyal customer base thanks to these exceptional products.",
    author: "-Lorem Ipsum",
  },
  {
    id: 4,
    stars: "★★★★★",
    count: "(850)",
    text: "From farm to table, everything feels reliable and premium. The transparency and dedication make this our preferred seafood partner.",
    author: "-Lorem Ipsum",
  },
  {
    id: 5,
    stars: "★★★★★",
    count: "(850)",
    text: "The consistency in taste and texture has transformed our menu. We could not be happier with this partnership.",
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

const recipeSlides = [
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

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
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
    <div className="mx-auto flex h-[70px] max-w-[460px] items-center justify-center gap-4">
      <button
        type="button"
        onClick={onPrev}
        className="w-[28px] text-[36px] leading-none text-[#18d1d0]"
      >
        ‹
      </button>

      <span className="w-[54px] text-right text-[36px] font-light leading-none text-[#0c4f70]">
        {formatNumber(current)}
      </span>

      <div className="h-[4px] flex-1 bg-[#cdd6da]">
        <div
          className="h-full bg-[#18d1d0] transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>

      <span className="w-[54px] text-[36px] font-light leading-none text-[#0c4f70]">
        {formatNumber(total)}
      </span>

      <button
        type="button"
        onClick={onNext}
        className="w-[28px] text-[36px] leading-none text-[#18d1d0]"
      >
        ›
      </button>
    </div>
  );
}

export default function MediaTabsSection() {
  const [activeTab, setActiveTab] = useState<"reviews" | "recipes">("reviews");
  const [activeReview, setActiveReview] = useState(3);
  const [activeRecipe, setActiveRecipe] = useState(2);
  const [playingRecipe, setPlayingRecipe] = useState<number | null>(null);

  const reviewSwiperRef = useRef<any>(null);
  const recipeSwiperRef = useRef<any>(null);

  useEffect(() => {
    const swiper = reviewSwiperRef.current;
    if (activeTab === "reviews" && swiper) {
      swiper.slideToLoop(2, 0);
      setActiveReview(3);
    }
  }, [activeTab]);

  useEffect(() => {
    const swiper = recipeSwiperRef.current;
    if (activeTab === "recipes" && swiper) {
      swiper.slideToLoop(1, 0);
      setActiveRecipe(2);
    }
  }, [activeTab]);

  return (
    <section className="bg-[#dbe5e9] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1650px]">
        <div className="mx-auto mb-16 flex w-full max-w-[820px] overflow-hidden rounded-[14px]">
          <button
            type="button"
            onClick={() => setActiveTab("reviews")}
            className={`flex flex-1 items-center justify-between px-7 py-5 text-left text-[19px] font-semibold leading-7 ${
              activeTab === "reviews"
                ? "bg-[#1bcfcd] text-white"
                : "bg-[#07546d] text-white"
            }`}
          >
            <span>What others are saying about Blue Wave</span>
            {activeTab === "reviews" && <ChevronDown size={24} />}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("recipes")}
            className={`flex flex-1 items-center justify-between px-7 py-5 text-left text-[19px] font-semibold leading-7 ${
              activeTab === "recipes"
                ? "bg-[#1bcfcd] text-white"
                : "bg-[#07546d] text-white"
            }`}
          >
            <span>What others are cooking with Blue Wave</span>
            {activeTab === "recipes" && <ChevronDown size={24} />}
          </button>
        </div>

        {activeTab === "reviews" && (
          <div>
            <div className="min-h-[560px]">
              <Swiper
                loop={true}
                centeredSlides={true}
                initialSlide={2}
                slidesPerView={1.15}
                spaceBetween={18}
                speed={700}
                watchSlidesProgress={true}
                onSwiper={(swiper) => {
                  reviewSwiperRef.current = swiper;
                  setActiveReview(swiper.realIndex + 1);
                }}
                onSlideChange={(swiper) => {
                  setActiveReview(swiper.realIndex + 1);
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                    centeredSlides: true,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 18,
                    centeredSlides: true,
                  },
                }}
              >
                {reviewSlides.map((item, index) => {
                  const isActive = activeReview === index + 1;

                  return (
                    <SwiperSlide
                      key={item.id}
                      className="!flex !h-auto items-center justify-center"
                    >
                      <div className="flex h-[485px] w-full items-center justify-center">
                        <div
                          className={`flex h-[380px] w-full max-w-[260px] flex-col justify-between rounded-[18px] px-6 py-8 transition-all duration-300 ease-out ${
                            isActive
                              ? "h-[485px] max-w-[310px] bg-[#07546d] text-white"
                              : "bg-[#f4f4f4] text-[#1b6f89]"
                          }`}
                        >
                          <div>
                            <div className="mb-8 flex items-center gap-2 text-[14px]">
                              <span className="tracking-[0.2em] text-[#16cfd0]">
                                {item.stars}
                              </span>
                              <span className="text-[#16cfd0]">{item.count}</span>
                            </div>

                            <p
                              className={
                                isActive
                                  ? "text-[21px] font-semibold leading-[1.55]"
                                  : "text-[18px] leading-[1.7]"
                              }
                            >
                              {item.text}
                            </p>
                          </div>

                          <p className="font-semibold">{item.author}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="mt-6">
              <Pagination
                current={activeReview}
                total={reviewSlides.length}
                onPrev={() => reviewSwiperRef.current?.slidePrev()}
                onNext={() => reviewSwiperRef.current?.slideNext()}
              />
            </div>
          </div>
        )}

        {activeTab === "recipes" && (
          <div className="grid items-start gap-12 lg:grid-cols-[360px_minmax(0,1fr)]">
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
              <div className="min-h-[620px]">
                <Swiper
                  loop={true}
                  centeredSlides={true}
                  initialSlide={1}
                  slidesPerView={1.3}
                  spaceBetween={18}
                  speed={700}
                  watchSlidesProgress={true}
                  onSwiper={(swiper) => {
                    recipeSwiperRef.current = swiper;
                    setActiveRecipe(swiper.realIndex + 1);
                  }}
                  onSlideChange={(swiper) => {
                    setActiveRecipe(swiper.realIndex + 1);
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 2.6,
                      spaceBetween: 18,
                      centeredSlides: true,
                    },
                    1200: {
                      slidesPerView: 4.1,
                      spaceBetween: 18,
                      centeredSlides: true,
                    },
                  }}
                >
                  {recipeSlides.map((item, index) => {
                    const isActive = activeRecipe === index + 1;
                    const isPlaying = playingRecipe === item.id;

                    return (
                      <SwiperSlide
                        key={item.id}
                        className="!flex !h-auto items-center justify-center"
                      >
                        <div className="flex h-[560px] w-full items-center justify-center">
                          <div
                            className={`relative overflow-hidden rounded-[20px] transition-all duration-300 ease-out ${
                              isActive
                                ? "h-[560px] w-full max-w-[300px]"
                                : "h-[440px] w-full max-w-[240px]"
                            }`}
                          >
                            {isPlaying ? (
                              <video
                                src={item.video}
                                controls
                                autoPlay
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <>
                                <img
                                  src={item.image}
                                  alt={`Recipe ${item.id}`}
                                  className="h-full w-full object-cover"
                                />

                                <div className="pointer-events-none absolute bottom-4 right-4 z-20">
                                  <button
                                    type="button"
                                    onClick={() => setPlayingRecipe(item.id)}
                                    className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f0dfc4] text-[#0c4f70] shadow-md"
                                  >
                                    <Play
                                      size={22}
                                      className="ml-[2px]"
                                      fill="currentColor"
                                    />
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              <div className="mt-8 flex h-[80px] items-center justify-center">
                <button
                  type="button"
                  className="rounded-[4px] bg-[#17bfe0] px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-white"
                >
                  View our recipes
                </button>
              </div>

              <div className="mt-4">
                <Pagination
                  current={activeRecipe}
                  total={recipeSlides.length}
                  onPrev={() => recipeSwiperRef.current?.slidePrev()}
                  onNext={() => recipeSwiperRef.current?.slideNext()}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}