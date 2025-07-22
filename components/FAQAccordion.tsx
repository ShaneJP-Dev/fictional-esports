"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  const faqData = [
    {
      id: "item-1",
      question: "What is the tournament format?",
      answer: "The tournament follows a double-elimination bracket system. All matches are best-of-three until finals, which is best-of-five. Registration closes 24 hours before the tournament begins."
    },
    {
      id: "item-2",
      question: "What are the prize pools?",
      answer: "1st Place: $10,000 + Champion Title, 2nd Place: $5,000 + Runner-up Medal, 3rd Place: $2,500 + Bronze Medal. Additional prizes for most creative gameplay and fan favorite player."
    },
    {
      id: "item-3",
      question: "What are the system requirements?",
      answer: "Minimum: Intel i5 or AMD Ryzen 5, 8GB RAM, GTX 1060 or equivalent. Recommended: Intel i7 or AMD Ryzen 7, 16GB RAM, RTX 3070 or equivalent. Stable internet connection required (minimum 50 Mbps)."
    },
    {
      id: "item-4",
      question: "Can I modify my registration?",
      answer: "Registration details can be modified up to 48 hours before the tournament starts. After that, only emergency changes will be considered. Contact our support team immediately for any urgent modifications."
    },
    {
      id: "item-5",
      question: "What happens if I disconnect during a match?",
      answer: "Players have 5 minutes to reconnect. If unable to reconnect, the match may be awarded to the opponent or replayed from the last safe point, depending on tournament admin discretion."
    },
    {
      id: "item-6",
      question: "Are there age restrictions?",
      answer: "Players must be 16+ to participate. Players under 18 require parental consent. All participants must provide valid ID verification during registration process."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Everything you need to know about joining the ultimate gaming tournament
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Battle?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Don't see your question? Our support team is standing by to help you dominate the competition.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;