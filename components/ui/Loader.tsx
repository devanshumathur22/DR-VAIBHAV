"use client";

import { Stethoscope } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">

      <div className="flex flex-col items-center gap-6 text-center animate-pulse">

        {/* 🔥 animated ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-teal-200 rounded-full" />
          <div className="absolute inset-0 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
        </div>

        {/* 🔥 Doctor Branding */}
        <div className="flex flex-col items-center gap-2">

          <div className="flex items-center gap-2 text-teal-600">
            <Stethoscope size={20} />
            <span className="font-semibold text-base">
              Dr. Vaibhav Mathur
            </span>
          </div>

          <p className="text-xs text-slate-500">
            MBBS, MD Medicine (Gold Medalist)
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Preparing your consultation...
          </p>

        </div>

      </div>

    </div>
  );
}