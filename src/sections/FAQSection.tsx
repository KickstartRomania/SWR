"use client";

import { useState } from "react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need to come with an idea?",
      answer: "Not at all! If you have an idea, you can pitch it on Friday night. If you don't, you can listen to others' pitches and join a team whose idea excites you.",
    },
    {
      question: "Can I join without a team?",
      answer: "Yes, absolutely! The whole point of Friday night is to meet people, form teams around the best ideas, and start building together.",
    },
    {
      question: "How much does it cost to join? What does the ticket include?",
      answer: "Tickets usually cover all your meals (7 meals!), snacks, endless coffee, and all the resources you need for the 54 hours. Plus, an awesome t-shirt!",
    },
    {
      question: "What should I bring with me?",
      answer: "Bring your laptop, charger, notebook, pen, and a lot of energy. Dress comfortably—you'll be working hard!",
    },
    {
      question: "Can I join if I'm under 18?",
      answer: "Usually, events are 18+, but some cities might have special exceptions. Please check the specific city page or contact the local organizers.",
    },
    {
      question: "Can I work on my existing startup?",
      answer: "Startup Weekend is designed to build something from scratch in 54 hours. Existing businesses cannot be pitched, but you can always use the weekend to test a new spin-off idea!",
    },
    {
      question: "How do I apply as a mentor or sponsor?",
      answer: "We love our supporters! You can apply directly through the 'Contact us' button at the bottom of the page.",
    },
  ];

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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center transition-colors ${isOpen ? 'bg-sw-blue text-white' : 'bg-white text-foreground'}`}>
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

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="font-hand text-2xl text-sw-navy">
            Have other questions?
          </p>
          <svg className="mx-auto mt-2 text-foreground opacity-30" width="30" height="40" viewBox="0 0 30 40" fill="none">
            <path d="M15 0 L15 35 M5 25 L15 40 L25 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </section>
  );
};
