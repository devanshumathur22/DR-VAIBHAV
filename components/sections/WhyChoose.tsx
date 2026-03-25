"use client";

import { motion } from "framer-motion";
import { Users, Activity, HeartPulse, ShieldCheck } from "lucide-react";

const data = [
  {
    icon: Users,
    title: "Experienced Doctors",
    desc: "Highly qualified neurologists with years of clinical expertise.",
  },
  {
    icon: Activity,
    title: "Advanced Equipment",
    desc: "Modern diagnostic tools and cutting-edge medical technology.",
  },
  {
    icon: HeartPulse,
    title: "Patient Care",
    desc: "Personalized treatment with complete care and attention.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Clinic",
    desc: "Trusted by thousands of patients across Rajasthan.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-teal-600 font-medium">
            Why Choose
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
            Brainspinemind Clinic
          </h2>

          <div className="mt-3 w-16 h-[3px] bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full" />
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
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group perspective"
              >

                {/* GRADIENT BORDER (ALWAYS VISIBLE) */}
                <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-teal-400/70 via-cyan-400/70 to-blue-400/70 hover:from-teal-400 hover:to-blue-400 transition duration-300">

                  {/* CARD */}
                  <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:rotate-y-2">

                    {/* ICON */}
                    <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={26} />
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* HOVER LINE */}
                    <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:w-full transition-all duration-300 mx-auto" />

                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}