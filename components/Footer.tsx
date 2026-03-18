"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#ff3b44] px-8 py-16 text-white md:px-12 xl:px-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h3 className="mb-5 text-base font-medium">sitemap</h3>
              <ul className="space-y-2 text-[15px]">
                <li>
                  <Link href="/about" className="hover:underline">
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="hover:underline">
                    our work
                  </Link>
                </li>
                <li>
                  <Link href="#clients" className="hover:underline">
                    our clients
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:underline">
                    our team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:underline">
                    contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-base font-medium">offices</h3>
              <ul className="space-y-2 text-[15px]">
                <li>dubai, UAE</li>
                <li>beirut, LEBANON</li>
                <li>paris, FRANCE</li>
                <li>cairo, EGYPT</li>
                <li>riyadh, KSA</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-base font-medium">inquiries</h3>
              <p className="text-[15px] font-medium">
                hello@vibestudio.com
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 flex items-center gap-6 md:mb-0">
              <Link href="/" className="text-3xl font-bold hover:opacity-90">
                vibe studio
              </Link>

              <div className="h-5 w-px bg-white"></div>

              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram size={20} />
              </Link>

              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
            </div>

            <div className="flex items-center gap-4 text-[13px]">
              <span>privacy policy</span>
              <span>|</span>
              <span>terms & conditions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}