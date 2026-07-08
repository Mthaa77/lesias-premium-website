"use client";

import { useState } from "react";

const pathways = [
  {
    id: "starter",
    title: "Start my ECD career",
    eyebrow: "Beginner pathway",
    result: "Level 4 FET Certificate",
    match: "94% pathway match",
    description:
      "Best for beginners, aspiring daycare assistants, childcare workers, and students who want a strong recognised foundation before progressing into advanced ECD roles.",
    highlights: ["12 months", "NQF Level 4", "140 credits", "Saturday classes"],
  },
  {
    id: "teacher",
    title: "Become a Grade R teacher",
    eyebrow: "Teaching pathway",
    result: "Level 5 National Diploma",
    match: "91% pathway match",
    description:
      "Best for aspiring Grade R teachers and educators who want to lead classrooms independently with stronger curriculum, assessment, and teaching confidence.",
    highlights: ["18–24 months", "NQF Level 5", "240 credits", "Advanced pedagogy"],
  },
  {
    id: "owner",
    title: "Open or formalise a daycare",
    eyebrow: "Business pathway",
    result: "Level 5 National Diploma",
    match: "96% pathway match",
    description:
      "The diploma route is powerful for daycare ownership because it includes business management, financial planning, marketing, compliance, staff supervision, and centre operations.",
    highlights: ["Business skills", "Compliance", "Leadership", "Centre management"],
  },
  {
    id: "unsure",
    title: "I am not sure yet",
    eyebrow: "Guided admissions",
    result: "Speak to Admissions",
    match: "Personal guidance recommended",
    description:
      "Lesia's admissions team can help you choose between Level 4 and Level 5 based on your background, experience, documents, and career goals.",
    highlights: ["WhatsApp support", "Programme guidance", "Campus advice", "Application help"],
  },
];

export default function PathwayQuiz() {
  const [selected, setSelected] = useState(pathways[0]);

  return (
    <section className="section pathway" id="pathway">
      <div className="container pathway-grid">
        <div className="section-copy sticky-copy">
          <p className="eyebrow">Interactive onboarding</p>
          <h2>Find your best ECD pathway in seconds.</h2>
          <p>
            Instead of overwhelming visitors, the website guides them like a premium admissions advisor — helping them choose the right qualification with confidence.
          </p>
          <div className="quiz-result">
            <span>{selected.match}</span>
            <h3>{selected.result}</h3>
            <p>{selected.description}</p>
            <div className="mini-tags">
              {selected.highlights.map((tag) => (
                <strong key={tag}>{tag}</strong>
              ))}
            </div>
            <a className="btn btn-primary" href="#contact">
              Start my application
            </a>
          </div>
        </div>

        <div className="quiz-panel">
          <p className="eyebrow">Choose your goal</p>
          <div className="pathway-options">
            {pathways.map((path) => (
              <button
                key={path.id}
                className={`pathway-option ${selected.id === path.id ? "active" : ""}`}
                onClick={() => setSelected(path)}
                type="button"
              >
                <span>{path.eyebrow}</span>
                <strong>{path.title}</strong>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
