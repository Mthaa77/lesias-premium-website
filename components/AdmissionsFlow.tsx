"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Speak to admissions",
    text: "Send a WhatsApp, call, or email and ask about the programme that fits your goals.",
    detail: "You do not need to know everything before reaching out. Admissions can explain the difference between Level 4 and Level 5 in simple terms.",
  },
  {
    number: "02",
    title: "Choose your route",
    text: "Pick the foundation route, the advanced route, or ask for guidance if you are unsure.",
    detail: "The right programme depends on your background, experience, career goal, and whether you want employment, teaching confidence, or daycare ownership.",
  },
  {
    number: "03",
    title: "Prepare your documents",
    text: "Complete your application and gather the required registration information.",
    detail: "This step keeps the enrolment process organised so students feel clear, prepared, and supported before classes begin.",
  },
  {
    number: "04",
    title: "Secure your place",
    text: "Confirm your registration and reserve your seat for the intake.",
    detail: "Early confirmation helps the school plan class groups, campus space, and student support properly.",
  },
  {
    number: "05",
    title: "Start your Saturdays",
    text: "Attend classes, build your confidence, and move step by step toward graduation.",
    detail: "The journey is practical and supportive: learn, prepare, complete your portfolio, and grow into your ECD future.",
  },
];

export default function AdmissionsFlow() {
  const [active, setActive] = useState(0);
  const selected = steps[active];

  return (
    <section className="section admissions-section" id="admissions">
      <div className="container admissions-grid">
        <div className="section-copy">
          <p className="eyebrow">Admissions</p>
          <h2>Apply with clarity, support, and confidence.</h2>
          <p>
            The enrolment journey is simple: speak to admissions, choose the right route, prepare your documents, secure your place, and begin your Saturday classes.
          </p>
          <a className="btn btn-primary" href="https://wa.me/27605506641?text=Hi%20Lesia%27s%20Educational%20Services%2C%20please%20send%20me%20programme%20and%20registration%20details." target="_blank" rel="noreferrer">
            Apply via WhatsApp
          </a>
        </div>

        <div className="admissions-console">
          <div className="admissions-steps" role="tablist" aria-label="Admissions steps">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                <strong>{step.number}</strong>
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          <div className="admissions-preview">
            <span>{selected.number}</span>
            <h3>{selected.title}</h3>
            <p>{selected.text}</p>
            <div className="admission-insight">
              <strong>What this means</strong>
              <p>{selected.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
