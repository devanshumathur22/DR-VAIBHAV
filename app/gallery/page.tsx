"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
];

export default function ProGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const next = () =>
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );

  const prevSlide = () =>
    setActiveIndex((prev) =>
      prev === null
        ? 0
        : prev === 0
        ? images.length - 1
        : prev - 1
    );

  return (
    <div className="relative w-full py-16 px-6 bg-[#f7f9fc] overflow-hidden">
      
      {/* 🔥 WATERMARK BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
        <p className="text-[120px] font-bold text-blue-900 whitespace-nowrap">
          BrainCare Gallery
        </p>
      </div>

      <h2 className="text-3xl font-semibold text-center mb-12 relative z-10">
        Gallery
      </h2>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="group relative cursor-pointer bg-white p-3 shadow-sm hover:shadow-lg transition duration-300 rounded-xl overflow-hidden border border-gray-100"
          >
            <div className="relative w-full h-[220px]">
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* CLEAN HOVER (no black) */}
            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-sm">
              <p className="text-gray-800 text-sm font-medium">
                View Image
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-300-500 to-gray-900 backdrop-blur-md z-50 flex items-center justify-center">
          
          {/* close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-black"
          >
            <X size={32} />
          </button>

          {/* prev */}
          <button
            onClick={prevSlide}
            className="absolute left-6 text-black"
          >
            <ChevronLeft size={40} />
          </button>

          {/* image */}
          <div className="relative w-[90%] max-w-4xl h-[70vh]">
            <Image
              src={images[activeIndex]}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* next */}
          <button
            onClick={next}
            className="absolute right-6 text-black"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}