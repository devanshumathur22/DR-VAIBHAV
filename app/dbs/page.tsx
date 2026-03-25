"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  UserRound,
  BadgeCheck,
  Brain,
  Award,
} from "lucide-react";
import {
  Pill,
  FlaskConical,
  AlertTriangle,
  Hand,
  PersonStanding,
} from "lucide-react";


export default function DBSPage() {
const [open, setOpen] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [index, setIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  
  const videos = [
  "https://youtu.be/sZ-_zpxAeq8?si=jIdMIh539qyi_o-s",
  "https://youtu.be/eY-SVfgFnUo?si=cxVCvyNnCk1nMRs3",
  "https://youtu.be/UuCE5vo3ZFA?si=-rWqlqLGQz8iPn6t",
];

const news = [
 "/1.jpg",
 "/2.jpg",
 "/8.jpg",
 "/4.jpg",
 "/5.jpg",
 "/6.jpg",
 "/7.jpg",
 "/9.jpg",
 "/3.jpg",


];

const getVideoId = (url: string): string => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\n?#]+)/
  );
  return match ? match[1] : "";
};

  const [readMore, setReadMore] = useState(false);
  const faqs = [
    {
      q: "What is Deep Brain Stimulation (DBS)?",
      a: "Deep Brain Stimulation (DBS) is a procedure that involves implanting an electrode deep within the brain. Recently, the Subthalamic Nucleus (STN) has become the preferred target for DBS in treating Parkinson’s disease. The electrode, once implanted, remains in place permanently and is connected to a small implantable pulse generator (IPG). This pacemaker-like device, which can be programmed remotely, delivers tiny pulses of energy through the electrode to disrupt the abnormal brain activity responsible for Parkinson’s disease symptoms."
    },

    {
      q: "What are the benefits of surgery?",
      a: "functional without the side effects of medication, such as slowness or freezing. Typically, the ON period increases to 70-80% of the day, with the remaining OFF periods being less severe than before the surgery. Additional benefits include reduced medication needs, relief from pain and hallucinations, and a decrease in troublesome dyskinesia. Terms and conditions apply."
    },
    {
      q: "Who needs DBS?",
      a: "DBS is used to treat conditions that impact the functioning of neurons, a crucial type of brain cell. When neurons aren’t functioning correctly, the abilities they control are affected. Depending on the severity of the issue, these abilities may be partially or entirely lost."

    },
    {
        q: "Why is DBS used ?",
        a: "The human brain contains billions of neurons that communicate through electrical and chemical signals. Certain brain conditions can reduce neuron activity, leading to impaired function in affected areas. DBS uses artificial electrical currents to stimulate these neurons, alleviating symptoms, though the exact mechanism remains unclear to researchers."
    },
        
  ];
  const stats = [
  {
    icon: UserRound,
    title: "1st",
    desc: "Rajasthan's First Movement\nDisorder Specialist",
  },
  {
    icon: BadgeCheck,
    title: "4+",
    desc: "Years of DBS Experience",
  },
  {
    icon: Brain,
    title: "100%",
    desc: "Success Rate",
  },
  {
    icon: Award,
    title: "25+",
    desc: "Awards",
  },
];

