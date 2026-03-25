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

  // ✅ 🔥 PERFECT MOBILE SCROLL FIX
  const handleMobileClick = () => {
    setMobile(false);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  };

  return (
    <>
      {/* 🔥 TOP BAR */}
      <div className="w-full bg-teal-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 9664386295</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@brainspinemind.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/drvaibhavneurologist"
              target="_blank"
              className="hover:text-yellow-300"
            >
              <Facebook size={16} />
            </a>

            <a
              href="https://www.instagram.com/dr.vaibhavmathur/"
              target="_blank"
              className="hover:text-yellow-300"
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://www.google.com/maps/place/Neurologist+Dr.+Vaibhav+Mathur/"
              target="_blank"
              className="hover:text-yellow-300"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔥 NAVBAR */}
      <nav className="sticky top-0 z-[999] backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <Link href="/" className="text-xl md:text-2xl font-bold text-slate-900">
            BrainCare
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            {links.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 hover:text-teal-600 ${
                  pathname === link.href ? "text-teal-600" : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* DROPDOWN */}
            <div
              className="relative"
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
                    className="absolute top-10 left-0 w-80 bg-white/80 backdrop-blur-xl border rounded-xl shadow-xl p-2"
                  >
                    {treatments.map((item, i) => (
                      <Link
                        key={i}
                        href={`/treatments/${item.slug}`}
                        className="block px-4 py-2 rounded-lg hover:bg-teal-50"
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
                className={`py-2 hover:text-teal-600 ${
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
            className="hidden md:block px-5 py-2 rounded-full bg-teal-600 text-white text-sm hover:bg-teal-700"
          >
            Book Appointment
          </Link>

          {/* MOBILE BTN */}
          <button onClick={() => setMobile(!mobile)} className="md:hidden">
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
              className="md:hidden bg-white/90 backdrop-blur-xl border-t"
            >
              <div className="px-6 py-6 flex flex-col gap-4">

                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    scroll={false}
                    onClick={handleMobileClick}
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
                      scroll={false}
                      onClick={handleMobileClick}
                      className="block py-1 text-sm text-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  scroll={false}
                  onClick={handleMobileClick}
                  className="mt-4 bg-teal-600 text-white text-center py-3 rounded-xl"
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