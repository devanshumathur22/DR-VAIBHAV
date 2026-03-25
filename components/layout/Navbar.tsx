"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Doctors", href: "/doctors" },
    { name: "Patient Videos", href: "/patient-videos" },
    { name: "News & Awards", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const treatments = [
    { name: "Dystonia Treatment", slug: "dystonia-treatment" },
    { name: "Dementia Treatment", slug: "dementia-treatment" },
    { name: "Parkinson Disease Treatment", slug: "parkinson-treatment" },
    { name: "Migraine / Headache", slug: "migraine-headache" },
    { name: "Neck / Back Pain", slug: "neck-back-pain" },
    { name: "Epilepsy", slug: "epilepsy" },
    { name: "Stroke", slug: "stroke" },
    { name: "Encephalitis", slug: "encephalitis" },
    { name: "Movement Disorder Treatment", slug: "movement-disorder" },
    { name: "Psychiatrist Treatment", slug: "psychiatrist-treatment" },
  ];

  return (
    <>
      {/* 🔥 TOP BAR */}
      <div className="w-full bg-teal-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9664386295</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@brainspinemind.com</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.facebook.com/drvaibhavneurologist"
              target="_blank"
              className="hover:text-yellow-300 transition cursor-pointer"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/dr.vaibhavmathur/"
              target="_blank"
              className="hover:text-yellow-300 transition cursor-pointer"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.google.com/maps/place/Neurologist+Dr.+Vaibhav+Mathur/@26.8862826,75.7511834,17z/data=!3m1!4b1!4m6!3m5!1s0x396db500ad275b67:0x5c167e5abc2ff9c1!8m2!3d26.8862826!4d75.7537583!16s%2Fg%2F11p61mv4wg?shorturl=1"
              target="_blank"
              className="hover:text-yellow-300 transition cursor-pointer"
            >
              <Globe size={18} />
            </a>

          </div>
        </div>
      </div>

      {/* 🔥 NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900 cursor-pointer"
          >
            BrainCare
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            {links.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 cursor-pointer hover:text-teal-600 transition ${
                  pathname === link.href ? "text-teal-600" : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* DROPDOWN */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1 py-2 text-slate-700 hover:text-teal-600">
                Treatments
                <ChevronDown
                  size={16}
                  className={`transition ${open ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-10 left-0 w-80 bg-white/70 backdrop-blur-xl border border-white/40 rounded-xl shadow-xl p-2"
                  >
                    {treatments.map((item, i) => (
                      <Link
                        key={i}
                        href={`/treatments/${item.slug}`}
                        className="block px-4 py-2 rounded-lg hover:bg-teal-50 text-slate-700 cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {links.slice(3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 cursor-pointer hover:text-teal-600 transition ${
                  pathname === link.href ? "text-teal-600" : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="hidden md:block px-5 py-2 rounded-full bg-teal-600 text-white text-sm hover:bg-teal-700 transition cursor-pointer"
          >
            Book Appointment
          </Link>

          {/* MOBILE BTN */}
          <button onClick={() => setMobile(!mobile)} className="md:hidden cursor-pointer">
            {mobile ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobile && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden bg-white/80 backdrop-blur-xl border-t"
            >
              <div className="px-6 py-6 flex flex-col gap-4">

                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobile(false)}
                    className="cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-4">
                  <p className="font-semibold mb-2">Treatments</p>

                  {treatments.map((item, i) => (
                    <Link
                      key={i}
                      href={`/treatments/${item.slug}`}
                      onClick={() => setMobile(false)}
                      className="block py-1 text-sm text-gray-600 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-4 bg-teal-600 text-white text-center py-3 rounded-xl cursor-pointer"
                >
                  Book Appointment
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}