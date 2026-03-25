"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

type Video = {
  id: number;
  youtube: string;
};

const videos: Video[] = [
  { id: 1, youtube: "https://youtu.be/sZ-_zpxAeq8" },
  { id: 2, youtube: "https://youtu.be/57G-esJHZME" },
  { id: 3, youtube: "https://youtu.be/_Y-F-tibMLA" },
  // { id: 4, youtube: "https://youtu.be/6AIXYFSoWvM" },
  // { id: 5, youtube: "https://youtu.be/gTl87OdV2tg" },
  // { id: 6, youtube: "https://youtu.be/M0gQh3cfnTw" },
  // { id: 7, youtube: "https://youtu.be/Dug9ea4_jNA" },
  { id: 8, youtube: "https://youtu.be/6PiEIDL2MvU" },
];

// 🔥 video ID extractor
const getVideoId = (url: string): string => {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regExp);
  return match ? match[1] : "";
};

export default function PatientVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current?.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* SCROLL BUTTONS */
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADING */}
        <h2 className="text-4xl font-serif text-slate-800 mb-10">
          Patient Videos
        </h2>

        {/* ARROWS */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-[55%] z-10 bg-white shadow-lg p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-[55%] z-10 bg-white shadow-lg p-2 rounded-full"
        >
          <ChevronRight />
        </button>

        {/* ROW */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {videos.map((video) => {
            const id = getVideoId(video.youtube);

            return (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.08 }}
                className="min-w-[300px] h-[200px] rounded-2xl overflow-hidden relative cursor-pointer border border-slate-200 group"
                onClick={() => setActiveVideo(id)}
              >
                {/* 🔥 Thumbnail auto */}
                <img
                  src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                  className="w-full h-full object-cover"
                />

                {/* HOVER VIDEO PREVIEW */}
                <motion.video
                  src="/videos/preview.mp4"
                  muted
                  loop
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <Play className="text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MODAL */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative w-[90%] md:w-[800px]">

              {/* CLOSE */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white"
              >
                <X size={28} />
              </button>

              {/* 🔥 FIXED EMBED */}
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-[450px] rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}