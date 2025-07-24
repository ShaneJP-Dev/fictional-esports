"use client";

import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button path
import useInView from "@/hooks/useInView";

// A type definition for the props of our InfoCard component for better type-safety
type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

// Update the InfoCard component for consistent heights
const InfoCard = ({ title, children }: InfoCardProps) => (
  <div className="bg-[#111827] border border-gray-700/50 p-4 sm:p-6 rounded-2xl flex flex-col h-full min-h-[160px]">
    <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-2 sm:mb-3">
      {title}
    </h3>
    <div className="flex flex-col flex-grow justify-between">{children}</div>
  </div>
);

// The main EventDetailsSection component
export default function EventDetailsSection() {
  const { ref: sectionRef, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      id="event-details"
      ref={sectionRef}
      className="text-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - more compact on mobile */}
                <div className={`text-center mb-8 sm:mb-16 ${isVisible ? 'fade-in' : ''}`}>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 fade-in"
            style={{ fontFamily: "TAN Headline, serif" }}
          >
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Details
            </span>
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          <p  className={`text-gray-300 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-4 ${isVisible ? 'fade-in-slow' : ''}`}>
            Everything you need to know about the ultimate gaming showdown
          </p>
        </div>

        {/* Main content grid with improved mobile layout */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start ${isVisible ? 'fade-in-up' : ''}`}>
          {/* Left Column: Image with 3D lift effect */}
          <div className="relative w-full flex items-center mt-4 sm:mt-12">
            <div className="absolute top-2 left-2 md:top-4 md:left-4 w-full h-full bg-gray-500/10 rounded-2xl z-[1]"></div>
            <img
              src="images/side-images.png"
              alt="Event promotional"
              className="relative z-[2] w-full h-100 object-cover rounded-2xl shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://placehold.co/800x500/1c2a3e/FFF?text=Image+Not+Found";
              }}
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col gap-4 sm:gap-6 relative z-[3]">
            {/* Details Grid with improved spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 fade-in-up">
              {/* Date Card */}
              <InfoCard title="Date">
                <div>
                  <p className="text-base sm:text-lg font-semibold">
                    August 10, 2025
                  </p>
                  <p className="text-base sm:text-lg font-semibold mb-3">
                    at 6PM SAST
                  </p>
                </div>
                <a
                  href="#calendar"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add your calendar functionality here
                    console.log("Adding to calendar");
                  }}
                  className="block w-full cursor-pointer"
                >
                  <Button
                    size="sm"
                    className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold rounded-lg w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    Set Reminder
                  </Button>
                </a>
              </InfoCard>

              {/* Location Card */}
              <InfoCard title="Location">
                <div>
                  <p className="text-base sm:text-lg font-semibold">Online -</p>
                  <p className="text-base sm:text-lg font-semibold mb-3">
                    Streamed live on Twitch
                  </p>
                </div>
                <a
                  // link to Twitch stream
                  href="https://twitch.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full cursor-pointer"
                >
                  <Button
                    size="sm"
                    className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-bold rounded-lg w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                    </svg>
                    Watch Now
                  </Button>
                </a>
              </InfoCard>

              {/* Prize Pool Card */}
              <InfoCard title="Prize Pool">
                <div className="flex items-center justify-center h-full">
                  <p className="text-3xl sm:text-4xl font-bold text-cyan-400">
                    R50,000
                  </p>
                </div>
              </InfoCard>

              {/* Format Card */}
              <InfoCard title="Format">
                <div className="flex flex-col justify-center h-full">
                  <p className="text-base sm:text-lg font-semibold">
                    Round Robin,
                  </p>
                  <p className="text-base sm:text-lg font-semibold">
                    Double Elimination
                  </p>
                </div>
              </InfoCard>
            </div>

            {/* Registration Link - more compact on mobile */}
            <a
              href="#EventRegistrationForm"
              className="bg-[#111827] border border-gray-700/50 rounded-2xl p-4 sm:p-6 text-center fade-in-up-delay"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="relative flex h-2.5 sm:h-3 w-2.5 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 sm:h-3 w-2.5 sm:w-3 bg-green-500"></span>
                </span>
                <p className="text-base sm:text-lg font-bold tracking-widest text-green-400">
                  REGISTRATION OPEN
                </p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                Limited slots available. Register now to secure your spot in the
                tournament!
              </p>
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("event-registration")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer fade-in-up"
              >
                Register Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
