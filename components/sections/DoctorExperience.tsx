"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";

export default function DoctorExperience() {

  const [open, setOpen] = useState(false);

  const shortText = `
Migraines are difficult to live with, and getting relief from them is the ultimate goal. The journey to a pain-free life begins with the guidance of Dr. Vaibhav Mathur.
`;

  const fullText = `
Migraines are difficult to live with, and getting relief from them is the ultimate goal. The journey to a pain-free life begins with the guidance of Dr. Vaibhav Mathur, the best Neurologist in Jaipur at BrainSpineMind Clinic.

Dr. Vaibhav Mathur brings his wealth of knowledge and provides phenomenal care to migraine sufferers and those suffering from neurological diseases. Choosing the right neurology doctor is crucial for the health of your spine and brain.

Dr. Vaibhav Mathur at BrainSpineMind Clinic has experience in repairing injured spinal cords as well as providing comprehensive care for all your neurological problems.

By choosing BrainSpineMind Clinic, you are making an informed decision about your brain, spine, and neurological problems. From basic checkups to serious cases, the clinic aims to provide the best possible care to every patient. Your path towards a healthy neurological condition begins here.
`;

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#f0fdfa] to-white overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-teal-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/5.png"
              alt="Doctor"
              width={420}
              height={520}
              className="object-cover"
            />
          </div>

          {/* experience card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute -left-10 top-10 bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl px-6 py-4 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-teal-600">
              <CountUp end={14} duration={2} />+
            </h3>
            <p className="text-sm text-slate-600">Years Experience</p>
          </motion.div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-sm text-teal-600 font-medium">
            Helping Patients From Around The Globe
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
            Best Neurology Doctor in Jaipur
          </h2>

          {/* TEXT */}
          <p className="mt-6 text-slate-600 leading-relaxed whitespace-pre-line">
            {open ? fullText : shortText}
          </p>

          {/* BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 text-teal-600 text-sm font-medium hover:underline transition"
          >
            {open ? "Show Less ↑" : "Read More →"}
          </button>

          {/* highlight box */}
          <div className="mt-6 bg-white/60 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-slate-700">
              Providing world-class treatment facilities with a patient-first approach and advanced medical technology.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}