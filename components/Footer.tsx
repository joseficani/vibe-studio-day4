"use client";

import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#ff3b44] text-white py-16 px-6">
      <div className="mx-auto max-w-[1100px]">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-base font-medium mb-5">sitemap</h3>
            <ul className="space-y-2 text-[15px]">
              <li>about us</li>
              <li>our work</li>
              <li>our clients</li>
              <li>our team</li>
              <li>contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-5">offices</h3>
            <ul className="space-y-2 text-[15px]">
              <li>dubai, UAE</li>
              <li>beirut, LEBANON</li>
              <li>paris, FRANCE</li>
              <li>cairo, EGYPT</li>
              <li>riyadh, KSA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-5">inquiries</h3>
            <p className="text-[15px] font-medium">hello@creativehub.com</p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-14">

          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">vibe studio</h2>

            <div className="w-px h-5 bg-white"></div>

            <Instagram size={20} />
            <Linkedin size={20} />
          </div>

          <div className="flex items-center gap-4 text-[13px]">
            <span>privacy policy</span>
            <span>|</span>
            <span>terms & conditions</span>
          </div>

        </div>

      </div>
    </footer>
  );
}