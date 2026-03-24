"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sections = [
  { id: "about", label: "About" },
  { id: "sustainability", label: "Sustainability" },
  { id: "partners", label: "Partners" },
];

export default function CompanyPage() {
  const [activeSection, setActiveSection] = useState("about");

  const sectionIds = useMemo(() => sections.map((item) => item.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -110;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#f6f8f9] text-[#0c4f70]">
        <section className="relative h-[340px] w-full overflow-hidden md:h-[420px]">
          <img
            src="/images/banner.jpg"
            alt="Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(7,84,109,0.45)]" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
              <h1 className="text-[40px] font-bold text-white md:text-[60px]">
                Company Page
              </h1>
            </div>
          </div>
        </section>

        <div className="sticky top-0 z-40 border-y border-[#d7e1e5] bg-[#eef4f6]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 py-4 md:gap-x-16">
              {sections.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleScrollToSection(item.id)}
                    className={`relative pb-3 text-[15px] font-bold uppercase tracking-[0.02em] transition-colors md:text-[17px] ${
                      isActive ? "text-[#18cfd0]" : "text-[#0c4f70]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-0 left-0 h-[4px] rounded-full bg-[#18cfd0] transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <section
          id="about"
          className="scroll-mt-[120px] mx-auto max-w-[1400px] px-6 py-20 md:px-10"
        >
          <div className="max-w-[900px]">
            <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#19cfd0]">
              About
            </p>
            <h2 className="text-[36px] font-bold leading-tight md:text-[52px]">
              We started with a simple mission
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#4c6b78]">
              Our company was built on quality, consistency, and long-term
              relationships. This section can contain any content you want:
              company background, history, milestones, or a short introduction
              about your brand and what makes it special.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[20px] bg-white p-6 shadow-sm">
              <h3 className="text-[22px] font-bold">1982</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#4c6b78]">
                A strong starting point with a clear vision and growing ambition.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-6 shadow-sm">
              <h3 className="text-[22px] font-bold">Growth</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#4c6b78]">
                We expanded our reach step by step while maintaining quality.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-6 shadow-sm">
              <h3 className="text-[22px] font-bold">Today</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#4c6b78]">
                We continue building trusted partnerships and delivering value.
              </p>
            </div>
          </div>
        </section>

        <section
          id="sustainability"
          className="scroll-mt-[120px] bg-white py-20"
        >
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="max-w-[900px]">
              <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#19cfd0]">
                Sustainability
              </p>
              <h2 className="text-[36px] font-bold leading-tight md:text-[52px]">
                Responsible practices for a better future
              </h2>
              <p className="mt-6 text-[17px] leading-8 text-[#4c6b78]">
                This section can present your sustainability goals,
                environmental actions, production standards, and the way your
                company works toward long-term responsibility.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-1">
              <div className="flex flex-col justify-center gap-5">
                <div className="rounded-[18px] bg-[#f6f8f9] p-6">
                  <h3 className="text-[22px] font-bold">Clean Process</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#4c6b78]">
                    We focus on efficient methods that support both quality and
                    responsibility.
                  </p>
                </div>

                <div className="rounded-[18px] bg-[#f6f8f9] p-6">
                  <h3 className="text-[22px] font-bold">Resource Awareness</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#4c6b78]">
                    Every step is planned with attention to sustainability and
                    continuous improvement.
                  </p>
                </div>

                <div className="rounded-[18px] bg-[#f6f8f9] p-6">
                  <h3 className="text-[22px] font-bold">Future Focus</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#4c6b78]">
                    We keep evolving to create a stronger and more responsible
                    business model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="partners"
          className="scroll-mt-[120px] mx-auto max-w-[1400px] px-6 py-20 md:px-10"
        >
          <div className="max-w-[900px]">
            <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-[#19cfd0]">
              Partners
            </p>
            <h2 className="text-[36px] font-bold leading-tight md:text-[52px]">
              Strong partnerships create stronger results
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#4c6b78]">
              In this section, you can talk about collaborations, clients,
              international reach, trusted suppliers, or any strategic
              partnerships that support your company.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[22px] bg-white p-8 shadow-sm">
              <h3 className="text-[24px] font-bold">Global Network</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#4c6b78]">
                We work with partners who share our standards and long-term
                vision.
              </p>
            </div>

            <div className="rounded-[22px] bg-white p-8 shadow-sm">
              <h3 className="text-[24px] font-bold">Shared Values</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#4c6b78]">
                Trust, reliability, and consistency are at the center of every
                partnership.
              </p>
            </div>

            <div className="rounded-[22px] bg-white p-8 shadow-sm">
              <h3 className="text-[24px] font-bold">Long-Term Impact</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#4c6b78]">
                Our collaborations help us grow, improve, and create more value.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}