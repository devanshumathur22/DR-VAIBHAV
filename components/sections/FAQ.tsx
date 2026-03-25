"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Parkinson's Treatment Expensive?",
    a: "Parkinson’s disease treatment in Jaipur is rather affordable, containing expert neurologists, quality medicines and advanced therapy at reasonable prices.",
  },
  {
    q: "Which therapy is best for Parkinson Disease?",
    a: "The best therapy includes medication, physiotherapy and lifestyle changes with personalized treatment.",
  },
  {
    q: "Who is the best Doctor for Parkinson's Disease in Jaipur?",
    a: "Dr Vaibhav Mathur is widely regarded as one of the best doctors for Parkinson’s disease in Jaipur.",
  },
  {
    q: "Who Specialises in Parkinson's?",
    a: "Dr. Vaibhav Mathur is a certified Movement Disorder and Parkinson’s Disease Specialist in Rajasthan.",
  },
  {
    q: "What type of Neurologist treats Parkinson's Disease?",
    a: "A Movement Disorder specialist manages Parkinson’s disease with advanced therapies.",
  },
  {
    q: "What's the Best Treatment for Parkinson's?",
    a: "Combination of medication, therapy and proper plan helps control symptoms effectively.",
  },
  {
    q: "Do you need a Neurologist for Parkinson's Disease?",
    a: "Yes, neurologist consultation is important for diagnosis and long-term care.",
  },
  {
    q: "What is the best treatment for Movement Disorder?",
    a: "Treatment includes medication, physiotherapy and surgery based on condition.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f8fafc] to-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* heading */}
        <div className="text-center">
          <p className="text-teal-600 text-sm font-medium">FAQs</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">

          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                layout
                className="group relative"
              >
                {/* glow border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/30 to-cyan-400/30 blur-xl opacity-0 group-hover:opacity-100 transition" />

                {/* card */}
                <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition">

                  {/* question */}
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="w-full flex items-center justify-between"
                  >
                    <span className="text-slate-900 font-medium text-sm md:text-base pr-4">
                      {item.q}
                    </span>

                    <ChevronDown
                      className={`transition ${
                        isOpen
                          ? "rotate-180 text-teal-600"
                          : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4"
                      >
                        <p className="text-slate-600 text-sm leading-relaxed border-t pt-3">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      

      </div>
    </section>
  );
}