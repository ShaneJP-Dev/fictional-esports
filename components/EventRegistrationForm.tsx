"use client";

import RegistrationForm from "./RegistrationForm";
import { Trophy } from "lucide-react";
import useInView from "@/hooks/useInView"; // adjust path as needed

export default function EventRegistrationForm() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      id="event-registration"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? "fade-in" : ""}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-tan"
          >
            Join the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Battle
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />
          <p className={`text-gray-300 text-lg text-center mx-auto max-w-md fade-in-slow`}>
            Register now to compete in the ultimate gaming tournament
          </p>
        </div>

        {/* Form */}
        <div
          className= "relative backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8 shadow-[0_0_30px_rgba(128,0,128,0.4)]"
        >
          <RegistrationForm />
        </div>
      </div>

      {/* Floating decorative dots */}
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" />
      <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-70" />
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50" />
    </section>
  );
}
