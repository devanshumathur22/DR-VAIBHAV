"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#f8fafc] py-20 overflow-hidden">

      {/* background blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-teal-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-200/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-10 md:p-14 overflow-hidden"
        >

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* TEXT */}
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#0f172a]">
                <span className="text-[#0ea5a4]">Rajasthan's</span> First Movement Disorder Specialist
              </h1>

              <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-[#0284c7]">
                Dr. Vaibhav Mathur
              </h2>

              <div className="mt-5 border-l-4 border-[#0ea5a4] pl-4 text-gray-700 leading-relaxed text-sm md:text-base space-y-1">
                <p><strong>MBBS, MD Medicine (Gold Medalist)</strong></p>
                <p>DM Neurology, Ex Assistant Professor, SMS Hospital, Jaipur</p>
                <p>DrNB Neurology, Fellowship in Movement Disorders, Mumbai</p>
                <p>Consultant Neurophysician and Movement Disorders Specialist</p>
                <p>Narayana Multispeciality Hospital, Jaipur</p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative flex justify-center">
              
              {/* background shape */}
              <div className="absolute w-[320px] h-[320px] bg-[#0ea5a4]/20 rounded-[40px] blur-2xl" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <Image
                  src="/doctor.png"
                  alt="Doctor"
                  width={350}
                  height={450}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>

          </div>

          {/* decorative wave */}
          <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-gradient-to-br from-teal-100 to-transparent rounded-full opacity-40" />
        </motion.div>
      </div>

      {/* whatsapp */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
          <MessageCircle size={22} />
        </button>
      </div>
    </section>
  );
}