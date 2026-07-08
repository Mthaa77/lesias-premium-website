"use client";

import { MouseEvent, useState } from "react";

const heroStats = [
  ["Level 4", "FET Certificate", "Start your ECD career"],
  ["Level 5", "National Diploma", "Advance into leadership"],
  ["2", "Campuses", "Soshanguve + Hammanskraal"],
  ["Sat", "Classes only", "Built for working adults"],
];

export default function EliteHero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <section className="elite-hero" id="top">
      <div className="premium-noise" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="container elite-hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span /> ETDP-SETA Accredited · SAQA Aligned · Saturday-only learning</div>
          <h1>
            The premium gateway into <span>Early Childhood Development.</span>
          </h1>
          <p className="hero-lead">
            Lesia's Educational Services helps aspiring educators, daycare practitioners, Grade R teachers, and ECD centre owners move from passion to recognised professional progress.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary magnetic-btn" href="#admissions">Apply for 2025/2026 Intake</a>
            <a className="btn btn-secondary" href="#pathway">Find my ECD path</a>
          </div>
          <div className="hero-metrics" aria-label="Programme highlights">
            {heroStats.map(([value, title, label]) => (
              <article key={title}>
                <strong>{value}</strong>
                <span>{title}</span>
                <small>{label}</small>
              </article>
            ))}
          </div>
        </div>

        <div
          className="hero-stage"
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        >
          <div className="cinema-card main-crest">
            <div className="crest-rings">
              <span className="ring ring-one" />
              <span className="ring ring-two" />
              <span className="ring ring-three" />
            </div>
            <div className="academy-badge ultra-badge">
              <span className="badge-top">LESIA'S</span>
              <div className="book-icon">📘</div>
              <span className="badge-bottom">EDUCATIONAL SERVICES</span>
            </div>
          </div>

          <div className="floating-proof proof-top">
            <span>Provider No. 1283</span>
            <strong>Accredited Training</strong>
          </div>
          <div className="floating-proof proof-right">
            <span>Intake Status</span>
            <strong>Now Open</strong>
          </div>
          <div className="floating-proof proof-bottom">
            <span>Learning model</span>
            <strong>Saturdays Only</strong>
          </div>

          <div className="mini-dashboard">
            <div className="dash-head">
              <span /> Student Pathway Console
            </div>
            <div className="dash-bars">
              <i style={{ width: "92%" }} />
              <i style={{ width: "78%" }} />
              <i style={{ width: "86%" }} />
            </div>
            <p>Qualification fit · career goal · campus choice</p>
          </div>
        </div>
      </div>
    </section>
  );
}
