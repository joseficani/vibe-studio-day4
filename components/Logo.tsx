"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type SnowDot = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
};

export default function Logo() {
  const snowRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween[] | null>(null);
  const [dots, setDots] = useState<SnowDot[]>([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: 24 }, (_, index) => ({
      id: index,
      left: 5 + Math.random() * 90,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 1.2,
      duration: 1.8 + Math.random() * 1.8,
      drift: -8 + Math.random() * 16,
    }));
    setDots(generatedDots);
  }, []);

  useGSAP(() => {
    if (!snowRef.current) return;

    const particles = snowRef.current.querySelectorAll(".snow-dot");

    gsap.set(particles, {
      opacity: 0,
      y: -20,
    });
  }, [dots]);

  const startSnow = () => {
    if (!snowRef.current || dots.length === 0) return;

    const particles = snowRef.current.querySelectorAll(".snow-dot");

    if (animationRef.current) {
      animationRef.current.forEach((tween) => tween.kill());
    }

    const tweens: gsap.core.Tween[] = [];

    particles.forEach((particle, index) => {
      const dot = dots[index];

      gsap.set(particle, {
        opacity: 0,
        y: -20,
        x: 0,
      });
      const tween = gsap.to(particle, {
        y: 110,
        x: dot.drift,
        duration: dot.duration,
        delay: dot.delay,
        ease: "none",
        repeat: -1,
        repeatDelay: 0.2,
        keyframes: [
          { opacity: 1, duration: 0.2 },
          { opacity: 1, duration: dot.duration - 0.4 },
          { opacity: 0, duration: 0.2 },
        ],
      });
      tweens.push(tween);
    });
    animationRef.current = tweens;
  };

  const stopSnow = () => {
    if (!snowRef.current) return;

    const particles = snowRef.current.querySelectorAll(".snow-dot");

    if (animationRef.current) {
      animationRef.current.forEach((tween) => tween.kill());
    }
    gsap.to(particles, {
      opacity: 0,
      duration: 0.2,
    });
  };

  return (
    <Link
      href="/"
      className="flex items-center"
      onMouseEnter={startSnow}
      onMouseLeave={stopSnow}
    >
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-white">
        <div ref={snowRef} className="pointer-events-none absolute inset-0 z-0">
          {dots.map((dot) => (
            <span
              key={dot.id}
              className="snow-dot absolute rounded-full bg-white"
              style={{
                left: `${dot.left}%`,
                top: "-10px",
                width: `${dot.size}px`,
                height: `${dot.size}px`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center leading-tight">
          <p className="text-xl font-bold text-white">vibe</p>
          <p className="text-xl font-bold text-white">studio</p>
        </div>
      </div>
    </Link>
  );
}