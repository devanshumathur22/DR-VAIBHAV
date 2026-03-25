"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function BrainPacemaker() {
   const [open, setOpen] = useState("expertise");
    const sections = [
    {
      key: "expertise",
      title: "Fields of Expertise",
      content: [
        "Stroke Thrombolysis",
        "Stroke Rehabilitation",
        "Epilepsy medical care",
        "Parkinsonism & Movement Disorders (Tremors, Dystonia, Myoclonus)",
        "Botulinum injections (Routine & EMG-guided)",
        "Deep Brain Stimulation (DBS) planning and programming",
      ],
    },
    {
      key: "awards",
      title: "Awards & Recognition",
      content: [
        "Gold Medalist in MD Medicine",
        "Multiple national & international publications",
      ],
    },
    {
      key: "membership",
      title: "Professional Memberships & Certifications",
      content: [
        "Member of Neurological Society of India",
        "Certified in Advanced DBS Programming",
      ],
    },
  ];
  const faqs = [
  {
    q: "What is Deep Brain Stimulation (DBS) for Parkinson’s disease?",
    a: "Deep Brain Stimulation (DBS) is an advanced neurological procedure where a small device (brain pacemaker) sends controlled electrical signals to specific brain areas like STN or GPi. It helps reduce tremors, stiffness, and involuntary movements, improving mobility and quality of life."
  },
  {
    q: "Who is a good candidate for DBS?",
    a: "Patients with Parkinson’s disease who do not respond well to medications, experience severe tremors, stiffness, or movement fluctuations are good candidates. A detailed neurological evaluation is required before deciding DBS suitability."
  },
  {
    q: "How does DBS help Parkinson’s symptoms?",
    a: "DBS regulates abnormal brain signals responsible for Parkinson’s symptoms. It helps reduce tremors, improve movement speed, decrease stiffness, and enhances overall daily functioning."
  },
  {
    q: "Is DBS a safe procedure?",
    a: "Yes, DBS is considered a safe and well-established procedure when performed by experienced neurosurgeons. Like any surgery, there are minimal risks, but complications are rare with proper care."
  },
  {
    q: "How long do DBS results last?",
    a: "DBS provides long-term symptom control. Benefits can last for many years, although adjustments in device settings and medications may be needed over time."
  },
  {
    q: "What is the cost of a Brain Pacemaker in Jaipur?",
    a: "The cost of Brain Pacemaker (DBS) in Jaipur typically ranges from ₹6,50,000 to ₹12,00,000, depending on the hospital, device type, and surgeon expertise."
  },
  {
    q: "Who is the best doctor for Brain Pacemaker (DBS) surgery in Jaipur?",
    a: "Dr. Vaibhav Mathur is one of the leading neurologists in Jaipur, known for expertise in movement disorders and advanced treatments like Deep Brain Stimulation (DBS)."
  },
  {
    q: "Is DBS surgery safe?",
    a: "Yes, DBS surgery is generally safe with high success rates when performed at advanced medical centers by experienced specialists. Proper patient selection further improves safety."
  },
  {
    q: "How long does a Brain Pacemaker last?",
    a: "The battery of a brain pacemaker typically lasts 3 to 5 years for non-rechargeable devices and up to 10–15 years for rechargeable systems, depending on usage."
  },
  {
    q: "Is Brain Pacemaker surgery available in all hospitals in Jaipur?",
    a: "No, DBS surgery is available only in specialized hospitals with advanced neurosurgical facilities and experienced teams. It is important to choose a well-equipped center."
  }
];

  return (
    <>  
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-cyan-50 to-white">

      {/* BG pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')] bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-3 items-center gap-8">

        {/* LEFT DOCTOR */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/doctor.png"
          
            alt="Doctor"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="text-center md:text-left">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-teal-600">BRAIN</span>{" "}
            <span className="text-red-500">PACEMAKER</span>
          </h1>

          {/* SUB */}
          <p className="text-xl md:text-2xl font-medium text-slate-800 mt-2">
            for Parkinson's & Tremors
          </p>

          {/* TAGLINE */}
          <p className="mt-4 inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-lg font-medium">
            Restoring movement. Renewing life.
          </p>

          {/* DOCTOR INFO */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-teal-700">
              Dr. Vaibhav Mathur
            </h3>

            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              MBBS, MD Medicine (Gold Medalist)
              <br />
              Consultant Neurophysician and Movement Disorders Specialist
              <br />
              Narayana Multispeciality Hospital, Jaipur
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/14.png"
            alt="Patient"
            width={350}
            height={400}
            className="object-contain"
          />
        </div>

      </div>

    </section>

    <section className="py-24 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
        What is Brain Pacemaker (DBS)
      </h2>

      {/* DESCRIPTION */}
      <p className="text-slate-600 text-lg leading-relaxed mb-8">
        A Brain Pacemaker, also known as{" "}
        <span className="font-semibold text-teal-600">
          Deep Brain Stimulation (DBS)
        </span>, is an advanced neurological treatment used to control symptoms of Parkinson’s disease,
        tremors, and movement disorders. In this procedure, a small device delivers controlled electrical
        signals to specific brain areas, improving movement, reducing stiffness, and enhancing daily function.
        DBS offers long-term relief when medications stop working effectively.
      </p>

      {/* BENEFITS */}
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">
        Brain Pacemaker (DBS) Benefits
      </h3>

      <ul className="space-y-3 text-slate-600">

        {[
          "Reduces tremors and shaking caused by Parkinson’s disease",
          "Decreases stiffness and muscle rigidity",
          "Improves slow movements and overall mobility",
          "Enhances daily functioning like writing, eating, and walking",
          "Reduces dependence on medication and side effects",
          "Provides long-term symptom control",
          "Improves balance and coordination",
          "Boosts quality of life and independence",
          "Adjustable and reversible treatment option",
          "Helps patients return to normal routine with confidence",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">

            {/* BULLET */}
            <span className="mt-2 w-2 h-2 bg-teal-600 rounded-full"></span>

            {/* TEXT */}
            <span>
              <span className="font-semibold text-slate-800">
                {item.split(" ")[0]}
              </span>{" "}
              {item.split(" ").slice(1).join(" ")}
            </span>

          </li>
        ))}

      </ul>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/15.png"
        alt="Brain Pacemaker DBS"
        className="rounded-2xl shadow-lg w-full max-w-md object-cover"
      />
    </div>

  </div>
</section>

<section className="py-24 md:py-6 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">

    {/* HEADING */}
    <h2 className="text-2xl md:text-5xl font-semibold text-teal-600 mb-8 leading-tight">
      Brain Pacemaker (DBS) Treatment In Jaipur
    </h2>

    {/* TEXT */}
    <p className="text-slate-600 text-lg leading-relaxed">
      Brain Pacemaker, also known as{" "}
      <span className="font-semibold text-slate-900">
        Deep Brain Stimulation (DBS)
      </span>, has become a life-changing treatment in Jaipur under the expert guidance of{" "}
      <span className="font-semibold text-teal-600">
        Dr. Vaibhav Mathur
      </span>. DBS sends controlled electrical signals to specific areas of the brain,
      helping manage Parkinson’s disease symptoms such as tremors, stiffness, and slow movement.
      Many patients who struggled with simple tasks like buttoning a shirt, holding a cup,
      or even walking are now regaining independence and returning to normal life.
      Over the past year,{" "}
      <span className="font-semibold text-slate-900">
        Dr. Mathur has successfully performed 11 DBS procedures
      </span>{" "}
      in Jaipur, offering new hope to patients with severe movement disorders.
    </p>

  </div>
</section>

<section className="py-24 md:py-28 bg-gradient-to-r from-teal-800 to-cyan-700 text-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-6 leading-tight">
        Brain Pacemaker Treatment Hospital in Jaipur
      </h2>

      {/* TEXT */}
      <p className="text-white/90 text-lg leading-relaxed">
        Narayana Hospital offers advanced Brain Pacemaker (DBS) treatment for Parkinson’s disease
        and severe movement disorders. Under the expertise of{" "}
        <span className="font-semibold text-white">
          Dr. Vaibhav Mathur
        </span>, DBS delivers precise electrical signals to specific brain areas,
        reducing tremors, stiffness, and slow movements. This innovative procedure helps patients
        regain independence, improve mobility, and return to a better quality of life
        in Jaipur and Rajasthan.
      </p>

    </div>

    {/* RIGHT QUOTE */}
    <div className="relative">

      {/* OPEN QUOTE */}
      <span className="absolute -top-6 left-0 text-6xl text-white/30">
        “
      </span>

      {/* TEXT */}
      <p className="text-xl md:text-2xl leading-relaxed font-light text-white/90 pl-6">
        A Brain Pacemaker provides steady electrical signals to improve movement and reduce Parkinson’s symptoms effectively.
      </p>

      {/* CLOSE QUOTE */}
      <span className="text-6xl text-white/30 ml-2">”</span>

    </div>

  </div>
</section>

<section className="py-24 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div className="flex justify-center md:justify-start">
      <img
        src="/16.png"
        alt="DBS Parkinson Treatment"
        className="rounded-2xl shadow-md w-full max-w-md object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 mb-6 leading-tight">
        DBS For Parkinson's Disease
      </h2>

      {/* PARA 1 */}
      <p className="text-slate-600 text-lg leading-relaxed mb-6">
        <span className="font-semibold text-slate-900">
          Deep Brain Stimulation (DBS)
        </span>{" "}
        is one of the most advanced treatments available for Parkinson’s disease,
        particularly for patients whose symptoms no longer respond well to medications.
        In DBS, a Brain Pacemaker sends finely controlled electrical signals to specific
        areas of the brain such as the{" "}
        <span className="font-semibold text-teal-600">
          STN (Subthalamic Nucleus)
        </span>{" "}
        or{" "}
        <span className="font-semibold text-teal-600">
          GPi (Globus Pallidus Internus)
        </span>.
        These signals help reduce tremors, stiffness, slowness, imbalance,
        and involuntary movements (dyskinesia).
      </p>

      {/* PARA 2 */}
      <p className="text-slate-600 text-lg leading-relaxed">
        Under the expert care of{" "}
        <span className="font-semibold text-teal-600">
          Dr. Vaibhav Mathur
        </span>, patients receive accurate evaluation, precise electrode placement,
        and customized DBS programming. Many individuals regain the ability to walk,
        write, eat, and perform daily activities independently.
        DBS offers long-term symptom control and significantly improves overall quality of life.
      </p>

    </div>

  </div>
</section>

<section className="py-24 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 text-center mb-16">
          Brain Pacemaker Doctor In Jaipur
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative">

            <Image
              src="/doctor.png"
              alt="Dr Vaibhav Mathur"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
            />

            {/* YELLOW CARD */}
            <div className="absolute bottom-0 left-0 w-full bg-yellow-400 p-6 rounded-b-2xl">
              <h3 className="text-2xl font-semibold text-slate-900">
                Dr. VAIBHAV MATHUR
              </h3>
              <p className="text-sm text-slate-800 mt-1">
                MBBS, MD Medicine (Gold Medalist)
              </p>
              <p className="text-sm text-slate-800">
                Consultant Neurophysician & Movement Disorders Specialist
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
              Dr Vaibhav Mathur is a highly skilled neurologist in Jaipur specializing in
              movement disorders and Brain Pacemaker (DBS) treatment. He is a Gold Medalist
              and has received advanced training from prestigious institutes like SMS Medical College
              and Jaslok Hospital. With extensive experience in Parkinson’s disease and neurological
              disorders, he provides precise diagnosis and advanced treatment solutions.
            </p>

            {/* ACCORDION */}
            {sections.map((item) => (
              <div key={item.key} className="border border-white/20 rounded-xl mb-4 overflow-hidden">

                <button
                  onClick={() => setOpen(open === item.key ? "" : item.key)}
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

    <section className="py-24 md:py-28 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6 md:px-8">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 mb-6">
      Brain Pacemaker Cost In Jaipur
    </h2>

    {/* DESC */}
    <p className="text-slate-600 leading-relaxed mb-10 max-w-4xl">
      Brain Pacemaker (Deep Brain Stimulation – DBS) cost in Jaipur depends on
      device brand, hospital infrastructure, and surgeon expertise. Under expert
      care, patients receive advanced DBS treatment with high success rates and
      long-term benefits.
    </p>

    {/* CARD */}
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">

      {/* HEADER */}
      <div className="grid md:grid-cols-2 bg-gradient-to-r from-teal-700 to-cyan-700 text-white">
        <div className="p-5 font-semibold text-lg border-r border-white/20">
          Surgery Type
        </div>
        <div className="p-5 font-semibold text-lg">
          Deep Brain Stimulation (DBS)
        </div>
      </div>

      {/* ROW 1 */}
      <div className="grid md:grid-cols-2 border-t border-slate-200">
        <div className="p-5 font-medium text-slate-700 bg-white">
          Starting Price
        </div>
        <div className="p-5 text-slate-600 bg-slate-50">
          ₹1,50,000 – ₹2,20,000
          <span className="block text-sm text-slate-500 mt-1">
            Initial assessment & test stimulation
          </span>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid md:grid-cols-2 border-t border-slate-200">
        <div className="p-5 font-medium text-slate-700 bg-white">
          Average Cost
        </div>
        <div className="p-5 text-slate-600 bg-slate-50">
          ₹6,50,000 – ₹12,00,000
          <span className="block text-sm text-slate-500 mt-1">
            Complete DBS implantation
          </span>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="grid md:grid-cols-2 border-t border-slate-200">
        <div className="p-5 font-medium text-slate-700 bg-white">
          Maximum Cost
        </div>
        <div className="p-5 text-slate-600 bg-slate-50">
          Up to ₹18,00,000+
          <span className="block text-sm text-slate-500 mt-1">
            Depends on device & hospital setup
          </span>
        </div>
      </div>

    </div>

  </div>
</section>

<section className="py-24 md:py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-8">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 mb-6">
      Brain Pacemaker Cost In India
    </h2>

    {/* DESC */}
    <p className="text-slate-600 leading-relaxed mb-10 max-w-4xl">
      Brain Pacemaker (Deep Brain Stimulation – DBS) surgery in India is more
      affordable compared to Western countries. Costs vary depending on city,
      hospital infrastructure, and device technology. Patients receive advanced
      neurological care with high success rates.
    </p>

    {/* CARD */}
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">

      {/* HEADER */}
      <div className="grid md:grid-cols-2 bg-gradient-to-r from-teal-700 to-cyan-700 text-white">
        <div className="p-5 font-semibold text-lg border-r border-white/20">
          Procedure Stage
        </div>
        <div className="p-5 font-semibold text-lg">
          Estimated Cost in India
        </div>
      </div>

      {/* ROW 1 */}
      <div className="grid md:grid-cols-2 border-t border-slate-200">
        <div className="p-5 font-medium text-slate-700 bg-white">
          Starting Price
        </div>
        <div className="p-5 text-slate-600 bg-slate-50">
          ₹1,20,000 – ₹2,00,000
          <span className="block text-sm text-slate-500 mt-1">
            Evaluation & test stimulation
          </span>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid md:grid-cols-2 border-t border-slate-200">
        <div className="p-5 font-medium text-slate-700 bg-white">
          Average Treatment Cost
        </div>
        <div className="p-5 text-slate-600 bg-slate-50">
          ₹6,00,000 – ₹14,00,000
          <span className="block text-sm text-slate-500 mt-1">
            Complete DBS surgery
          </span>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="grid md:grid-cols-2 border-t border-slate-200">
        <div className="p-5 font-medium text-slate-700 bg-white">
          Maximum Cost
        </div>
        <div className="p-5 text-slate-600 bg-slate-50">
          ₹20,00,000+
          <span className="block text-sm text-slate-500 mt-1">
            High-end international devices
          </span>
        </div>
      </div>

    </div>

  </div>
</section>

<section className="py-24 md:py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    <h2 className="text-4xl md:text-5xl font-semibold text-teal-600 mb-6">
      Frequently Asked Questions (FAQs)
    </h2>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="p-5 font-semibold text-slate-700 bg-white">
            {faq.q}
          </div>
          <div className="p-5 text-slate-600 bg-slate-50">
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}