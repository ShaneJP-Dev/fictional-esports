"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('images/hero-bg.png')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-orange-300 rounded-full animate-ping opacity-60" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse opacity-70" />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-50" />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-orange-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-900/10" />
      </div>

      {/* Content - moved slightly left */}
      <div className="relative z-10 px-2 sm:px-6 lg:px-8 max-w-4xl ml-2 sm:ml-8 lg:ml-70 w-full">
        <div className="space-y-2 mb-6 relative" style={{ top: "-8px" }}>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight fade-in"
            style={{ fontFamily: "TAN Headline, serif" }}
          >
            <span className="block">Legends of Victory </span>
            <span className="block">
              <span className="text-white">Battle </span>
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow-lg"
                style={{
                  textShadow:
                    "0 0 30px rgba(56, 189, 248, 0.5), 0 0 60px rgba(56, 189, 248, 0.3)",
                }}
              >
                Royale
              </span>
              <span className="text-white"> Cup</span>
            </span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-2xl text-gray-200 font-bold max-w-2xl leading-relaxed fade-in-slow"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Compete for glory. Only one can win.
          </p>
        </div>

        {/* Buttons Container - moved 10px higher and placed directly under text */}
        <div className="relative lg:ml-40" style={{ top: "-10px" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center mb-12 w-full">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-10 py-9 text-lg sm:text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0 min-w-[160px] sm:min-w-[180px] cursor-pointer fade-in-up"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              onClick={() => {
                document.getElementById("event-registration")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Register Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-2 border-red-600 text-white font-bold px-10 py-9 text-lg sm:text-xl rounded-full hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-sm min-w-[160px] sm:min-w-[180px] cursor-pointer fade-in-up-delay"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              onClick={() => {
                document.getElementById("event-details")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse" />
        </div>
      </div>

      {/* Trophy glow effect */}
      <div className="absolute bottom-1/4 left-16 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl animate-pulse opacity-60" />
    </section>
  );
}
