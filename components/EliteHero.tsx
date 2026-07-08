import Image from "next/image";

const heroStats = [
  ["Level 4", "Start strong", "A recognised foundation for your ECD career"],
  ["Level 5", "Lead with confidence", "Advanced training for teachers and centre owners"],
  ["2", "Local campuses", "Soshanguve Block K and Hammanskraal"],
  ["Sat", "Flexible classes", "Designed for parents and working adults"],
];

export default function EliteHero() {
  return (
    <section className="elite-hero clean-hero" id="top">
      <video className="hero-background-video" autoPlay muted loop playsInline preload="metadata">
        <source src="/images/Animate_the_logo._Cinematic_202607080543.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-scrim" />
      <div className="premium-noise" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container elite-hero-grid clean-hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span /> Accredited ECD training · Saturday classes · Local campuses</div>
          <h1>
            Become the educator young children <span>never forget.</span>
          </h1>
          <p className="hero-lead">
            Lesia's Educational Services helps passionate people turn care, patience, and love for children into a recognised Early Childhood Development career — with practical support from application to graduation.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary magnetic-btn" href="#admissions">Start your application</a>
            <a className="btn btn-secondary" href="#pathway">Choose my programme</a>
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

        <div className="hero-media-composition" aria-label="Lesia's Educational Services media collage">
          <div className="hero-video-card">
            <video autoPlay muted loop playsInline preload="metadata" poster="/images/Enhance_logo_ultra_premium_2K_202607080538.jpeg">
              <source src="/images/Animate_the_logo._Cinematic_202607080543.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-label">
              <span>Lesia's identity</span>
              <strong>Cinematic school brand motion</strong>
            </div>
          </div>

          <div className="hero-photo-card hero-photo-main">
            <Image src="/images/IMG-20260113-WA0008.jpg" alt="Lesia's Educational Services learning moment" fill priority sizes="(max-width: 720px) 100vw, 520px" />
          </div>
          <div className="hero-photo-card hero-photo-small">
            <Image src="/images/FB_IMG_1767876345564.jpg" alt="Lesia's Educational Services student milestone" fill sizes="(max-width: 720px) 45vw, 220px" />
          </div>

          <div className="hero-logo-plate">
            <Image src="/images/Enhance_logo_ultra_premium_2K_202607080538.jpeg" alt="Lesia's Educational Services logo" width={92} height={92} priority />
            <div>
              <span>Admissions open</span>
              <strong>2025/2026 intake</strong>
            </div>
          </div>

          <div className="hero-trust-row">
            <span>ETDP-SETA</span>
            <span>SAQA aligned</span>
            <span>SACE endorsed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
