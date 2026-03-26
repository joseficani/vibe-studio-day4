"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WorkGrid from "../components/WorkGrid";
import Footer from "../components/Footer";
import BrandsSection from "../components/BrandsSection";

export type Language = "en" | "ar";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-black text-white"
    >
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <WorkGrid lang={lang} />
      <BrandsSection lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}