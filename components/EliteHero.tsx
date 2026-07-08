"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroStats = [
  ["Level 4", "Start strong", "A recognised foundation for your ECD career"],
  ["Level 5", "Lead with confidence", "Advanced training for teachers and centre owners"],
  ["2", "Local campuses", "Soshanguve Block K and Hammanskraal"],
  ["Sat", "Flexible classes", "Designed for parents and working adults"],
];

const loopWords = [
  "educator",
  "Grade R teacher",
  "daycare owner",
  "ECD leader",
];

export default function EliteHero() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % loopWords.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="elite-hero premium-hero-modern" id="top">
      <div className="premium-noise" />
      <div className="hero-gradient-field hero-gradient-one" />
      <div className="hero-gradient-field hero-gradient-two" />
      <div className="hero-gradient-field hero-gradient-three" />

      <div className="container modern-hero-grid">
        <div className="hero-copy modern-hero-copy">
          <div className="hero-kicker"><span /> Accredited ECD training · Saturday classes · Local campuses</div>
          <h1>
            Become a confident <br />
            <span className="loop-word-shell" aria-live="polite">
              <span className="loop-word" key={loopWords[activeWord]}>{loopWords[activeWord]}</span>
            </span>
            <br /> children can trust.
          </h1>
          <p className="hero-lead">
            Lesia's Educational Services helps passionate people turn care, patience, and love for children into a recognised Early Childhood Development pathway — with guidance from your first enquiry to graduation.
          </p>

          <div className="hero-actions premium-hero-actions">
            <a className="btn btn-primary hero-primary-btn" href="#admissions">
              Start your application
              <span>→</span>
            </a>
            <a className="btn btn-secondary hero-secondary-btn" href="#pathway">
              Find my best programme
            </a>
          </div>

          <div className="hero-proofline">
            <span>ETDP-SETA Provider No. 1283</span>
            <span>SAQA aligned</span>
            <span>SACE endorsed</span>
          </div>
        </div>

        <div className="modern-hero-visual" aria-label="Lesia's Educational Services premium hero media">
          <div className="hero-image-panel hero-image-main">
            <Image src="/images/IMG-20260113-WA0008.jpg" alt="Lesia's Educational Services student learning moment" fill priority sizes="(max-width: 900px) 100vw, 560px" />
            <div className="hero-image-caption">
              <span>Real student journey</span>
              <strong>Learn. Grow. Graduate.</strong>
            </div>
          </div>

          <div className="hero-info-card hero-info-top">
            <Image src="/images/Enhance_logo_ultra_premium_2K_202607080538.jpeg" alt="Lesia's Educational Services logo" width={68} height={68} priority />
            <div>
              <span>Admissions open</span>
              <strong>2025/2026 intake</strong>
            </div>
          </div>

          <div className="hero-image-panel hero-image-secondary">
            <Image src="/images/FB_IMG_1767876345564.jpg" alt="Lesia's Educational Services milestone moment" fill sizes="(max-width: 900px) 45vw, 240px" />
          </div>

          <div className="hero-path-card">
            <span>Choose your pathway</span>
            <strong>Level 4 → Level 5 → Career growth</strong>
            <div>
              <i style={{ width: "72%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-metrics modern-hero-metrics" aria-label="Programme highlights">
        {heroStats.map(([value, title, label]) => (
          <article key={title}>
            <strong>{value}</strong>
            <span>{title}</span>
            <small>{label}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
