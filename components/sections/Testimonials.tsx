"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "Mohit Verma",
    text: "Excellent clinic with skilled doctors and top-notch facilities. Truly a great healthcare experience.",
    image: "/images/user1.jpg",
  },
  {
    name: "Virendra Singh",
    text: "Highly recommended for neurological issues. Professional care and very supportive staff.",
    image: "/images/user2.jpg",
  },
  {
    name: "Rahul Sharma",
    text: "Dr. Vaibhav Mathur is very knowledgeable and explains everything clearly.",
    image: "/images/user3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-teal-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-teal-600 text-sm font-medium">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2">
            Patient Feedback
          </h2>

          {/* Google trust badge */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600">
            ⭐ 5.0 Rating on Google Reviews
          </div>
        </motion.div>

        {/* SLIDER */}
        <div className="mt-14">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
          >

            {reviews.map((review, i) => {
              const isHighlight = i === 1; // middle card highlight

              return (
                <SwiperSlide key={i}>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative"
                  >

                    {/* glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                    {/* card */}
                    <div
                      className={`relative bg-white/70 backdrop-blur-xl border rounded-3xl p-6 shadow-sm transition duration-500 group-hover:shadow-2xl group-hover:-translate-y-2
                      ${
                        isHighlight
                          ? "scale-105 ring-2 ring-teal-500 border-teal-400"
                          : "border-slate-200"
                      }`}
                    >

                      {/* avatar */}
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={review.image}
                          className="w-10 h-10 rounded-full object-cover border"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            {review.name}
                          </h3>

                          {/* stars */}
                          <div className="flex gap-1 text-yellow-400 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* review */}
                      <p className="text-slate-600 text-sm leading-relaxed">
                        “{review.text}”
                      </p>

                    </div>

                  </motion.div>

                </SwiperSlide>
              );
            })}

          </Swiper>

        </div>
      </div>
    </section>
  );
}