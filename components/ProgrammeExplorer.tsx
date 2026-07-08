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
    audience: "First-time ECD students, aspiring assistants, daycare staff, and childcare workers",
    promise: "Start with a recognised foundation that helps you enter the ECD sector with confidence and direction.",
    outcomes: ["Assistant Teacher", "Childcare Worker", "Daycare Practitioner", "ECD Administrator"],
    benefits: [
      "Understand how young children grow, learn, communicate, and develop.",
      "Build practical confidence for supporting children in a classroom or daycare setting.",
      "Learn the basics of planning, managing, and supporting early learning activities.",
      "Create a strong stepping stone toward Level 5 and future ECD leadership.",
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
    audience: "Aspiring Grade R teachers, daycare owners, supervisors, and ECD centre managers",
    promise: "Move beyond the basics into teaching confidence, centre leadership, curriculum planning, and daycare business readiness.",
    outcomes: ["Grade R Teacher", "Daycare Owner", "ECD Manager", "Curriculum Developer"],
    benefits: [
      "Strengthen your teaching, assessment, curriculum, and classroom leadership ability.",
      "Develop business confidence for managing, formalising, or growing an ECD centre.",
      "Learn staff supervision, centre operations, compliance, and parent communication skills.",
      "Prepare for a bigger role as a teacher, manager, owner, or community ECD leader.",
    ],
  },
];

export default function ProgrammeExplorer() {
  const [active, setActive] = useState(programmes[0]);

  return (
    <section className="section programme-command" id="programmes">
      <div className="container section-heading centered-heading">
        <p className="eyebrow">Programme guide</p>
        <h2>Choose the qualification that fits your next step.</h2>
        <p>
          Lesia's offers a clear ECD growth path: begin with a strong foundation, then progress into deeper teaching, leadership, and daycare ownership readiness.
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
          <div className="programme-visual soft-programme-visual">
            <div className="certificate-card clean-certificate-card">
              <span>{active.saqa}</span>
              <h3>{active.level}</h3>
              <p>{active.title}</p>
              <div className="seal">✓</div>
            </div>
            <div className="programme-meter">
              <span>{active.id === "level4" ? "Foundation confidence" : "Leadership readiness"}</span>
              <i style={{ width: active.id === "level4" ? "76%" : "94%" }} />
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
