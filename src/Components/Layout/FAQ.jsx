import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How is the work process with Nour?",
    answer:"Working with Nour is a structured yet flexible process. It starts with understanding your goals, audience, and vision, followed by research, concept development, design execution, and iterative feedback. You stay involved at every stage to ensure the final result aligns perfectly with your expectations."
  },
  {
      question: "What is your professional approach to work?",
      answer:"Nour believes in designing with purpose—balancing creativity, usability, and strategy. The focus is always on creating meaningful, user-centered solutions that are visually compelling and technically sound. Collaboration, continuous learning, and attention to detail are at the core of every project."
    },
    {
        question: "What are your pricing or consultation fees?",
        answer:"Pricing is flexible and depends on the project scope, timeline, and complexity. Nour offers customized quotes after an initial discussion to ensure the solution fits both your goals and budget. Consultations can be requested directly through the contact page."
  },
  {
    question: " What was your role in collaborative projects?",
    answer:"In collaborative projects, Nour typically leads the creative direction and UI/UX design process, contributing to research, wireframing, prototyping, and final visual design. Strong teamwork, clear communication, and cross-disciplinary coordination are key strengths in group-based work."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-card ${activeIndex === index ? "active" : ""}`}
          >
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <div className="icon">
                {activeIndex === index ? "−" : "+"}
              </div>
            </button>

            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px"
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
