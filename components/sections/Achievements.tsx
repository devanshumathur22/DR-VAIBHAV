"use client";

import { motion } from "framer-motion";
import { User, Activity, Award, Hospital } from "lucide-react";
import CountUp from "react-countup";

const data = [
  {
    icon: User,
    value: 27000,
    suffix: "+",
    label: "Happy Patients",
  },
  {
    icon: Activity,
    value: 12,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Awards",
  },
  {
    icon: Hospital,
    value: 27100,
    suffix: "+",
    label: "Patient Visits",
  },
];

export default function Achievements() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#f0fdfa] to-white">

      {/* 🔥 background blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-teal-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Our Achievements
          </h2>

          <p className="mt-4 text-slate-600 text-sm md:text-base">
            Trusted by thousands of patients with consistent care, expertise, and proven medical excellence.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">

          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  delay: i * 0.1,
                  duration: 4,
                  repeat: Infinity,
                }}
                viewport={{ once: true }}
                className="group relative"
              >

                {/* 🔥 cursor glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.2),transparent_70%)] rounded-3xl" />

                {/* CARD */}
                <div className="relative bg-white/60 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 text-center shadow-sm group-hover:shadow-2xl transition duration-500 group-hover:-translate-y-2">

                  {/* ICON */}
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition">
                    <Icon size={26} />
                  </div>

                  {/* VALUE (COUNTUP) */}
                  <h3 className="mt-6 text-3xl font-bold text-slate-900">
                    <CountUp end={item.value} duration={2} />
                    {item.suffix}
                  </h3>

                  {/* LABEL */}
                  <p className="mt-2 text-slate-600 text-sm">
                    {item.label}
                  </p>

                  {/* LINE */}
                  <div className="mt-4 h-[2px] w-0 bg-teal-500 group-hover:w-full transition-all duration-500 mx-auto" />
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}