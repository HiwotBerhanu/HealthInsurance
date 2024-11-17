"use client"; 
import { useState } from "react";

const faqs = [
  {
    question: "What does the basic plan cover?",
    answer: "The basic plan covers essential medical services.",
  },
  {
    question: "Are pre-existing conditions covered?",
    answer: "Yes, we cover pre-existing conditions after a waiting period.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 min-h-screen  bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#90E4C1]">
        Frequently Asked Questions
      </h1>
      <div className="bg-white rounded-3xl shadow-lg">
        <ul className="list-none">
          {faqs.map((faq, index) => (
            <li key={index} className="border-b border-gray-200">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(index)}>
                <h2 className="font-semibold text-lg text-[#bfe5d5]">
                  {faq.question}
                </h2>
                <span className="text-[#90E4C1]">
                  {openIndex === index ? (
                    <i className="fas fa-minus"></i>
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <p className="p-4 text-gray-600">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
