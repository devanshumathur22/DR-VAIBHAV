"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-700/90 backdrop-blur-xl text-white mt-20 border-t border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

          <div className="space-y-4 text-sm text-white/90">

            <div className="flex items-start gap-3">
              <Mail size={18} />
              <a
                href="mailto:info@brainspinemind.com"
                className="hover:text-yellow-300 transition cursor-pointer"
              >
                info@brainspinemind.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <a
                href="tel:+919664386295"
                className="hover:text-yellow-300 transition cursor-pointer"
              >
                +91-9664386295
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <p>
                V.S Medihub, Rail Nagar, Shiv Shakti Nagar,  
                Brijlalpura, Jaipur, Rajasthan 302019
              </p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-4">

              <a
                href="https://www.facebook.com/drvaibhavneurologist"
                target="_blank"
                className="p-2 border border-white/30 rounded-md hover:bg-white hover:text-teal-700 transition cursor-pointer"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://www.instagram.com/dr.vaibhavmathur/"
                target="_blank"
                className="p-2 border border-white/30 rounded-md hover:bg-white hover:text-teal-700 transition cursor-pointer"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.youtube.com/@vaibhavneurologist"
                target="_blank"
                className="p-2 border border-white/30 rounded-md hover:bg-white hover:text-teal-700 transition cursor-pointer"
              >
                <Youtube size={16} />
              </a>

              <a
                href="https://www.google.com/maps/place/Neurologist+Dr.+Vaibhav+Mathur/@26.8862826,75.7511834,17z/data=!3m1!4b1!4m6!3m5!1s0x396db500ad275b67:0x5c167e5abc2ff9c1!8m2!3d26.8862826!4d75.7537583!16s%2Fg%2F11p61mv4wg?shorturl=1"
                target="_blank"
                className="p-2 border border-white/30 rounded-md hover:bg-white hover:text-teal-700 transition cursor-pointer"
              >
                <Globe size={16} />
              </a>

            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

          <ul className="space-y-3 text-sm text-white/90">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Patient Videos", href: "/patient-videos" },
              { name: "Gallery", href: "/gallery" },
              { name: "News & Awards", href: "/news" },
              { name: "Blogs", href: "/blog" },
              { name: "Contact", href: "/contact" },
              { name: "DBS Surgery in Jaipur", href: "/dbs" },
              { name: "Brain Pacemaker", href: "/brain-pacemaker" },
              { name: "Vocal Cord Botox", href: "/vocal" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="hover:text-yellow-300 transition cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* TREATMENTS */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Our Treatments</h3>

          <ul className="space-y-3 text-sm text-white/90">
            {[
              { name: "Dystonia Treatment", slug: "dystonia-treatment" },
              { name: "Dementia Treatment", slug: "dementia-treatment" },
              { name: "Parkinson Disease Treatment", slug: "parkinson-treatment" },
              { name: "Migraine / Headache", slug: "migraine-headache" },
              { name: "Neck / Back Pain", slug: "neck-back-pain" },
              { name: "Epilepsy", slug: "epilepsy" },
              { name: "Stroke", slug: "stroke" },
              { name: "Encephalitis", slug: "encephalitis" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/treatments/${item.slug}`}
                  className="hover:text-yellow-300 transition cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 text-center py-5 text-sm text-white/80 backdrop-blur">
        © {new Date().getFullYear()} BrainCare. All rights reserved.
      </div>

    </footer>
  );
}