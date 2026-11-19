import FloatingChatBot from "@/components/modules/ai-assistant/FloatingChatBot";
import DoctorCtaSection from "@/components/modules/homepage/DoctorCtaSection";
import Hero from "@/components/modules/homepage/Hero";
import HowItWorksSection from "@/components/modules/homepage/HowItWorksSection";
import SpecialtiesSection from "@/components/modules/homepage/SpecialtiesSection";
import TopDoctorsSection from "@/components/modules/homepage/TopDoctorsSection";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col relative">
      {/* 1. Super Fast Hero Slider Banner */}
      <Hero />

      {/* 2. Top Medical Specialties Grid */}
      <SpecialtiesSection />

      {/* 3. Top-Rated Verified Specialists (Medicus Clinic Style) */}
      <TopDoctorsSection />

      {/* 4. How Sync Healthcare Works */}
      <HowItWorksSection />

      {/* 5. Doctor Recruitment & Expansion CTA */}
      <DoctorCtaSection />

      {/* 6. Floating AI Health Assistant Bot (Logo launcher + Popup Chatbot) */}
      <FloatingChatBot />
    </div>
  );
}
