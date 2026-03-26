"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export type Language = "en" | "ar";

type NavbarProps = {
  lang?: Language;
  setLang?: (lang: Language) => void;
};

export default function Navbar({
  lang = "en",
  setLang,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links =
    lang === "ar"
      ? [
          { label: "من نحن", href: "/about" },
          { label: "أعمالنا", href: "/#work" },
          { label: "الأخبار", href: "/news" },
          { label: "عملاؤنا", href: "/#clients" },
          { label: "اتصل بنا", href: "/contact" },
          { label: "الميديا", href: "/media" },
          { label: "الشركة", href: "/company" },
        ]
      : [
          { label: "about us", href: "/about" },
          { label: "our work", href: "/#work" },
          { label: "news", href: "/news" },
          { label: "our clients", href: "/#clients" },
          { label: "contact us", href: "/contact" },
          { label: "media", href: "/media" },
          { label: "company", href: "/company" },
        ];

  return (
    <header className="w-full bg-black">
      <div className="container mx-auto flex items-start justify-between px-6 pt-6 md:px-8 lg:px-10 xl:px-16">
        <div className="pb-6 pt-2">
          <Logo lang={lang} />
        </div>

        {/* Desktop navbar only above 768 */}
        <div className="hidden items-center gap-6 pt-6 min-[769px]:flex lg:gap-8 xl:gap-10">
          <nav className="flex items-center gap-4 lg:gap-6 xl:gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={true}
                className="group relative whitespace-nowrap text-[14px] font-semibold text-gray-400 transition hover:text-white lg:text-[16px] xl:text-[20px]"
              >
                {link.label}
                <span className="absolute left-1/2 top-[28px] h-[2px] w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-[30px] lg:top-[30px] lg:group-hover:w-[34px] xl:top-[38px] xl:h-1 xl:group-hover:w-[42px]" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center rounded-full border border-white p-[3px]">
            <button
              type="button"
              onClick={() => setLang?.("ar")}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold transition ${
                lang === "ar"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              AR
            </button>

            <button
              type="button"
              onClick={() => setLang?.("en")}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold transition ${
                lang === "en"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Burger menu on 768 and below */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="mt-5 flex flex-col gap-[5px] min-[769px]:hidden"
          aria-label="Open menu"
        >
          <span className="h-[2px] w-7 bg-white"></span>
          <span className="h-[2px] w-7 bg-white"></span>
          <span className="h-[2px] w-7 bg-white"></span>
        </button>
      </div>

      {/* Full screen mobile/tablet menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black min-[769px]:hidden">
          <div className="flex h-full flex-col px-8 pt-8">
            <div className="flex items-start justify-between">
              <div className="pb-6 pt-2">
                <Logo lang={lang} />
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="mt-4 text-[40px] leading-none text-white"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <div className="mt-10 flex flex-1 flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-8 text-center">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    scroll={true}
                    onClick={() => setMenuOpen(false)}
                    className="text-[28px] font-semibold text-gray-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-12 flex items-center rounded-full border border-white p-[3px]">
                <button
                  type="button"
                  onClick={() => setLang?.("ar")}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-semibold transition ${
                    lang === "ar"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  AR
                </button>

                <button
                  type="button"
                  onClick={() => setLang?.("en")}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-semibold transition ${
                    lang === "en"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}