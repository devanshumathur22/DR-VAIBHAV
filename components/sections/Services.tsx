"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  Zap,
  HeartPulse,
  Hand,
  Stethoscope,
  Waves,
  User,
} from "lucide-react";

const services = [
  { icon: Brain, title: "Migraine / Headache" },
  { icon: Activity, title: "Neck / Back Pain" },
  { icon: Hand, title: "Parkinson Disease" },
  { icon: HeartPulse, title: "Epilepsy" },
  { icon: User, title: "Dementia Treatment" },
  { icon: Zap, title: "Stroke" },
  { icon: Waves, title: "Encephalitis" },
  { icon: Stethoscope, title: "Dystonia Treatment" },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#f0fdfa] to-white overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-teal-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-slate-900"
        >
          Our Services
        </motion.h2>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">

          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >

                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.25),transparent_70%)] rounded-3xl" />

                {/* card */}
                <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 text-center shadow-sm group-hover:shadow-2xl transition duration-500 group-hover:-translate-y-2">

                  {/* icon */}
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition">
                    <Icon size={26} />
                  </div>

                  {/* title */}
                  <p className="mt-4 text-slate-700 font-medium text-sm">
                    {item.title}
                  </p>

                  {/* hover line */}
                  <div className="mt-3 h-[2px] w-0 bg-teal-500 group-hover:w-full transition-all duration-500 mx-auto" />
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}