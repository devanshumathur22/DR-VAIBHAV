"use client";

import { useState } from "react";
import { CheckCircle, Phone, Mail, MapPin, Loader2 } from "lucide-react";

export default function AppointmentForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    // Basic validation
    if (!name || !phone) {
      alert("Name aur Phone number zaroori hai!");
      return;
    }

    // Simple Indian phone validation (10 digits)
    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number");
      return;
    }

    setLoading(true);

    const msg = `Hello Doctor,\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message || "No additional message"}`;

    const url = `https://wa.me/919664386295?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");

    // Reset form
    form.reset();

    setSuccess(true);
    setLoading(false);

    // Auto hide success message
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - FORM */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 border">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Book Appointment
          </h2>
          <p className="text-slate-500 mb-8">
            Quick booking via WhatsApp 🚀
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="text-sm text-slate-600 mb-1 block font-medium">
                Full Name *
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black focus:ring-2 focus:ring-teal-500 outline-none transition"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm text-slate-600 mb-1 block font-medium">
                Phone Number * (10 digits)
              </label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="96643 86295"
                maxLength={10}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black focus:ring-2 focus:ring-teal-500 outline-none transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-slate-600 mb-1 block font-medium">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Preferred date/time or any other details..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black focus:ring-2 focus:ring-teal-500 outline-none transition resize-y"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Opening WhatsApp...
                </>
              ) : (
                "Send via WhatsApp"
              )}
            </button>
          </form>

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="mt-6 flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-2xl border border-green-100">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Message sent successfully! WhatsApp opened.</span>
            </div>
          )}
        </div>

        {/* RIGHT - INFO PANEL */}
        <div className="space-y-6">
          {/* Contact Card */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center gap-3">
              <Phone size={20} />
              <a href="tel:+919664386295" className="hover:underline">
                +91 96643 86295
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Mail size={20} />
              <a href="mailto:clinic@email.com" className="hover:underline">
               info@brainspinemind.com
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h3 className="text-lg font-semibold mb-3">Clinic Location</h3>
            <div className="flex items-start gap-3 text-slate-600">
              <MapPin size={20} className="mt-0.5" />
              <div>
                Jaipur, Rajasthan<br />
                <span className="text-sm text-slate-500">Exact address will be shared after booking</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border h-[250px]">
  <iframe
    src="https://www.google.com/maps?q=Dr+Vaibhav+Mathur+Jaipur&output=embed"
    className="w-full h-full"
    loading="lazy"
    title="Dr Vaibhav Mathur Clinic Location"
  />
</div>
        </div>
      </div>
    </section>
  );
}