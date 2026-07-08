"use client";

import { useState } from "react";

const programmes = [
  {
    id: "level4",
    step: "Step 01 · Foundation",
    title: "FET Certificate in Early Childhood Development",
    level: "NQF Level 4",
    saqa: "SAQA ID 58761",
    credits: "140 Credits",
    duration: "12 Months",
    audience: "New entrants, aspiring assistants, daycare staff",
    promise: "Build a recognised foundation and enter the ECD sector with confidence.",
    outcomes: ["Grade R Assistant", "Childcare Worker", "Daycare Practitioner", "ECD Administrator"],
    benefits: [
      "Child development milestones and early learning foundations.",
      "Age-appropriate teaching methods and classroom confidence.",
      "Classroom management and early learning environment basics.",
      "A clear stepping stone toward advanced ECD leadership.",
    ],
  },
  {
    id: "level5",
    step: "Step 02 · Advanced",
    title: "National Diploma in Early Childhood Development",
    level: "NQF Level 5",
    saqa: "SAQA ID 23118",
    credits: "240 Credits",
    duration: "18–24 Months",
    audience: "Aspiring Grade R teachers, daycare owners, ECD managers",
    promise: "Advance into teaching, management, curriculum leadership, and daycare ownership.",
    outcomes: ["Grade R Teacher", "Daycare Owner", "ECD Manager", "Curriculum Developer"],
    benefits: [
      "Advanced pedagogy, curriculum design, and assessment methods.",
      "Business management, financial planning, marketing, and compliance.",
      "Staff supervision, centre operations, and leadership readiness.",
      "Preparation for independent teaching, management, and ownership.",
    ],
  },
];

export default function ProgrammeExplorer() {
  const [active, setActive] = useState(programmes[0]);

  return (
    <section className="section programme-command" id="programmes">
      <div className="container section-heading centered-heading">
        <p className="eyebrow">Programme command centre</p>
        <h2>Two offerings. One clear professional journey.</h2>
        <p>
          A high-converting programme selector helps students compare the two qualifications by level, duration, career outcome, and personal ambition.
        </p>
      </div>

      <div className="container programme-console">
        <div className="programme-tabs" role="tablist" aria-label="Choose a programme">
          {programmes.map((programme) => (
            <button
              key={programme.id}
              type="button"
              role="tab"
              aria-selected={active.id === programme.id}
              className={active.id === programme.id ? "active" : ""}
              onClick={() => setActive(programme)}
            >
              <span>{programme.step}</span>
              <strong>{programme.level}</strong>
            </button>
          ))}
        </div>

        <div className="programme-display">
          <div className="programme-visual">
            <div className="certificate-card">
              <span>{active.saqa}</span>
              <h3>{active.level}</h3>
              <p>{active.title}</p>
              <div className="seal">✦</div>
            </div>
            <div className="programme-meter">
              <span>Career readiness</span>
              <i style={{ width: active.id === "level4" ? "74%" : "94%" }} />
            </div>
          </div>

          <div className="programme-detail">
            <p className="card-step">{active.step}</p>
            <h3>{active.title}</h3>
            <p className="programme-audience">Best for: {active.audience}</p>
            <p className="programme-promise">{active.promise}</p>
            <div className="programme-tags">
              {[active.level, active.saqa, active.credits, active.duration, "Saturdays Only"].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <ul>
              {active.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <div className="outcome-strip">
              {active.outcomes.map((outcome) => (
                <span key={outcome}>{outcome}</span>
              ))}
            </div>
            <a className="btn btn-dark" href="#contact">Ask about {active.level}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
