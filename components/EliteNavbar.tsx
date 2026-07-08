"use client";

import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Media", href: "#media" },
  { label: "Pathway", href: "#pathway" },
  { label: "Programmes", href: "#programmes" },
  { label: "Experience", href: "#experience" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Admissions", href: "#admissions" },
];

export default function EliteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#top");

  const sectionIds = useMemo(() => ["top", ...navItems.map((item) => item.href.replace("#", ""))], []);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, percentage)));
      setScrolled(window.scrollY > 20);

      const current = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .findLast((section) => section && section.getBoundingClientRect().top <= 140);

      if (current?.id) setActive(`#${current.id}`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <nav className={`elite-nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Lesia's Educational Services home" onClick={() => setOpen(false)}>
          <span className="brand-mark">✦</span>
          <span>
            Lesia's
            <small>Educational Services</small>
          </span>
        </a>

        <div className="nav-pill" aria-label="Desktop menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="btn btn-primary nav-cta"
            href="https://wa.me/27605506641?text=Hi%20Lesia%27s%20Educational%20Services%2C%20I%20am%20interested%20in%20applying%20for%20the%202025%2F2026%20intake."
            target="_blank"
            rel="noreferrer"
          >
            Apply via WhatsApp
          </a>
          <button className="menu-toggle" type="button" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-panel">
          <p className="eyebrow">Admissions menu</p>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <span>Explore</span>
            </a>
          ))}
          <a
            className="btn btn-primary"
            href="https://wa.me/27605506641?text=Hi%20Lesia%27s%20Educational%20Services%2C%20please%20send%20me%20programme%20and%20registration%20details."
            target="_blank"
            rel="noreferrer"
          >
            Chat to admissions
          </a>
        </div>
      </div>
    </>
  );
}
