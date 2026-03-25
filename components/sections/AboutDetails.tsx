"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutDetails() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >

          {/* main image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/3.png"
              alt="Conference"
              width={420}
              height={300}
              className="object-cover"
            />
          </div>

          {/* overlay image */}
          <div className="absolute bottom-[-30px] right-[-20px] rounded-2xl overflow-hidden shadow-lg border border-white">
            <Image
              src="/4.png"
              alt="Doctor speaking"
              width={250}
              height={180}
              className="object-cover"
            />
          </div>

          {/* floating card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-10 left-[-20px] bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg"
          >
            <p className="text-2xl font-bold text-teal-600">95%</p>
            <p className="text-sm text-slate-600">Positive Feedback</p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-slate-900">
            Best Neurologist in Jaipur - Brainspinemind Clinic
          </h3>

          <p className="mt-4 text-slate-600 leading-relaxed">
            You have reached BrainSpineMind Clinic, Jaipur. Our team of expert neurologists provides advanced care and treatment for a wide range of neurological disorders with a patient-focused approach.
          </p>

          {/* highlight */}
          <div className="mt-6 border-l-4 border-teal-500 pl-4">
            <h4 className="font-semibold text-slate-800">
              Rajasthan's First Movement Disorder Specialist
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              Movement disorders can affect daily life significantly. Early consultation and treatment can help control symptoms and improve quality of life.
            </p>
          </div>

          {/* extra */}
          <div className="mt-6">
            <h4 className="font-semibold text-slate-800">
              We Provide Quality Treatment
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              We specialize in migraine, epilepsy, multiple sclerosis, Parkinson’s disease, and more with personalized and modern treatment methods.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}