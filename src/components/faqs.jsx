import React, { useState } from "react";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "The total cost of the program is ₦100,000. This fee covers the full 3-month training, access to course materials, mentorship sessions, hands-on projects, and continuous community support throughout your learning journey."
  },
  {
    question: "Do I need a laptop?",
    answer:
      "Yes, having a laptop is essential for completing assignments, participating in online sessions, and practicing the skills you learn during the program."
  },
  {
    question: "Is it online or in-person?",
    answer:
      "The program is conducted online, allowing you to learn from anywhere while interacting with mentors and peers in real time."
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes, upon successful completion of the program and all required projects, you will receive a certificate."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-black text-white flex justify-center p-6">
      <div className="max-w-3xl w-full p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-blue-800 px-6 py-4 rounded-xl"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-2xl">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-blue-800 px-6 pb-4 rounded-b-xl text-sm text-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
