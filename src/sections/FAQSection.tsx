"use client";

import { useState } from "react";
import { DEFAULT_FAQS, type FAQ } from "@/lib/faqs";

export const FAQSection = ({ faqs = DEFAULT_FAQS }: { faqs?: FAQ[] }) => {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="font-heading font-black text-5xl md:text-7xl">
            FAQ
          </h2>
          <svg className="absolute -top-6 left-1/2 md:left-[60%] -translate-x-1/2 w-12 h-12 text-sw-blue rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <path d="M40 80 Q 50 90 60 80 Q 70 70 50 40 Q 30 10 60 10 Q 80 10 80 30" />
            <circle cx="50" cy="95" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`doodle-border rounded-2xl bg-[#fcfcfc] overflow-hidden transition-all duration-300 ${isOpen ? 'doodle-shadow bg-sw-blue-washed/50' : 'hover:bg-gray-50'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-6 focus:outline-none"
                >
                  <span className="font-heading font-bold text-2xl md:text-3xl pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`cursor-pointer flex-shrink-0 w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center transition-colors ${isOpen ? 'bg-sw-blue text-white' : 'bg-white text-foreground'}`}>
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>

                {/* Answer Dropdown */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="font-medium text-lg text-foreground/80 leading-relaxed px-6 pb-6 md:px-8 md:pb-8 pt-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
