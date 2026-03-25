"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            About Us
          </h2>

          {/* 🔥 IMPORTANT TEXT */}
          <p className="text-slate-600 leading-relaxed mb-4">
            Welcome to Brainspinemind. We provide exceptional neurological care
            with a team of highly skilled neurologists. Our goal is accurate
            diagnosis, advanced treatment, and the best outcomes for patients.
          </p>

          <p className="text-slate-600 leading-relaxed mb-6">
            Led by <span className="font-semibold text-slate-900">Dr. Vaibhav Mathur</span>, 
            we specialize in treating migraines, epilepsy, Parkinson’s disease, 
            and other neurological disorders with personalized and compassionate care.
          </p>

          {/* 🔥 READ MORE */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              open ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <p className="text-slate-600 leading-relaxed mb-4">
              Are you struggling with neurological issues and looking for the best neurologist
              in Jaipur? Brainspinemind offers cutting-edge care delivered by a renowned
              specialist. Our neurologist is recognized for exceptional skills in diagnosing
              and treating complex neurological conditions.
            </p>

            <p className="text-slate-600 leading-relaxed">
              We provide expert care, state-of-the-art treatments, and compassionate support.
              Our mission is to deliver the highest standard of neurological care and become
              the most trusted neurology center in Jaipur.
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-4 flex items-center gap-2 text-teal-600 font-medium hover:gap-3 transition"
          >
            {open ? "Read Less" : "Read More"}
            <ChevronDown
              className={`transition-transform ${
                open ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-teal-200 blur-2xl opacity-20 rounded-3xl" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img
              src="/7.png" // apni image path
              alt="Doctor"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}