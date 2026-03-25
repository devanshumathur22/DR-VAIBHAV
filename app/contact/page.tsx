"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    problem: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please fill Name and Phone");
      return;
    }

    const message = `
Name: ${form.name}
Phone: ${form.phone}
Age: ${form.age}
Problem: ${form.problem}
    `;

    const url = `https://wa.me/919664386295?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-[#f7f9fc]">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-slate-800">
          Get in Touch with{" "}
          <span className="text-teal-600">Our Experts</span>
        </h1>

        <p className="text-slate-500 mt-4">
          Book consultation or ask your queries anytime
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href="tel:+919664386295"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919664386295"
            target="_blank"
            className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 mb-20">
        {[
          { icon: Phone, label: "Call" },
          { icon: MessageCircle, label: "Chat" },
          { icon: Mail, label: "Email" },
          { icon: MapPin, label: "Directions" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition text-center"
          >
            <item.icon className="mx-auto text-teal-600 mb-2" />
            <p className="text-slate-700 font-medium">{item.label}</p>
          </div>
        ))}
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 mb-20">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md text-center">
          <MapPin className="mx-auto text-teal-600 mb-3" />
          <h3 className="font-semibold text-slate-800">Location</h3>
          <p className="text-slate-500 text-sm mt-2">
            Jaipur, Rajasthan
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md text-center">
          <Mail className="mx-auto text-teal-600 mb-3" />
          <h3 className="font-semibold text-slate-800">Email</h3>
          <p className="text-slate-500 text-sm mt-2">
            info@brainspinemind.com
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md text-center">
          <Phone className="mx-auto text-teal-600 mb-3" />
          <h3 className="font-semibold text-slate-800">Phone</h3>
          <p className="text-slate-500 text-sm mt-2">
            +91-9664386295
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Book Appointment
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <textarea
            name="problem"
            placeholder="Your Problem"
            onChange={handleChange}
            className="w-full mt-4 px-4 py-2 border border-slate-300 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Send on WhatsApp
          </button>
        </div>
      </section>

      {/* MAP */}
      <section className="mb-20">
        <iframe
          src="https://maps.google.com/maps?q=Dr%20Vaibhav%20Mathur%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[300px]"
        />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          FAQs
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <h4 className="font-medium text-slate-800">
              How to book appointment?
            </h4>
            <p className="text-slate-500 text-sm">
              Call or fill the form above.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <h4 className="font-medium text-slate-800">
              Clinic timings?
            </h4>
            <p className="text-slate-500 text-sm">
              Mon–Sat: 10 AM – 6 PM
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}