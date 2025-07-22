
import EventDetailsSection from "@/components/EventDetailsSection";
import EventRegistrationForm from "@/components/EventRegistrationForm";
import FAQAccordion from "@/components/FAQAccordion";
import HeroSection from "@/components/HeroSection";
import LeaderboardSection from "@/components/LeaderboardSection";

export default function Home() {
  return (
      <main >
        <HeroSection />
        {/* Unified background wrapper for all sections after hero */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Global background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl" />
        </div>
        
        {/* Floating particles across entire background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-40" />
          <div className="absolute top-96 left-16 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-50" />
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40" />
          <div className="absolute bottom-96 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-30" />
        </div>
        <EventDetailsSection />
        <EventRegistrationForm />
        <LeaderboardSection />
        <FAQAccordion />
      </div>
    </main>
  );
}
