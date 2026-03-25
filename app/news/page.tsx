"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/13.jpg",
];

export default function PremiumSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-white py-16 px-6">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Image Gallery
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
      >
        {images.map((src, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={index}>
              <div
                className={`transition-all duration-500 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-70 blur-[1px]" // 👈 blur kam
                }`}
              >
                {/* gradient border */}
                <div className="p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  
                  {/* card */}
                  <div className="relative w-full h-[380px] rounded-3xl overflow-hidden bg-white group">
                    
                    <Image
                      src={src}
                      alt={`image-${index}`}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* subtle overlay glow */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}