const data = [
  {
    icon: Pill,
    text: "Medications do not give adequate relief",
  },
  {
    icon: FlaskConical,
    text: "The response to medications is unpredictable",
  },
  {
    icon: AlertTriangle,
    text: "You suffer from medicine side effects",
  },
  {
    icon: Hand,
    text: "You suffer heavy tremors (Shakiness)",
  },
  {
    icon: PersonStanding,
    text: "You want to quit your job due to Parkinson’s",
  },
];



  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-teal-700 to-cyan-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              DBS is a{" "}
              <span className="text-yellow-300">life-changing</span> procedure
            </h1>

            <p className="mt-4 text-white/80">
              Advanced treatment for Parkinson’s & movement disorders
            </p>

            <div className="mt-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
              Successfully done in{" "}
              <span className="font-semibold text-yellow-300">
                Narayana Hospital, Jaipur
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/8.png"
              alt="Doctor"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
  <section className="py-16 border-b bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center">

        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`group px-6 py-8 flex flex-col items-center justify-center 
              transition-all duration-300 ease-in-out
              hover:bg-teal-50 hover:shadow-md hover:-translate-y-1
              ${i !== stats.length - 1 ? "md:border-r border-slate-200" : ""}`}
            >
              {/* Icon */}
              <Icon className="w-12 h-12 text-teal-600 mb-4 transition-transform duration-300 group-hover:scale-110" />

              {/* Title */}
              <h3 className="text-4xl font-semibold text-teal-600 transition-colors duration-300 group-hover:text-teal-700">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mt-2 text-sm whitespace-pre-line leading-relaxed transition-colors duration-300 group-hover:text-slate-800">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>

    {/* about */}
     <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Content */}
      <div>
        <h2 className="text-4xl font-semibold mb-4 text-slate-800">
          Best DBS Surgery in Jaipur
        </h2>

        <p className="text-slate-500 leading-relaxed">
          Deep Brain Stimulation (DBS) surgery is a highly advanced neurological
          technique used to treat movement disorders such as essential tremors,
          dystonia, and Parkinson's disease. It helps control abnormal brain
          activity and improves daily life.
        </p>

        {/* Read More Content */}
        {readMore && (
          <p className="text-slate-500 leading-relaxed mt-4">
            In this procedure, a tiny electrode delivers controlled electrical
            pulses to specific brain regions, reducing stiffness, tremors, and
            other symptoms that interfere with daily functioning.
            <br /><br />
            <span className="font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Dr. Vaibhav Mathur
            </span>{" "}
            is a top specialist at Narayana Hospital and is considered one of
            the best DBS surgery doctors in Jaipur. With modern technology and
            personalized care, he ensures high accuracy and the best possible
            outcomes for patients.
          </p>
        )}

        {/* Button */}
        <button
          onClick={() => setReadMore(!readMore)}
          className="mt-6 text-teal-600 font-medium hover:underline transition"
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Image */}
      <div className="relative group">
        <Image
          src="/6.png"
          alt="DBS Surgery"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg transition duration-300 group-hover:scale-105"
        />

        {/* Gradient Overlay Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>
      </div>
    </section>

      {/* HOSPITAL SECTION */}
  
    <section className="py-20 bg-gradient-to-r from-teal-700 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold text-yellow-400 mb-6">
            Narayana Hospital for DBS Surgery
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            Deep Brain Stimulation (DBS) is a revolutionary procedure for managing neurological disorders,
            offering hope and relief to patients and their families. At Narayana Hospital in Jaipur,{" "}
            <span className="font-semibold text-teal-200">
              Dr. Vaibhav Mathur
            </span>{" "}
            provides this life-changing treatment to improve the quality of life.
          </p>

          <p className="text-white/90 leading-relaxed mb-8">
            For patients with Parkinson’s Disease, DBS significantly reduces tremors, stiffness,
            and slow movement. This treatment restores independence and improves daily functioning.
          </p>

          <h3 className="text-3xl font-semibold mb-8">
            At Narayana Hospital, We have
          </h3>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row gap-10">
            
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white text-teal-700 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <p className="text-white/90">
                Consulted <br /> <span className="font-semibold">5,000 patients</span>
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white text-teal-700 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <p className="text-white/90">
                Recommended <br /> <span className="font-semibold">2,000 patients</span> <br />
                to go for a DBS surgery
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT QUOTE */}
        <div className="relative">
          <p className="text-xl md:text-4xl leading-relaxed font-light text-white/90">
            <span className="text-2xl absolute -top-6 -left-4 opacity-30">“</span>
            We are the only Centre in Asia to have two sets of equipment which includes stereotactic
            frames, planning stations, MRI and MER equipment.
            <span className="text-semibold opacity-30 ml-2">”</span>
          </p>
        </div>

      </div>
    </section>
    
      {/* CONDITIONS */}
      <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold text-teal-600 mb-14 tracking-wide">
          WHEN SHOULD YOU SURGERY FOR DBS?
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden rounded-2xl shadow-lg">
          
          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={`
                  group p-8 flex flex-col items-center text-center text-white
                  transition-all duration-300
                  hover:scale-105 hover:z-10
                  ${[
                    "bg-teal-700",
                    "bg-teal-600",
                    "bg-teal-500",
                    "bg-cyan-500",
                    "bg-cyan-400",
                  ][i]}
                `}
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-md transition group-hover:scale-110">
                  <Icon className="w-10 h-10 text-teal-600" />
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>


      {/* DOCTOR */}
     <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold text-teal-600 mb-16">
          MEET DR. VAIBHAV MATHUR, NEUROLOGIST
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <Image
              src="/13.png"
              alt="Dr Vaibhav Mathur"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl"
            />

            {/* Bottom Info Card */}
            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-tr-2xl w-full">
              <h3 className="text-2xl font-semibold">
                Dr. VAIBHAV MATHUR
              </h3>
              <p className="text-sm mt-1">
                MBBS, MD Medicine (Gold Medalist)
              </p>
              <p className="text-sm mt-1">
                Consultant Neurophysician and Movement Disorders Specialist
              </p>
              <p className="text-sm mt-1">
                Narayana Multispeciality Hospital, Jaipur
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Description */}
            <p className="text-slate-500 leading-relaxed">
              <span className="font-semibold text-teal-600">
                Dr Vaibhav Mathur
              </span>{" "}
              is an immensely qualified, competent, and skilled neurologist in Jaipur, Rajasthan.
              He is a merit scholar and Gold Medallist in MD General Medicine.
              He holds DM and DNB degrees in Neurology and has trained at SMS Medical College,
              Jaipur and Jaslok Hospital, Mumbai.
              <br /><br />
              He has 28 medical journal publications and has authored book chapters.
              He treats neurological disorders like Migraine, Stroke, Epilepsy, Dementia,
              Neuropathic pain, and Autoimmune disorders.
              <br /><br />
              He specializes in Parkinsonism and movement disorders like Tremors, Dystonia,
              Chorea, Ataxia, Restless leg syndrome, and drug-induced disorders.
            </p>

            {/* ACCORDIONS */}

            {/* Expertise */}
            <div className="mt-8 border rounded-xl overflow-hidden">
              <button
             onClick={() => setOpen(open === "expertise" ? null : "expertise")}   
                className="w-full flex justify-between items-center p-4 text-slate-800 font-medium"
              >
                Fields of Expertise
                <ChevronDown
                  className={`transition ${open === "expertise" ? "rotate-180" : ""}`}
                />
              </button>

              {open === "expertise" && (
                <div className="p-4 text-slate-500 space-y-2">
                  <p>✓ Stroke Thrombolysis</p>
                  <p>✓ Stroke Rehabilitation</p>
                  <p>✓ Epilepsy medical care</p>
                  <p>✓ Parkinsonism and Other Movement Disorders</p>
                  <p>✓ Pharmacotherapy & Botulinum injections</p>
                  <p>✓ Deep Brain Stimulation planning & programming</p>
                </div>
              )}
            </div>

            {/* Awards */}
            <div className="mt-4 border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === "awards" ? "" : "awards")}
                className="w-full flex justify-between items-center p-4 text-slate-800 font-medium"
              >
                Awards & Recognition
                <ChevronDown
                  className={`transition ${open === "awards" ? "rotate-180" : ""}`}
                />
              </button>

              {open === "awards" && (
                <div className="p-4 text-slate-500 space-y-2">
                  <p>Three Video presentations representing INDIA delivered at the International Movement disorder society conference held in Madrid, Spain, Sept’22</p>
                  <p>A book series namely “Diversity and Uniqueness in Neurological Disorders” published worldwide under own copyright, Part-1 released in Sept 2021.</p>
                  <p>Best Neurosciences paper award at Bombay Neurological Association (BNA) Conference 2022</p>
                  <p>National highest scorer of TYSA neurology quiz (Round 1), 2021</p>
                </div>
              )}
            </div>

            {/* Membership */}
            <div className="mt-4 border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === "membership" ? "" : "membership")}
                className="w-full flex justify-between items-center p-4 text-slate-800 font-medium"
              >
                Professional Memberships & Certifications
                <ChevronDown
                  className={`transition ${open === "membership" ? "rotate-180" : ""}`}
                />
              </button>

                {open === "membership" && ( 
                <div className="p-4 text-slate-500 space-y-2">
                  <p> ICH-GCS certification in Feb,2022. Sub-Investigator in PROSEEK Trial, 2022</p>
                  <p> American Academy of Continuing Medical Education (AACME) certification for NIHSS training</p>
                  <p> Cleveland clinic Certification on Neurology updates.</p>
                  <p>Member Of International Movement Disorders Society (MDS)</p>
                  <p> Member of Movement Disorders Society of India (MDSI)</p>
                  <p>Member of Indian Medical Association (IMA)</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* DBS Surgery */}
     <section className="py-20 bg-slate-50">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl font-semibold text-teal-600 mb-6">
      DBS Surgery In India
    </h2>

    {/* Description */}
    <p className="text-slate-500 leading-relaxed max-w-3xl mx-auto mb-12">
      <span className="font-semibold text-slate-800">
        DBS surgery in India
      </span>{" "}
      is an advanced and effective treatment for Parkinson’s disease,
      dystonia, and essential tremors.{" "}
      <span className="text-teal-600 font-semibold">
        Dr. Vaibhav Mathur
      </span>{" "}
      is known for providing high-precision{" "}
      <span className="font-semibold text-slate-800">
        Deep Brain Stimulation surgery in India
      </span>{" "}
      using advanced neuro-navigation technology.
      <br /><br />
      Patients seeking{" "}
      <span className="font-semibold text-slate-800">
        DBS treatment in Jaipur and across India
      </span>{" "}
      benefit from improved motor control, reduced symptoms, and better quality of life.
    </p>

    {/* Video Heading */}
    <h3 className="text-3xl font-semibold text-teal-600 mb-8">
      DBS SURGERY VIDEOS
    </h3>

    {/* Video */}
    <div className="relative group rounded-2xl overflow-hidden shadow-xl">

      <iframe
        className="w-full h-[250px] md:h-[450px] rounded-2xl"
        src="https://www.youtube.com/embed/6PiEIDL2MvU?autoplay=0"
        title="DBS Surgery Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Overlay Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
    </div>

  </div>
</section>
     
     {/* videos */}
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-center text-4xl font-semibold text-teal-600 mb-14">
      Patient Videos
    </h2>

    {/* Grid */}
   <div className="grid md:grid-cols-3 gap-10">

  {videos.map((url: string, i: number) => {
    const id = getVideoId(url);

    return (
      <div
        key={i}
        className="rounded-xl border-4 border-teal-600 overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2"
      >
        <iframe
          className="w-full h-[300px]"
          src={`https://www.youtube.com/embed/${id}`}
          title={`Patient Video ${i}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    );
  })}

</div>
  </div>
</section>

    {/* news */}
  <section className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-semibold text-teal-600 mb-12">
      NEWS & MEDIA
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      
      {news.map((img, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
        <Image
  src={img}
  alt="News"
  width={350}
  height={250}
  className="rounded-lg object-cover w-full h-[250px] hover:scale-105 transition duration-300"
/>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* COST */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* JAIPUR */}
        <h2 className="text-4xl font-semibold text-teal-600 mb-4">
          DBS Surgery Cost In Jaipur
        </h2>

        <p className="text-slate-500 leading-relaxed mb-6">
          The cost of{" "}
          <span className="font-semibold text-slate-800">
            DBS surgery (Deep Brain Stimulation) in Jaipur
          </span>{" "}
          varies based on device, hospital infrastructure, and patient condition.
          <span className="text-teal-600 font-semibold">
            {" "}Dr. Vaibhav Mathur
          </span>{" "}
          provides highly effective treatment for Parkinson’s disease, dystonia,
          epilepsy, and tremors.
        </p>

        {/* TABLE */}
        <div className="overflow-hidden rounded-xl shadow-md mb-12">
          <table className="w-full text-left border-collapse">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="p-4">Surgery Name</th>
                <th className="p-4">DBS Surgery (Deep Brain Stimulation)</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b">
                <td className="p-4">Starting Price (Approx.)</td>
                <td className="p-4">₹4,50,000 – ₹6,50,000</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="p-4">Average Cost Range</td>
                <td className="p-4">₹8,00,000 – ₹12,00,000</td>
              </tr>
              <tr>
                <td className="p-4">Maximum Cost</td>
                <td className="p-4">₹15,00,000+ (advanced DBS system)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RAJASTHAN */}
        <h2 className="text-4xl font-semibold text-teal-600 mb-4">
          DBS Surgery Cost In Rajasthan
        </h2>

        <p className="text-slate-500 leading-relaxed mb-6">
          Patients prefer{" "}
          <span className="text-teal-600 font-semibold">
            Dr. Vaibhav Mathur
          </span>{" "}
          for DBS surgery due to expertise in treating movement disorders.
          <span className="font-semibold text-slate-800">
            {" "}DBS surgery cost in Rajasthan
          </span>{" "}
          is more affordable compared to metro cities.
        </p>

        {/* TABLE */}
        <div className="overflow-hidden rounded-xl shadow-md mb-12">
          <table className="w-full text-left border-collapse">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="p-4">Surgery Name</th>
                <th className="p-4">DBS Surgery (Rajasthan)</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b">
                <td className="p-4">Starting Price (Approx.)</td>
                <td className="p-4">₹4,00,000 – ₹6,00,000</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="p-4">Average Cost Range</td>
                <td className="p-4">₹7,50,000 – ₹11,50,000</td>
              </tr>
              <tr>
                <td className="p-4">Maximum Cost</td>
                <td className="p-4">₹14,00,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* INDIA TEXT */}
     

<h2 className="text-4xl font-semibold text-teal-600 mb-4">
  DBS Surgery Cost In Rajasthan
</h2>

<p className="text-slate-500 leading-relaxed">
  The cost of DBS surgery in India is less than half of that in many Western countries, 
  making India a preferred destination for medical tourism. Under the expertise of{" "}
  <span className="text-teal-600 font-semibold">
    Dr. Vaibhav Mathur
  </span>, DBS surgery is performed using advanced technology at affordable costs. 
  Typically, the price for a DBS operation in India ranges between{" "}
  <span className="font-semibold text-slate-800">
    ₹7 lakh and ₹15 lakh
  </span>, depending on the hospital, city, and type of neurostimulator, while maintaining 
  world-class treatment standards.
</p>
</div>
    </section>
    
      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-10">
            FAQs
          </h2>

          {faqs.map((item, i) => (
            <div key={i} className="border-b border-white/20 py-4">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between w-full text-left"
              >
                {item.q}
                <ChevronDown />
              </button>

              {open === i && (
                <p className="mt-2 text-white/80">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}