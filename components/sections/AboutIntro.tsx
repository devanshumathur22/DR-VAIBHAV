"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutIntro() {

  const [open, setOpen] = useState(false);

  const shortText = `
Have you recently noticed increased tremors or involuntary movements? It may be time to consult a movement disorder specialist. Early diagnosis can significantly improve quality of life.
`;

  const fullText = `
Have you recently noticed increased tremors, shivers or such involuntary body movements? It's probably time you take your elder to a movement disorder specialist in Jaipur, Rajasthan. Movement disorders may be caused by a series of reasons or at times, just ageing. Because of uncontrolled body movements, life may feel hard daily. To get permanent and proper treatment for your movement disorder, visit Brainspinemind.

Dystonia is a medical term for movement disorders that cause muscle spasms and contractions. The spasms and contractions may either be sustained or may come and go. Movements are often repetitive and cause unusual, awkward and sometimes painful postures.

Parkinson's disease is also a movement disorder that happens after the age of 50 years. Parkinson's disease can be treated with a neurologist's help and therapy. Visit the best movement disorder specialist in Jaipur today.
`;

  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-slate-900"
        >
          Best Movement Disorder Specialist in Jaipur, Rajasthan
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/60 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
          >
            <h3 className="text-lg font-semibold text-teal-600">
              Dr. Vaibhav Mathur
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              MBBS, MD Medicine (Gold Medalist)
            </p>

            {/* TEXT */}
            <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
              {open ? fullText : shortText}
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="mt-3 text-teal-600 text-sm font-medium hover:underline transition"
            >
              {open ? "Show Less ↑" : "Read More →"}
            </button>
          </motion.div>

          {/* RIGHT POSTER */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition duration-500 group">
              
              <Image
                src="/2.png"
                alt="Doctor Poster"
                width={300}
                height={400}
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              {/* glass overlay subtle */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}