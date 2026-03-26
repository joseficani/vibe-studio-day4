"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Language } from "../app/page";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
};

type WorkGridProps = {
  lang: Language;
};

export default function WorkGrid({ lang }: WorkGridProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    async function getProjects() {
      try {
        const res = await fetch("https://hanzo.dxpshift.com/api/projects");
        const data = await res.json();

        if (data.success) {
          const items = data.data.slice(0, 8).map((item: any) => ({
            id: item.id,
            title: item.title,
            image: item.image,
            description: item.description || item.text || "No description",
          }));

          setProjects(items);
        }
      } catch (error) {
        console.log("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    getProjects();
  }, []);

  useGSAP(
    () => {
      if (loading) return;

      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [loading, projects] }
  );

  const filteredProjects = projects.filter((project) => {
    const searchValue = search.toLowerCase();

    return (
      project.title.toLowerCase().includes(searchValue) ||
      project.description.toLowerCase().includes(searchValue)
    );
  });

  return (
    <section ref={sectionRef} id="work" className="bg-black py-24">
      <div className="container mx-auto px-8">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder={
                  lang === "ar" ? "ابحث عن المشاريع..." : "Search projects..."
                }
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full rounded-md border border-white/20 bg-transparent px-5 py-4 pr-14 text-white outline-none placeholder:text-white/50 focus:border-cyan-400 ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 transition hover:text-white"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-20 lg:grid-cols-2">
            {loading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-[260px] bg-gray-800 sm:h-[320px] md:h-[360px]"></div>
                  <div className="mt-4 h-6 w-2/3 rounded bg-gray-800"></div>
                  <div className="mt-3 h-4 w-full rounded bg-gray-800"></div>
                  <div className="mt-2 h-4 w-5/6 rounded bg-gray-800"></div>
                </div>
              ))
            ) : filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="work-card block"
                >
                  <div>
                    <div className="h-[260px] overflow-hidden bg-gray-800 sm:h-[320px] md:h-[360px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-4 text-[22px] font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-[15px] text-white/80">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-[18px] text-white/70">
                {lang === "ar" ? "لم يتم العثور على مشاريع." : "No projects found."}
              </p>
            )}
          </div>

          {!loading && (
            <div className="mt-24 text-center">
              <div className="mb-6 flex justify-center gap-3">
                <span className="h-1 w-[40px] rounded-full bg-cyan-400"></span>
                <span className="h-1 w-[25px] rounded-full bg-red-400"></span>
                <span className="h-1 w-[80px] rounded-full bg-cyan-400"></span>
              </div>

              <p className="text-[26px] text-white">
                {lang === "ar" ? (
                  <>
                    <span className="font-semibold text-red-400">يسعدنا</span> أن
                    نرى مشروعك
                    <br />
                    مضافًا هنا
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-red-400">we’d love</span> to
                    see your project
                    <br />
                    added here
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}