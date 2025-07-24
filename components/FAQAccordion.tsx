"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

const FAQAccordion = () => {
  const faqData = [
    {
      id: "item-1",
      question: "What is the tournament format?",
      answer:
        "The tournament follows a double-elimination bracket system. All matches are best-of-three until finals, which is best-of-five. Registration closes 24 hours before the tournament begins.",
    },
    {
      id: "item-2",
      question: "What happens if my opponent doesn't show up?",
      answer:
        "Teams have 10 minutes to appear after the scheduled match time. Failure to appear results in a match forfeit. Both teams must be fully present to start.",
    },
    {
      id: "item-3",
      question: "How do I check in?",
      answer:
        "1 Hour before the cup's Scheduled start time check-ins will open. Navigate back to the same page where you checked in. Click the Red Check-in button and you will be in. Some events have limited check-ins & are on a first come first serve basis.",
    },
    {
      id: "item-4",
      question: "How to I submit my Score?",
      answer:
        "Once you have finished your lobby, this match page is where you record your scores. Winning team must submit match results with screenshots. Both teams must confirm the match outcome. Screenshots must clearly show the final score screen. Results must be submitted as soon as the match ends.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 font-tan">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold font-tan">
            Questions
          </span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Everything you need to know about joining the ultimate gaming
          tournament
        </p>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 relative z-50">
        <Accordion type="multiple" className="w-full space-y-4 relative z-50">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-slate-900/50 rounded-xl px-6 py-2 border border-slate-600/50 hover:bg-slate-800/70 hover:border-purple-500/30 transition-all duration-300 relative z-50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-white hover:text-purple-400 transition-colors duration-200 relative z-50">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2 relative z-50">
                <div className="h-px bg-gradient-to-r from-purple-500/50 to-pink-500/50 mb-4"></div>
                <p className="text-gray-300 leading-relaxed text-base">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-3xl font-bold text-white mb-4 font-tan">
            Ready to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold font-tan">
              Battle?
            </span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Don't see your question? Our support team is standing by to help you
            dominate the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-8 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-lg cursor-pointer">
              Contact Support
            </Button>
            <Button
                size="lg"
                onClick={() => {
                  document.getElementById('event-registration')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-8 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Register Now

              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
