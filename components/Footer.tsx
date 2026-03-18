"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [instagramLink, setInstagramLink] = useState("https://instagram.com");
  const [linkedinLink, setLinkedinLink] = useState("https://linkedin.com");

  useEffect(() => {
    async function getSettings() {
      try {
        const res = await fetch("https://hanzo.dxpshift.com/api/settings");
        const data = await res.json();

        const socialMedia = data?.data?.social_media?.en;

        if (socialMedia?.Instagram) {
          setInstagramLink(socialMedia.Instagram);
        }

        if (socialMedia?.Linkedin) {
          setLinkedinLink(socialMedia.Linkedin);
        }
      } catch (error) {
        console.log("Error fetching footer links:", error);
      }
    }

    getSettings();
  }, []);

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
                  <Link href="/#work" className="hover:underline">
                    our work
                  </Link>
                </li>
                <li>
                  <Link href="/#clients" className="hover:underline">
                    our clients
                  </Link>
                </li>
                <li>
                  <Link href="/#team" className="hover:underline">
                    our team
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:underline">
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

              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
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