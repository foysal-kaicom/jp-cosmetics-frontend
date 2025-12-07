"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { Handbag } from "lucide-react";

export default function HomeHero() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderInstance = useRef<KeenSliderInstance | null>(null);

  // 👉 Inline JSON data — You will update here only
  const heroData = {
    slides: [
      {
        image: "/assets/img/home/hero1.webp",
        title: "Glow Like Never Before",
        description:
          "Discover our new skincare range designed to refresh, hydrate, and give you a natural glow.",
      },
      {
        image: "/assets/img/home/hero2.webp",
        title: "Luxury Redefined",
        description:
          "Indulge in premium cosmetics crafted with care for flawless beauty every day.",
      },
      {
        image: "/assets/img/home/hero3.webp",
        title: "Confidence in Every Shade",
        description:
          "Explore our exclusive lipstick collection – bold colors for bold women.",
      },
    ],
    rightImages: [
      "/assets/img/home/hero2.png",
      "/assets/img/home/hero3.png",
    ],
  };

  const { slides, rightImages } = heroData;

  useEffect(() => {
    if (sliderRef.current) {
      sliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        duration: 1200,
        drag: true,
        slides: { perView: 1 },
        created: () => autoPlay(),
      });
    }

    let timeout: any;
    let mouseOver = false;

    function autoPlay() {
      clearTimeout(timeout);
      if (mouseOver) return;

      timeout = setTimeout(() => {
        sliderInstance.current?.next();
      }, 3000);
    }

    sliderRef.current?.addEventListener("mouseover", () => {
      mouseOver = true;
      clearTimeout(timeout);
    });

    sliderRef.current?.addEventListener("mouseout", () => {
      mouseOver = false;
      autoPlay();
    });

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex gap-8">
      {/* LEFT SLIDER */}
      <div
        ref={sliderRef}
        className="keen-slider w-2/3 h-[680px] rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide relative">
            <img
              src={slide.image}
              alt="slide"
              className="w-full h-full object-cover"
            />

            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

            {/* Slide text */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                {slide.title}
              </h2>

              <p className="max-w-lg text-base md:text-lg opacity-90">
                {slide.description}
              </p>

              <button className="relative w-[160px] overflow-hidden rounded-full bg-[#ec6b81] p-1 font-semibold text-white shadow-md group">
                <span className="absolute inset-0 bg-[#d85a72] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

                <div className="relative z-10 flex items-center gap-2 text-sm">
                  <p className="p-2 bg-white text-black rounded-full">
                    <Handbag className="w-5 h-5 text-[#ec6b81]" />
                  </p>
                  <p>Shop Now</p>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="space-y-8 w-1/3 h-[648px]">
        {rightImages.map((img, i) => (
          <div key={i} className="overflow-hidden h-1/2 rounded-xl group">
            <img
              src={img}
              alt={`Hero Right ${i}`}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500 origin-top-right"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
