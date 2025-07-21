"use client"

import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button path

// A type definition for the props of our InfoCard component for better type-safety
type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

// A reusable InfoCard component. `flex` and `h-full` ensure all cards in a grid are the same height.
const InfoCard = ({ title, children }: InfoCardProps) => (
  <div className="bg-[#111827] border border-gray-700/50 p-6 rounded-2xl flex flex-col h-full">
    <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-3">{title}</h3>
    {/* flex-grow allows this div to expand, pushing content like buttons to the bottom */}
    <div className="flex flex-col flex-grow">{children}</div>
  </div>
);

// The main EventDetailsSection component
export default function EventDetailsSection() {
  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Event <span className="text-cyan-400">Details</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded"></div>
        </div>

        {/* Main content grid: Image on the left, details on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Left Column: Image with 3D lift effect */}
          <div className="relative w-full flex items-center mt-12">
            {/* The "back" rectangle, creating the 3D effect */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 w-full h-full bg-gray-500/10 rounded-2xl z-0 mt-2 ml-1"></div>
            {/* The actual image, positioned on top */}
            <img
              src="https://placehold.co/800x500/111827/FFF?text=Your+Event+Image"
              alt="Event promotional"
              className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src='https://placehold.co/800x500/1c2a3e/FFF?text=Image+Not+Found';
              }}
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col gap-6">
            {/* Details Grid (2x2). `items-stretch` ensures children (the InfoCards) in a row have the same height. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {/* Date Card */}
              <InfoCard title="Date">
                <p className="text-lg font-semibold">August 10, 2025</p>
                <p className="text-lg font-semibold mb-3">at 6PM SAST</p>
                <div className="mt-auto"> {/* Pushes button to the bottom */}
                  <Button size="sm" className="bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 font-bold rounded-lg w-full">
                    Set Reminder
                  </Button>
                </div>
              </InfoCard>

              {/* Location Card */}
              <InfoCard title="Location">
                <p className="text-lg font-semibold">Online -</p>
                <p className="text-lg font-semibold mb-3">Streamed live on Twitch</p>
                <div className="mt-auto"> {/* Pushes button to the bottom */}
                  <Button size="sm" className="bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 font-bold rounded-lg w-full">
                    Twitch
                  </Button>
                </div>
              </InfoCard>

              {/* Prize Pool Card */}
              <InfoCard title="Prize Pool">
                <p className="text-4xl font-bold text-cyan-400">R50,000</p>
              </InfoCard>

              {/* Format Card */}
              <InfoCard title="Format">
                <p className="text-lg font-semibold">Round Robin,</p>
                <p className="text-lg font-semibold">Double Elimination</p>
              </InfoCard>
            </div>

            {/* Registration Link */}
            <a 
              href="#EventRegistrationForm"
              className="bg-[#111827] border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-[#1f2937] transition-colors cursor-pointer block"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-lg font-bold tracking-widest text-green-400">REGISTRATION OPEN</p>
              </div>
              <p className="text-gray-400 text-sm">
                Limited slots available. Register now to secure your spot in the tournament!
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
