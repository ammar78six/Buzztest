import { useState } from "react";

const faqs = [
  "Can buying likes cost me my Instagram account?",
  "Which likes package should I choose?",
  "Are premium likes worth their extra cost?",
  "What is your automatic likes service?",
  "How quickly does this work?",
  "I only have to order likes? There’s nothing else I have to do?",
  "Will buying likes increase my view count, too?",
  "What does ‘splitting likes’ mean?",
  "Does Instagram know that I’ve purchased likes?",
  "Why should I choose Buzzoid?",
  "What if I have a question you haven’t answered?",
];

export default function FAQSection({ renderIn = "Likes", des }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold text-center">
        <span className="text-orange-500">Buy Instagram {renderIn}</span> Easily
        With Buzzoid
      </h2>
      <p className="text-center text-gray-600 mt-2">{des}</p>

      <div className="flex flex-wrap items-start gap-4 mt-10">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden w-[48%]"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-start bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-sm font-medium text-gray-800">
                {question}
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14m7-7H5" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 px-5 overflow-hidden ${
                openIndex === index ? "max-h-40 py-3" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-600">
                This is the answer to the question. You can replace this text
                with actual content.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
