
import AboutDetails from "@/components/sections/AboutDetails";
import AboutIntro from "@/components/sections/AboutIntro";
import Appointment from "@/components/sections/Achievements";
import Achievements from "@/components/sections/Achievements";
import AppointmentForm from "@/components/sections/AppointmentForm";
import DBSSection from "@/components/sections/DBSSection";
import DoctorExperience from "@/components/sections/DoctorExperience";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import OPDSection from "@/components/sections/OPDVisit";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import VideoSection from "@/components/sections/VideosSection";
import WhyChoose from "@/components/sections/WhyChoose";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <AboutDetails />
      <Achievements />
      <Services />
      <DoctorExperience />
      <DBSSection />
      <WhyChoose />
      <VideoSection />
      <OPDSection />
      <Testimonials />
      <FAQ  />
      <AppointmentForm />
    </>
  );
}