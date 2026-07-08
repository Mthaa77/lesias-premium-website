"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Get in touch",
    text: "Call, WhatsApp, or email admissions and receive simple programme guidance.",
    detail: "The first conversion goal is to move visitors into a warm WhatsApp conversation where the school can answer fees, requirements, campus, and intake questions.",
  },
  {
    number: "02",
    title: "Choose programme",
    text: "Select Level 4 or Level 5 based on your background and career goal.",
    detail: "The website guides the student toward a pathway: beginner, Grade R teaching, daycare ownership, or personalised admissions support.",
  },
  {
    number: "03",
    title: "Submit application",
    text: "Complete your registration form and provide the required documents.",
    detail: "This step can later become a full online application portal with document upload, proof of payment, and admin tracking.",
  },
  {
    number: "04",
    title: "Secure your seat",
    text: "Pay your registration fee to confirm enrolment before spaces fill.",
    detail: "The limited-seat message should create urgency while keeping the tone trustworthy and student-friendly.",
  },
  {
    number: "05",
    title: "Start Saturday",
    text: "Report to campus and begin your ECD journey with mentor support.",
    detail: "The final step reinforces the school’s promise: students are supported from first class to graduation and beyond.",
  },
];

export default function AdmissionsFlow() {
  const [active, setActive] = useState(0);
  const selected = steps[active];

  return (
    <section className="section admissions-section" id="admissions">
      <div className="container admissions-grid">
        <div className="section-copy">
          <p className="eyebrow">Admissions experience</p>
          <h2>Join Lesia's through a guided premium enrolment flow.</h2>
          <p>
            The admissions section now feels like an interactive onboarding desk — clear, reassuring, and built to convert visitors into WhatsApp leads.
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
              <strong>Premium conversion insight</strong>
              <p>{selected.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
