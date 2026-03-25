"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ParkinsonPage() {
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
                src="/parkinson.jpg"
                alt="Parkinson"
                width={300}
                height={300}
                className="object-contain transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 leading-tight">
            Best Doctor for Parkinson Disease in Jaipur | Parkinson Specialist in Jaipur
          </h2>

          {/* Text */}
          <p className="text-slate-500 leading-relaxed mb-6">
            <span className="text-teal-600 font-semibold">
              Parkinson's disease
            </span>{" "}
            usually occurs after the age of 50 and is caused by the gradual
            degeneration of nerve cells due to ageing. It is characterized by{" "}
            <span className="text-teal-600 font-semibold">
              involuntary movements, shaking, and tremors
            </span>.
          </p>

          {/* Highlight Box */}
          <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-md mb-6">
            <p className="text-slate-500 text-sm">
              Patients may find it difficult to perform daily activities. Early
              diagnosis and proper treatment can help manage symptoms and improve
              quality of life significantly.
            </p>
          </div>

          {/* Extra Text */}
          <p className="text-slate-500 leading-relaxed mb-6">
            At Brainspinemind, we specialize in treating movement disorders with
            a patient-focused approach.{" "}
            <span className="text-teal-600 font-semibold">
              Parkinson's disease is a common movement disorder
            </span>{" "}
            and we ensure the best care for patients and their families.
          </p>

          {/* List */}
          <ul className="space-y-3 text-slate-500">
            {[
              "Tremors (shaking)",
              "Slow movement (bradykinesia)",
              "Muscle stiffness",
              "Balance problems",
              "Speech changes",
              "Difficulty in daily activities",
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
                  item === "Parkinson Disease Treatment"
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