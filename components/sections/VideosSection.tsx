"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Play } from "lucide-react";
import { useState } from "react";

type Video = {
  title: string;
  url: string;
};

const videos: Video[] = [
  {
    title: "Parkinson’s Treatment",
    url: "https://youtu.be/MVFEZca3K8Y?si=AfvJRDVq6jzaj_Ks",
  },
  {
    title: "Deep Brain Stimulation",
    url: "https://youtu.be/6PiEIDL2MvU?si=3ogGc86h7-d_yBTG",
  },
  {
    title: "Migraine Treatment",
    url: "https://youtu.be/eY-SVfgFnUo?si=qw3VgvrPkgbYcO3P",
  },
  {
    title: "Parkinson's Disorder",
    url: "https://youtu.be/57G-esJHZME?si=G89Y4m-ue7RR5Jhz",
  },
];

// robust video ID extractor (supports youtu.be + youtube.com)
const getVideoId = (url: string): string => {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regExp);
  return match ? match[1] : "";
};

export default function VideoSlider() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#ecfeff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-slate-900">
          Patient Education Videos
        </h2>

        {/* Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {videos.map((video, i) => {
              const id = getVideoId(video.url);

              return (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => setActive(id)}
                    className="group cursor-pointer"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200">

                      {/* Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center backdrop-blur group-hover:scale-110 transition">
                          <Play className="text-red-500 w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <p className="mt-3 text-sm text-slate-700 font-medium">
                      {video.title}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <div
            className="w-[90%] md:w-[800px] bg-black rounded-xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${active}`}
              className="w-full h-[450px]"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 bg-white px-3 py-1 rounded-md text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}