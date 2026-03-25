"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NeckBackPainPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Image */}
          <div className="mb-6 overflow-hidden rounded-xl">
            <motion.div whileHover={{ scale: 1.08 }}>
              <Image
                src="/Neck.jpg"
                alt="Neck and Back Pain"
                width={300}
                height={300}
                className="object-contain transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 leading-tight">
            Neck & Back Pain Treatment in Jaipur
          </h2>

          {/* Text */}
          <p className="text-slate-500 leading-relaxed mb-6">
            Neck and back pain can occur due to{" "}
            <span className="text-teal-600 font-semibold">
              nerve degeneration, injury, or wear and tear
            </span>.
            It is often difficult to identify the exact cause without proper
            diagnosis.
          </p>

          {/* Highlight Box */}
          <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-md mb-6">
            <p className="text-slate-500 text-sm">
              Early medical consultation is important. Medication and therapy
              can help treat both the symptoms and the root cause of the pain.
            </p>
          </div>

          {/* Extra Text */}
          <p className="text-slate-500 leading-relaxed mb-6">
            At Brainspinemind, we provide expert neurological and physiotherapy
            support for patients suffering from neck and back pain.{" "}
            <span className="text-teal-600 font-semibold">
              Ignoring pain can be dangerous
            </span>, so timely treatment is essential.
          </p>

          {/* List */}
          <ul className="space-y-3 text-slate-500">
            {[
              "Neck stiffness",
              "Lower back pain",
              "Nerve-related pain",
              "Muscle strain",
              "Limited movement",
              "Pain while sitting or standing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="border border-slate-200 p-8 bg-white rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            Treatment With Expertise
          </h3>

          <div className="space-y-4 text-slate-500">
            {[
              "Migraine / Headche",
              "Neck / back pain",
              "Parkinson Disease Treatment",
              "Epilepsy",
              "Dementia Disease",
              "Stroke",
              "Encephalitis",
              "Dystonia & spasms",
              "Movement Disorder Treatment",
            ].map((item, i) => (
              <div
                key={i}
                className={`border-b border-slate-200 pb-3 hover:text-teal-600 hover:pl-2 transition-all duration-300 cursor-pointer ${
                  item === "Neck / back pain"
                    ? "text-teal-600 font-semibold"
                    : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}