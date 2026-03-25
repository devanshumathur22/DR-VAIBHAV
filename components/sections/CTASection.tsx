"use client";

import { Phone, Stethoscope } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed right-3 bottom-20 md:bottom-5 z-[999] flex flex-col gap-2">

      {/* Appointment */}
      <a
        href="/contact"
        className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-3 py-2 hover:bg-teal-50 transition"
      >
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white">
          <Stethoscope size={16} />
        </div>

        {/* 🔥 mobile me text hide */}
        <span className="hidden sm:block text-xs font-medium text-slate-700">
          Appointment
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+919664386295"
        className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-3 py-2 hover:bg-teal-50 transition"
      >
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white">
          <Phone size={16} />
        </div>

        <span className="hidden sm:block text-xs font-medium text-slate-700">
          Call
        </span>
      </a>

    </div>
  );
}