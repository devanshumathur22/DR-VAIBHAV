"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    city: "Jodhpur",
    time: "3:00 pm – 7:00 pm",
    day: "Sunday",
    place: "Dr. Shyam Mathur Clinic, Jodhpur",
    map: "https://maps.app.goo.gl/jL8S7uoDCJgRd6e4A",
  },
  {
    city: "Ajmer",
    time: "12:00 pm – 2:00 pm",
    day: "Wednesday",
    place: "Bharat Hospital, Ajmer",
    map: "https://www.google.com/maps/place/Bharat+Hospital/@26.4809896,74.6423252,17z/data=!3m1!4b1!4m6!3m5!1s0x396be653e64a4809:0xc81f8929b6b0e7ff!8m2!3d26.4809848!4d74.6449001!16s%2Fg%2F1tglxcw7?authuser=0&entry=tts",
  },
  {
    city: "Sikar",
    time: "10:00 am – 2:00 pm",
    day: "Wednesday",
    place: "Shubham Medical Center, Sikar",
    map: "https://www.google.com/maps/place/Shubham+Medical+and+Diagnostic+Center/@27.6109852,75.1482338,17z/data=!3m1!4b1!4m6!3m5!1s0x396cbb9867732d6d:0x700e6332bc003b25!8m2!3d27.6109805!4d75.1508087!16s%2Fg%2F11sjz3w3h3?authuser=0&entry=tts",
  },
  {
    city: "Kota",
    time: "11:00 am – 3:00 pm",
    day: "Friday",
    place: "Sushrut Hospital, Kota",
    map: "https://www.google.com/maps/place/Rathi+Hospital/@26.5814411,74.8428479,17z/data=!3m1!4b1!4m6!3m5!1s0x396bf0e6bcb54485:0x752e7394448a3a3a!8m2!3d26.5814363!4d74.8454228!16s%2Fg%2F11cn9511nv?authuser=0&entry=tts",
  },
];

export default function OPDSection() {
  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f0fdfa] to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Neuro OPD Visits
          </h2>

          <p className="mt-3 text-slate-600 text-sm">
            Visit Dr. Vaibhav Mathur across multiple cities
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">

          {locations.map((item, i) => {
            const isToday = item.day === today;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >

                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                {/* card */}
                <div
                  className={`relative bg-white/70 backdrop-blur-xl border rounded-3xl p-8 shadow-sm transition duration-500 group-hover:shadow-2xl group-hover:-translate-y-2
                  ${isToday ? "ring-2 ring-teal-500 border-teal-400" : "border-slate-200"}`}
                >

                  {/* badge */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.city}
                    </h3>

                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
                      Rajasthan
                    </span>
                  </div>

                  {/* today badge */}
                  {isToday && (
                    <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      Today Available
                    </span>
                  )}

                  {/* time */}
                  <div className="flex items-center gap-3 mt-4 text-slate-600 text-sm">
                    <Clock size={16} className="text-teal-600" />
                    {item.time} ({item.day})
                  </div>

                  {/* place */}
                  <div className="flex items-center gap-3 mt-3 text-slate-600 text-sm">
                    <MapPin size={16} className="text-teal-600" />
                    {item.place}
                  </div>

                  {/* button */}
                  <button
                    onClick={() => window.open(item.map, "_blank")}
                    className="mt-6 px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md hover:shadow-xl hover:scale-105 transition"
                  >
                    Get Location
                  </button>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}