"use client";

import Link from "next/link";
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
      <div className="container mx-auto flex items-start justify-between px-8 pt-8 md:px-12 xl:px-16">
        <div className="pb-6 pt-2">
          <Logo lang={lang} />
        </div>

        <div className="hidden items-center gap-10 pt-6 lg:flex">
          <nav className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={true}
                className="group relative text-[20px] font-semibold text-gray-400 transition hover:text-white"
              >
                {link.label}
                <span className="absolute left-1/2 top-[38px] h-1 w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-[42px]" />
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

        <button
          className="mt-5 flex flex-col gap-[5px] lg:hidden"
          aria-label="Open menu"
        >
          <span className="h-[2px] w-7 bg-white"></span>
          <span className="h-[2px] w-7 bg-white"></span>
          <span className="h-[2px] w-7 bg-white"></span>
        </button>
      </div>
    </header>
  );
}