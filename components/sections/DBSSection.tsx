"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function DBSSection() {

  const [open, setOpen] = useState(false);

  const shortText = `
Deep Brain Stimulation (DBS) surgery is an advanced neurological treatment used for movement disorders like tremors, dystonia, and Parkinson’s disease.
`;

  const fullText = `
Deep Brain Stimulation (DBS) surgery is a highly advanced neurological technique used to treat movement disorders such as essential tremors, dystonia, and Parkinson's disease.

In this procedure, a tiny electrode is implanted in specific brain regions to deliver controlled electrical pulses. This helps regulate abnormal brain activity and reduces symptoms like stiffness, tremors, and movement issues.

Dr. Vaibhav Mathur is a top specialist in Jaipur, offering expert DBS treatment with modern technology and patient-focused care. He is known for delivering effective and safe neurological solutions.
`;

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">

      {/* glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-teal-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Best DBS Surgery in Jaipur
          </h2>

          {/* underline accent */}
          <div className="mt-2 w-16 h-[3px] bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />

          {/* text */}
          <p className="mt-6 text-slate-600 leading-relaxed whitespace-pre-line">
            {open ? fullText : shortText}
          </p>

          {/* read more */}
         <Link
  href="/dbs"
  className="mt-4 inline-block text-teal-600 font-medium text-sm hover:underline transition"
>
  Read More →
</Link>

          {/* highlight glass box */}
          <div className="mt-6 bg-white/60 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-sm">
            <p className="text-sm text-slate-700">
              Advanced brain stimulation therapy with precision technology and expert care.
            </p>
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center group"
        >

          {/* glass bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* image card */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group-hover:shadow-2xl transition duration-500">

            <Image
              src="/6.png"
              alt="DBS Surgery"
              width={420}
              height={420}
              className="object-cover group-hover:scale-105 transition duration-500"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}