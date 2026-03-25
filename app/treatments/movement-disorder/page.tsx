"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MovementDisorderPage() {
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
                src="/Movement.jpg"
                alt="Movement Disorder"
                width={300}
                height={300}
                className="object-contain transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 leading-tight">
            What is Movement Disorder Treatment?
          </h2>

          {/* Text */}
          <p className="text-slate-500 leading-relaxed mb-6">
            <span className="text-teal-600 font-semibold">
              Movement disorder treatment
            </span>{" "}
            focuses on managing neurological conditions that cause involuntary
            or abnormal body movements such as tremors, stiffness, slowed
            movement, spasms, or uncoordinated movements.
          </p>

          {/* Highlight Box */}
          <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-md mb-6">
            <p className="text-slate-500 text-sm">
              These disorders include Parkinson’s disease, dystonia, essential
              tremors, chorea, and more. Early diagnosis plays a key role in
              effective treatment.
            </p>
          </div>

          {/* List */}
          <ul className="space-y-3 text-slate-500 mb-6">
            {[
              "Accurate diagnosis by neurologist",
              "Medications for tremors & stiffness",
              "Botulinum toxin (Botox) injections",
              "Physical & occupational therapy",
              "Lifestyle modifications",
              "Surgical options like DBS",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* Extra Section */}
          <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-md">
            <p className="text-slate-500 text-sm">
              <span className="text-teal-600 font-semibold">
                Best Movement Disorder Doctor in Jaipur:
              </span>{" "}
              Dr. Vaibhav Mathur (MBBS, MD Medicine – Gold Medalist) is a leading
              neurologist and Rajasthan’s first movement disorder specialist.
              He provides advanced care for Parkinson’s disease, dystonia, and
              other neurological conditions.
            </p>
          </div>
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
                  item === "Movement Disorder Treatment"
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