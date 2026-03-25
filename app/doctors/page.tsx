"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain,
  Award,
  BookOpen,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

export default function DoctorDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* 🔥 TOP PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Dr. Vaibhav Mathur
            </h2>

            <div className="space-y-2 text-slate-600 text-sm leading-relaxed">
              <p><span className="font-semibold text-teal-600">MBBS, MD Medicine (Gold Medalist)</span></p>
              <p>DM Neurology – SMS Hospital, Jaipur</p>
              <p>DrNB Neurology – Jaslok Hospital, Mumbai</p>
              <p>Consultant Neurophysician & Movement Disorder Specialist</p>
              <p>Narayana Multispeciality Hospital, Jaipur</p>
            </div>

            {/* SHORT ABOUT */}
            <p className="mt-6 text-slate-600 text-sm leading-relaxed">
              Dr Vaibhav Mathur is a highly qualified neurologist in Jaipur,
              known for expertise in{" "}
              <span className="text-teal-600 font-semibold">
                Parkinson’s, Stroke, Epilepsy
              </span>{" "}
              and advanced neurological disorders.
            </p>
          </div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden border shadow-xl">
              <Image
                src="/8.png"
                alt="Doctor"
                width={350}
                height={400}
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 🔥 SECTIONS */}
        <Section
          icon={<Brain />}
          title="Fields of Expertise"
          items={[
            "Stroke Thrombolysis & Rehabilitation",
            "Epilepsy treatment & EEG interpretation",
            "Neuroimaging (CT/MRI) & nerve conduction studies",
            "Parkinsonism & Movement Disorders",
            "Botulinum injections & EMG-guided therapy",
            "Deep Brain Stimulation (DBS)"
          ]}
        />

        <Section
          icon={<Award />}
          title="Awards & Recognition"
          items={[
            "Represented India at International Movement Disorder Conference",
            "Published neurological book series",
            "Best Neuroscience Paper Award (BNA Conference)",
            "Top scorer in Neurology Quiz"
          ]}
        />

        <Section
          icon={<BadgeCheck />}
          title="Professional Memberships"
          items={[
            "International Movement Disorders Society",
            "Movement Disorders Society of India",
            "Indian Medical Association",
            "Cleveland Clinic Neurology Certification"
          ]}
        />

        <Section
          icon={<BookOpen />}
          title="Publications"
          items={[
            "Brain fog in COVID survivors – International Journal",
            "RNFL diagnostic research – Japan",
            "Diabetic neuropathy study",
            "Tubercular meningitis research"
          ]}
        />

        <Section
          icon={<Sparkles />}
          title="Rare / Unique Skills"
          items={[
            "Botulinum toxin injections (EMG guided)",
            "Portable EMG usage for precision",
            "Treatment of dystonia & tremors",
            "Advanced DBS programming"
          ]}
        />

      </div>
    </section>
  );
}

/* 🔥 SECTION CARD */

function Section({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50 rounded-3xl p-8 border shadow-sm"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-teal-100 text-teal-600 p-2 rounded-xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      {/* ITEMS */}
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl border flex gap-3 items-start"
          >
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
            <p className="text-sm text-slate-700 leading-relaxed">
              {highlight(item)}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* 🔥 TEXT HIGHLIGHT */

function highlight(text: string) {
  const keywords = ["Stroke", "Epilepsy", "Parkinson", "DBS", "India"];

  let result = text;

  keywords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    result = result.replace(
      regex,
      `<span class="text-teal-600 font-semibold">$1</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}