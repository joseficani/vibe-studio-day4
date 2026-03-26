"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function Logo() {
const [hover, setHover] = useState(false);

const snowDots = useMemo(() => {
    return Array.from({ length: 24 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1.2}s`,
      duration: `${1.8 + Math.random() * 1.8}s`,
      size: `${2 + Math.random() * 4}px`,
    }));
  }, []);

  return (
    <Link
      href="/"
      className="flex items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-white">
        {hover && (
          <div className="pointer-events-none absolute inset-0 z-0">
            {snowDots.map((dot) => (
              <span
                key={dot.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: dot.left,
                  top: "-10px",
                  width: dot.size,
                  height: dot.size,
                  opacity: 0,
                  animation: `snowFall ${dot.duration} linear ${dot.delay} infinite`,
                }}
              />
            ))}
          </div>
        )}
        <div className="relative z-10 text-center leading-tight">
          <p className="text-xl font-bold text-white">vibe</p>
          <p className="text-xl font-bold text-white">studio</p>
        </div>
      </div>
    </Link>
  );
}