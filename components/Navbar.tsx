"use client";

import Link from "next/link";
import Logo from "./Logo";

const links = [
  { label: "about us", href: "/about" },
  { label: "our work", href: "/#work" },
  { label: "news", href: "/news" },
  { label: "our clients", href: "/#clients" },
  // { label: "our team", href: "/#team" },
  { label: "contact us", href: "/contact" },
  { label: "media", href: "/media" },
  { label: "company", href: "/company" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-black">
      <div className="container mx-auto flex items-start justify-between px-8 pt-8 md:px-12 xl:px-16">
        <Logo />

        <div className="hidden items-center gap-10 pt-6 lg:flex">
          <nav className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={true}
                className="group relative text-[20px] font-semibold lowercase text-gray-400 transition hover:text-white"
              >
                {link.label}
                <span className="absolute left-1/2 top-[38px] h-1 w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-[42px]" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center rounded-full border border-white p-[3px]">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[13px] font-semibold text-white">
              FR
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[13px] font-semibold text-black">
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