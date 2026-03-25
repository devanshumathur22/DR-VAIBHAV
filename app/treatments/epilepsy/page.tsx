"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutDetails() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Image with zoom */}
          <div className="mb-6 overflow-hidden rounded-xl">
            <motion.div whileHover={{ scale: 1.08 }}>
              <Image
                src="/epilepsy.jpg"
                alt="Epilepsy"
                width={220}
                height={220}
                className="object-contain transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 leading-tight">
            Epilepsy Disorder Treatment in Jaipur
          </h2>

          {/* Text */}
          <p className="text-slate-500 leading-relaxed mb-6">
            Epilepsy is a disorder that results from{" "}
            <span className="text-teal-600 font-semibold">
              sudden dysfunction in the brain's impulses
            </span>.
            In normal conditions, nerves send and receive electrical signals.
            When this function is impaired, it messes up and causes a seizure.
            If a person experiences repeated episodes of seizures, it is called{" "}
            <span className="text-teal-600 font-semibold">
              Epilepsy
            </span>.
          </p>

          {/* Highlight Box */}
          <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-md mb-6">
            <p className="text-slate-500 text-sm">
              Epilepsy can occur due to stroke, injury, or illness. Early
              diagnosis and proper treatment can significantly improve quality
              of life.
            </p>
          </div>

          {/* List */}
          <ul className="space-y-3 text-slate-500">
            {[
              "Staring",
              "Temporary confusion",
              "Uncontrolled jerking movements",
              "Stiffening of body",
              "Loss of consciousness",
              "Breathing problem",
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
              "Migraine / Headache",
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
                className="border-b border-slate-200 pb-3 hover:text-teal-600 hover:pl-2 transition-all duration-300 cursor-pointer"
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