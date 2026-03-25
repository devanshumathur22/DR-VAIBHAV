"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroVocal() {
    const [open, setOpen] = useState<string | null>("expertise");
    const faqs = [
  {
    q: "What is Vocal Cord Botox treatment?",
    a: "Vocal Cord Botox is a medical procedure where a small amount of Botox is injected into the vocal cords to relax tight or spasming muscles. It helps improve voice quality, especially in conditions like spasmodic dysphonia.",
  },
  {
    q: "What is Vocal Cord Botox?",
    a: "Vocal Cord Botox refers to the use of botulinum toxin injections to treat voice disorders caused by abnormal muscle activity. It helps restore smoother and more stable voice production.",
  },
  {
    q: "Where can I get Vocal Cord Botox in Jaipur?",
    a: "You can get Vocal Cord Botox treatment in Jaipur at specialized hospitals like Narayana Multispeciality Hospital, where experienced doctors like Dr. Vaibhav Mathur provide advanced care.",
  },
  {
    q: "Is Vocal Cord Botox available in Rajasthan?",
    a: "Yes, Vocal Cord Botox treatment is available in Rajasthan, especially in Jaipur, where advanced facilities and experienced specialists offer this procedure.",
  },
  {
    q: "Who is the best vocal cord doctor in Jaipur / Rajasthan?",
    a: "Dr. Vaibhav Mathur is considered one of the best specialists for vocal cord disorders in Jaipur and Rajasthan, known for expertise in Botox treatment and movement disorders.",
  },
  {
    q: "How does Botox treatment for voice disorder work?",
    a: "Botox works by relaxing overactive vocal cord muscles. This reduces spasms and allows the vocal cords to vibrate more normally, improving voice clarity and stability.",
  },
  {
    q: "Is Botox effective for spasmodic dysphonia?",
    a: "Yes, Botox is the most effective and widely accepted treatment for spasmodic dysphonia. It significantly reduces symptoms and improves voice quality.",
  },
  {
    q: "Who needs Vocal Cord Botox?",
    a: "Patients suffering from voice breaks, spasmodic dysphonia, vocal tremors, or severe voice strain that does not improve with medication may benefit from Vocal Cord Botox.",
  },
  {
    q: "Is the Vocal Cord Botox procedure painful?",
    a: "The procedure is minimally invasive and usually well tolerated. Some patients may feel mild discomfort, but it is generally quick and safe.",
  },
  {
    q: "Who performs Vocal Cord Botox at Narayana Hospital?",
    a: "At Narayana Multispeciality Hospital, Vocal Cord Botox procedures are performed by experienced specialists like Dr. Vaibhav Mathur, ensuring safe and effective treatment.",
  },
];
  return (
    <>
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <div>

          {/* TAG */}
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-teal-700 bg-teal-100 rounded-full">
            Advanced Voice Treatment
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
            For the{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              First Time in Rajasthan
            </span>
          </h1>

          {/* SUB TEXT */}
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            <span className="font-semibold text-red-500">
              Dr. Vaibhav Mathur
            </span>{" "}
            successfully performed Vocal Cord Botox treatment,
            bringing new hope to patients with voice disorders.
          </p>

          {/* DOCTOR INFO CARD */}
          <div className="mt-8 p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-md">
            <h3 className="text-xl font-semibold text-teal-700">
              Dr. Vaibhav Mathur
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              MBBS, MD Medicine (Gold Medalist)
            </p>
            <p className="text-sm text-slate-600">
              Consultant Neurophysician & Movement Disorders Specialist
            </p>
            <p className="text-sm text-slate-500">
              Narayana Multispeciality Hospital, Jaipur
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* IMAGE CARD */}
          <div className="relative p-3 rounded-3xl bg-white shadow-xl border border-slate-200">

            <Image
              src="/doctor.png"
              alt="Doctor"
              width={380}
              height={420}
              className="rounded-2xl object-cover"
            />

            {/* FLOAT CARD */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl p-4 border border-slate-200">
              <p className="text-sm text-slate-500">Experience</p>
              <p className="text-lg font-semibold text-teal-600">14+ Years</p>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section className="py-24 md:py-28 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
        What is Vocal Cord Botox ?
      </h2>

      {/* DESCRIPTION */}
      <p className="text-slate-600 leading-relaxed text-lg mb-8">
        <span className="font-semibold text-slate-900">
          Vocal cord Botox
        </span>{" "}
        is a specialized medical procedure where Botulinum toxin (Botox) is injected
        into the muscles of the vocal cords (voice box). It is mainly used to treat
        conditions where the vocal cord muscles tighten or spasm uncontrollably,
        particularly Spasmodic Dysphonia, a neurological voice disorder.
      </p>

      {/* SUB HEADING */}
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        Benefits of Vocal Cord Botox
      </h3>

      {/* LIST */}
      <ul className="space-y-4 text-slate-600 text-lg">

        {[
          "Reduces involuntary vocal cord spasms",
          "Improves voice clarity and smoothness",
          "Reduces effort and strain while speaking",
          "Helps patients speak longer and more naturally",
          "Offers significant improvement in quality of life",
          "Minimally invasive with quick recovery",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">

            {/* NUMBER */}
            <span className="text-teal-600 font-semibold">
              {i + 1}.
            </span>

            {/* TEXT */}
            <span>{item}</span>

          </li>
        ))}

      </ul>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">

      <div className="relative group">

        <Image
          src="/17.png"
          alt="Vocal Cord Botox"
          width={420}
          height={420}
          className="rounded-3xl shadow-lg object-cover transition duration-300 group-hover:scale-105"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

      </div>

    </div>

  </div>
</section>

<section className="py-24 md:py-28 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8">
      Vocal Cord Botox in Jaipur | Rajasthan
    </h2>

    {/* PARA 1 */}
    <p className="text-slate-600 text-lg leading-relaxed mb-6">
      <span className="font-semibold text-slate-900">
        For the first time in Rajasthan,
      </span>{" "}
      <span className="font-semibold text-teal-600">
        Dr. Vaibhav Mathur
      </span>{" "}
      successfully performed{" "}
      <span className="font-semibold text-teal-600">
        Vocal Cord Botox treatment
      </span>, giving new hope to patients suffering from severe voice loss and breathing difficulty.
      One such patient,{" "}
      <span className="font-semibold text-slate-900">
        Shanti Devi
      </span>, had been unable to speak for months and struggled even to breathe properly.
      After receiving the externally-guided neck Botox injection, her vocal cord mobility
      improved dramatically, allowing her to speak again confidently.
    </p>

    {/* PARA 2 */}
    <p className="text-slate-600 text-lg leading-relaxed">
      This breakthrough procedure by{" "}
      <span className="font-semibold text-teal-600">
        Dr. Vaibhav Mathur
      </span>{" "}
      proves how{" "}
      <span className="font-semibold text-teal-600">
        Vocal Cord Botox in Jaipur
      </span>{" "}
      can restore not just the voice, but also a person’s identity, confidence,
      and quality of life.
    </p>

  </div>
</section>

<section className="py-24 md:py-28 bg-gradient-to-r from-teal-800 to-cyan-700 text-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-6 leading-tight">
        Best Vocal Cord Treatment Hospital in Jaipur
      </h2>

      {/* TEXT */}
      <p className="text-white/90 text-lg leading-relaxed">
        Narayana Hospital offers advanced Vocal Cord Botox treatment for patients facing voice disorders
        and spasmodic dysphonia. Under the expertise of{" "}
        <span className="font-semibold text-white">
          Dr. Vaibhav Mathur
        </span>, the procedure helps restore vocal cord mobility and significantly improves voice quality.
        Using state-of-the-art technology and precise injection techniques, patients receive safe,
        effective, and personalized care. With accurate diagnosis and long-lasting results,
        Narayana Hospital and Dr. Mathur have become trusted names for Vocal Cord Botox therapy in Rajasthan.
      </p>

    </div>

    {/* RIGHT QUOTE */}
    <div className="relative">

      {/* QUOTE ICON */}
      <span className="absolute -top-6 left-0 text-6xl text-white/30">
        “
      </span>

      {/* TEXT */}
      <p className="text-2xl md:text-4xl leading-relaxed font-light text-white/90 pl-6">
        For the first time in Rajasthan, Dr. Vaibhav Mathur successfully performed
        Vocal Cord Botox treatment
      </p>

      {/* CLOSING QUOTE */}
      <span className="text-6xl text-white/30 ml-2">”</span>

    </div>

  </div>
</section>

<section className="py-24 md:py-28 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 mb-8">
      Botox Treatment For Voice Disorder
    </h2>

    {/* TEXT */}
    <p className="text-slate-600 text-lg leading-relaxed">
      Looking for a{" "}
      <span className="font-semibold text-slate-900">
        vocal cord doctor in Jaipur or Rajasthan?
      </span>{" "}
      <span className="font-semibold text-teal-600">
        Dr. Vaibhav Mathur
      </span>{" "}
      offers advanced{" "}
      <span className="font-semibold text-teal-600">
        Botox treatment for voice disorders
      </span>, including spasmodic dysphonia and vocal cord spasms.
      This minimally invasive procedure relaxes overactive vocal muscles, helping patients regain
      a smooth, clear, and stable voice. With expert precision and personalised care,
      <span className="font-semibold text-teal-600">
        {" "}Dr. Mathur
      </span>{" "}
      provides long-lasting relief and improved voice quality.
      His expertise makes him one of the most trusted specialists for vocal cord treatment in the region.
    </p>

  </div>
</section>

<section className="py-24 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 text-center mb-16">
          Best Doctor For Vocal Cord Treatment In Jaipur
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative">

            <Image
              src="/doctor.png"
              alt="Doctor"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
            />

            {/* YELLOW CARD */}
            <div className="absolute bottom-0 left-0 w-full bg-yellow-300 p-6 rounded-b-2xl">
              <h3 className="text-2xl font-semibold text-slate-900">
                Dr. VAIBHAV MATHUR
              </h3>
              <p className="text-sm text-slate-800 mt-1">
                MBBS, MD Medicine (Gold Medalist)
              </p>
              <p className="text-sm text-slate-800">
                Consultant Neurophysician and Movement Disorders Specialist
              </p>
              <p className="text-sm text-slate-800">
                Narayana Multispeciality Hospital, Jaipur
              </p>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-gradient-to-br from-teal-800 to-cyan-700 text-white p-8 rounded-2xl">

            {/* DESCRIPTION */}
            <p className="text-white/90 leading-relaxed mb-8">
              Dr Vaibhav Mathur is an immensely qualified neurologist in Jaipur.
              He has expertise in treating movement disorders and advanced therapies
              including Botox and Deep Brain Stimulation.
            </p>

            {/* ACCORDION */}
            {[
              {
                key: "expertise",
                title: "Fields of Expertise",
                content: [
                  "Stroke Thrombolysis",
                  "Stroke Rehabilitation",
                  "Epilepsy medical care",
                  "Parkinsonism & Movement Disorders",
                ],
              },
              {
                key: "awards",
                title: "Awards & Recognition",
                content: ["International conferences", "Best neuroscience paper award"],
              },
              {
                key: "membership",
                title: "Professional Memberships & Certifications",
                content: ["MDS Member", "IMA Member"],
              },
            ].map((item) => (
              <div key={item.key} className="border border-white/20 rounded-xl mb-4 overflow-hidden">

                <button
                  onClick={() => setOpen(open === item.key ? null : item.key)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  {item.title}
                  <ChevronDown
                    className={`transition ${open === item.key ? "rotate-180" : ""}`}
                  />
                </button>

                {open === item.key && (
                  <div className="px-4 pb-4 space-y-2 text-white/90">
                    {item.content.map((c, i) => (
                      <p key={i}>✓ {c}</p>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>

    <section className="py-24 md:py-10 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-8">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8 leading-tight">
      Botox for Spasmodic Dysphonia
    </h2>

    {/* PARA 1 */}
    <p className="text-slate-600 text-lg leading-relaxed mb-6">
      <span className="font-semibold text-teal-600">
        Botox
      </span>{" "}
      is the most effective and widely used treatment for{" "}
      <span className="font-semibold text-slate-900">
        spasmodic dysphonia
      </span>, a voice disorder caused by involuntary spasms of the vocal cord muscles.
      In this condition, the muscles tighten unpredictably, causing the voice to break,
      strain, or sound shaky. Botox works by gently relaxing these overactive muscles
      so the vocal cords can vibrate normally and produce a smoother, more stable voice.
    </p>

    {/* PARA 2 */}
    <p className="text-slate-600 text-lg leading-relaxed">
      Botox has become the{" "}
      <span className="font-semibold text-slate-900">
        gold-standard treatment
      </span>{" "}
      for spasmodic dysphonia because it significantly reduces voice spasms,
      improves clarity, and enhances overall communication.
      With regular follow-up injections, most patients experience long-term voice stability
      and a major improvement in quality of life.
    </p>

  </div>
</section>

<section className="py-6 md:py-2 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-8">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8 leading-tight">
      Vocal Cord Treatment in Jaipur | Rajasthan
    </h2>

    {/* TEXT */}
    <p className="text-slate-600 text-lg leading-relaxed">
      In case you have symptoms such as{" "}
      <span className="font-semibold text-slate-900">
        hoarseness, a strained voice, voice breaks, throat discomfort, or reduced voice clarity
      </span>,{" "}
      <span className="font-semibold text-teal-600">
        Vocal Cord Treatment in Jaipur | Rajasthan
      </span>{" "}
      is equipped with state-of-the-art technologies to help you out.
      Just to name a few,{" "}
      <span className="font-semibold text-teal-600">
        Dr. Vaibhav Mathur
      </span>{" "}
      is the one who gets the maximum credit for his thorough diagnostic and therapeutic skills
      in the field of voice disorders.
    </p>

  </div>
</section>

<section className="py-24 md:py-10 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-8">

    {/* HEADING */}
    <h2 className="text-4xl md:text-3xl font-semibold text-teal-600 mb-6 leading-tight">
      Vocal Cord Botox Cost In Jaipur | Vocal Cord Treatment Cost In Jaipur
    </h2>

    {/* DESCRIPTION */}
    <p className="text-slate-600 text-lg leading-relaxed mb-10">
      Vocal cord Botox is an advanced treatment commonly used for conditions like spasmodic dysphonia,
      vocal tremor, voice breaks, and chronic voice strain. It helps relax overactive vocal muscles
      and improves voice quality. In Jaipur, this treatment is performed by trained ENT specialists
      and voice disorder experts.
    </p>

    {/* TABLE */}
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mb-6">
      <table className="w-full text-left border-collapse">

        {/* HEADER */}
        <thead className="bg-teal-700 text-white">
          <tr>
            <th className="p-4 font-medium">Procedure</th>
            <th className="p-4 font-medium">Approx. Cost (Jaipur)</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="text-slate-700">

          <tr className="border-b">
            <td className="p-4">Vocal Cord Botox Injection (Per Session)</td>
            <td className="p-4 font-medium">₹18,000 – ₹35,000</td>
          </tr>

          <tr className="border-b bg-slate-50">
            <td className="p-4">Complete Voice Assessment + Laryngoscopy</td>
            <td className="p-4 font-medium">₹1,500 – ₹4,000</td>
          </tr>

          <tr>
            <td className="p-4">Advanced Voice Therapy (If Required)</td>
            <td className="p-4 font-medium">₹1,000 – ₹2,500 per session</td>
          </tr>

        </tbody>

      </table>
    </div>

    {/* NOTE */}
    <p className="text-sm text-slate-500 mb-12">
      <span className="font-semibold text-slate-700">Note:</span> Prices may vary depending on Botox brand, dosage, and hospital.
    </p>

    {/* RAJASTHAN SECTION */}
    <h3 className="text-3xl md:text-4xl font-semibold text-teal-600 mb-4">
      Vocal Cord Botox Cost In Rajasthan
    </h3>

    <p className="text-slate-600 text-lg leading-relaxed">
      Across Rajasthan, the cost of Vocal Cord Botox generally falls within{" "}
      <span className="font-semibold text-slate-900">
        ₹20,000 – ₹48,000
      </span>.
      Jaipur is considered the most trusted city for this procedure due to advanced
      equipment and skilled specialists.
    </p>

  </div>
</section>

<section className="py-24 md:py-10 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-8">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 mb-6">
      Vocal Cord Botox Cost In India
    </h2>

    {/* SUBTEXT */}
    <p className="text-slate-600 text-lg leading-relaxed mb-8">
      In India, the treatment cost ranges between{" "}
      <span className="font-semibold text-slate-900">
        ₹25,000 to ₹60,000
      </span>, depending on:
    </p>

    {/* LIST */}
    <ul className="space-y-4 mb-10 text-slate-600 text-lg">

      {[
        "City",
        "Hospital reputation",
        "Specialist expertise",
        "Required follow-up sessions",
      ].map((item, i) => (
        <li key={i} className="flex items-center gap-3">

          {/* NUMBER */}
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 font-semibold text-sm">
            {i + 1}
          </span>

          {/* TEXT */}
          <span>{item}</span>

        </li>
      ))}

    </ul>

    {/* LAST LINE */}
    <p className="text-slate-600 text-lg leading-relaxed">
      Compared to big cities like{" "}
      <span className="font-semibold text-slate-900">
        Delhi, Mumbai, or Bengaluru
      </span>, Jaipur offers the same advanced care at more affordable prices.
    </p>

  </div>
</section>

     <section className="py-24 md:py-28 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-8">

    <h2 className="text-4xl md:text-3xl font-semibold text-teal-600 mb-6 leading-tight">
      Frequently Asked Questions
    </h2>

    {/* BORDER WRAPPER */}
    <div className="border border-slate-200 rounded-2xl p-6 md:p-8">

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-slate-200 pb-4 last:border-none">
            
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              {faq.q}
            </h3>

            <p className="text-slate-600">
              {faq.a}
            </p>

          </div>
        ))}
      </div>

    </div>

  </div>
</section>
    </>
  );
}