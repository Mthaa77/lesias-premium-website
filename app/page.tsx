import PathwayQuiz from "@/components/PathwayQuiz";

const trustBadges = [
  ["ETDP-SETA", "Provider No. 1283"],
  ["SAQA Aligned", "NQF recognised"],
  ["B-BBEE Level 1", "Transformation focused"],
  ["SACE Endorsed", "Education sector trust"],
  ["Saturday Only", "Flexible learning"],
];

const programmes = [
  {
    step: "Step 1 · Foundation",
    title: "FET Certificate in Early Childhood Development",
    level: "NQF Level 4",
    saqa: "SAQA ID 58761",
    credits: "140 Credits",
    duration: "12 Months",
    audience: "New entrants, aspiring assistants, daycare staff",
    tone: "blue-card",
    benefits: [
      "Build a recognised foundation in early childhood development.",
      "Learn child development milestones and age-appropriate teaching methods.",
      "Develop classroom management and early learning environment basics.",
      "Prepare for assistant teacher, childcare worker, and daycare support roles.",
    ],
  },
  {
    step: "Step 2 · Advanced",
    title: "National Diploma in Early Childhood Development",
    level: "NQF Level 5",
    saqa: "SAQA ID 23118",
    credits: "240 Credits",
    duration: "18–24 Months",
    audience: "Aspiring Grade R teachers, daycare owners, ECD managers",
    tone: "gold-card",
    benefits: [
      "Advance into teaching, management, and ECD centre leadership.",
      "Learn advanced pedagogy, curriculum design, and assessment methods.",
      "Gain business management, financial planning, marketing, and compliance skills.",
      "Prepare for Grade R teaching, daycare ownership, and centre management.",
    ],
  },
];

const benefits = [
  ["🗓️", "Flexible Saturday Learning", "Study while working, parenting, or managing weekday responsibilities."],
  ["🏅", "Recognised Qualifications", "Build a pathway into schools, daycares, Grade R classrooms, and ECD centres."],
  ["🤝", "Mentored Support", "Receive practical guidance, progress support, and confidence-building mentorship."],
  ["📍", "Local Campuses", "Access training in Soshanguve Block K and Hammanskraal without expensive city travel."],
  ["💼", "Career & Business Focus", "Learn employability, classroom readiness, daycare operations, and centre leadership."],
  ["🌍", "Community Impact", "Train educators who uplift children, families, women-led businesses, and communities."],
];

const steps = [
  ["01", "Get in touch", "Call, WhatsApp, or email admissions."],
  ["02", "Choose programme", "Pick Level 4 or Level 5 based on your goals."],
  ["03", "Submit application", "Complete forms and provide required documents."],
  ["04", "Secure your seat", "Pay your registration fee to confirm enrolment."],
  ["05", "Start Saturday", "Report to campus and begin your ECD journey."],
];

const faq = [
  ["Which programme is best for beginners?", "The Level 4 FET Certificate is the best entry point for beginners, aspiring assistants, daycare staff, and people starting their formal ECD career."],
  ["Which programme is best for daycare owners?", "The Level 5 National Diploma is stronger for owners and managers because it includes advanced teaching, curriculum design, business management, compliance, and centre operations."],
  ["Can students study while working?", "Yes. The Saturday-only model is designed for working adults, parents, and people with weekday responsibilities."],
  ["Where are the campuses?", "Campus 1 is in Soshanguve Block K at Khutso Primary School. Campus 2 is in Hammanskraal, Gauteng."],
];

function PremiumBadge() {
  return (
    <div className="hero-art" aria-label="Premium Lesia's Educational Services brand badge">
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <div className="glass-card accreditation-card">
        <span>Provider No. 1283</span>
        <strong>Accredited ECD Training</strong>
      </div>
      <div className="academy-badge">
        <span className="badge-top">LESIA'S</span>
        <div className="book-icon">📘</div>
        <span className="badge-bottom">EDUCATIONAL SERVICES</span>
      </div>
      <div className="glass-card intake-card">
        <span>2025/2026 Intake</span>
        <strong>Now Open</strong>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Lesia's Educational Services home">
          <span className="brand-mark">✦</span>
          <span>
            Lesia's
            <small>Educational Services</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#programmes">Programmes</a>
          <a href="#pathway">Pathway</a>
          <a href="#support">Support</a>
          <a href="#admissions">Admissions</a>
        </div>
        <a className="btn btn-primary nav-cta" href="https://wa.me/27605506641?text=Hi%20Lesia%27s%20Educational%20Services%2C%20I%20am%20interested%20in%20applying%20for%20the%202025%2F2026%20intake." target="_blank" rel="noreferrer">
          WhatsApp admissions
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="premium-noise" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">ETDP-SETA Accredited · SAQA Aligned · Saturday Classes</p>
            <h1>
              Turn your passion for children into a recognised <span>ECD career.</span>
            </h1>
            <p className="hero-lead">
              A premium admissions platform for Lesia's Educational Services — helping aspiring educators, daycare practitioners, future Grade R teachers, and ECD centre owners choose the right qualification with confidence.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#admissions">Apply for 2025/2026 Intake</a>
              <a className="btn btn-secondary" href="#programmes">Compare programmes</a>
            </div>
            <div className="hero-metrics" aria-label="Programme highlights">
              <span><strong>Level 4</strong> FET Certificate</span>
              <span><strong>Level 5</strong> National Diploma</span>
              <span><strong>2</strong> Campuses</span>
              <span><strong>Sat</strong> Classes only</span>
            </div>
          </div>
          <PremiumBadge />
        </div>
      </section>

      <section className="trust-strip container" aria-label="Trust badges">
        {trustBadges.map(([title, label]) => (
          <div key={title}>
            <strong>{title}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <PathwayQuiz />

      <section className="section" id="programmes">
        <div className="container section-heading">
          <p className="eyebrow">Two premium offerings</p>
          <h2>Choose the ECD qualification that matches your future.</h2>
          <p>
            The website positions Lesia's as a complete ECD career ladder: start with a recognised foundation, then progress into teaching, leadership, and daycare ownership.
          </p>
        </div>
        <div className="container programme-grid">
          {programmes.map((programme) => (
            <article className={`programme-card ${programme.tone}`} key={programme.title}>
              <p className="card-step">{programme.step}</p>
              <h3>{programme.title}</h3>
              <p className="programme-audience">Best for: {programme.audience}</p>
              <div className="programme-tags">
                {[programme.level, programme.saqa, programme.credits, programme.duration, "Saturdays Only"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ul>
                {programme.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <a className="btn btn-dark" href="#contact">Ask about this programme</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container comparison-grid">
          <div className="section-copy">
            <p className="eyebrow">Simple decision-making</p>
            <h2>From assistant teacher to ECD leader — see the path clearly.</h2>
            <p>
              A clean comparison helps students understand which programme fits their current position, career goal, and leadership ambition.
            </p>
          </div>
          <div className="comparison-card">
            <div className="comparison-row head"><span>Feature</span><span>Level 4</span><span>Level 5</span></div>
            <div className="comparison-row"><span>Best for</span><span>New entrants</span><span>Teachers & owners</span></div>
            <div className="comparison-row"><span>Skills</span><span>Child development basics</span><span>Curriculum + business</span></div>
            <div className="comparison-row"><span>Career path</span><span>Assistant / practitioner</span><span>Teacher / manager / owner</span></div>
            <div className="comparison-row"><span>Schedule</span><span>Saturdays</span><span>Saturdays</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="support">
        <div className="container section-heading">
          <p className="eyebrow">Why choose Lesia's?</p>
          <h2>Premium support with a strong community heart.</h2>
          <p>
            The redesign makes Lesia's feel credible, warm, modern, and outcomes-focused — not just a training provider, but a student-success ecosystem.
          </p>
        </div>
        <div className="container benefit-grid">
          {benefits.map(([icon, title, text]) => (
            <article className="benefit-card" key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="container career-grid">
          <div>
            <p className="eyebrow">Career outcomes</p>
            <h2>Where can a Lesia's qualification take you?</h2>
            <p>
              The website sells the real outcome: not only a certificate, but employment, leadership, daycare formalisation, and community upliftment.
            </p>
          </div>
          <div className="career-card">
            <h3>Employment Pathway</h3>
            <div className="chips">
              {['Assistant Teacher', 'Grade R Teacher', 'Daycare Practitioner', 'ECD Administrator', 'Centre Supervisor', 'Curriculum Coordinator'].map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </div>
          <div className="career-card gold-panel">
            <h3>Entrepreneurship Pathway</h3>
            <div className="chips">
              {['Daycare Owner', 'Home-Based Centre', 'ECD Operator', 'Training Facilitator', 'ECD Consultant', 'Community Leader'].map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="admissions">
        <div className="container admissions-grid">
          <div className="section-copy">
            <p className="eyebrow">Admissions journey</p>
            <h2>Join Lesia's in five simple steps.</h2>
            <p>
              Clear steps reduce confusion and push students toward action through a friendly, premium admissions flow.
            </p>
            <a className="btn btn-primary" href="https://wa.me/27605506641?text=Hi%20Lesia%27s%20Educational%20Services%2C%20please%20send%20me%20programme%20and%20registration%20details." target="_blank" rel="noreferrer">Apply via WhatsApp</a>
          </div>
          <div className="steps-list">
            {steps.map(([number, title, text]) => (
              <div className="step-card" key={number}>
                <strong>{number}</strong>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-copy">
            <p className="eyebrow">Quick answers</p>
            <h2>Questions students ask before applying.</h2>
          </div>
          <div className="faq-list">
            {faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-card">
          <div>
            <p className="eyebrow">Speak to admissions</p>
            <h2>Your ECD future can start this Saturday.</h2>
            <p>
              Whether you want to become a daycare practitioner, Grade R teacher, ECD centre manager, or daycare owner, Lesia's Educational Services gives you recognised training, mentorship, and support.
            </p>
          </div>
          <div className="contact-actions">
            <a href="tel:0836585604"><span>Call</span><strong>083 658 5604</strong></a>
            <a href="https://wa.me/27605506641?text=Hi%20Lesia%27s%20Educational%20Services%2C%20I%20am%20interested%20in%20applying%20for%20the%202025%2F2026%20intake." target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+27 60 550 6641</strong></a>
            <a href="mailto:lesiastraining12@gmail.com"><span>Email</span><strong>lesiastraining12@gmail.com</strong></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>Lesia's Educational Services</strong>
            <p>Empowering Educators. Transforming Lives.</p>
          </div>
          <p>Soshanguve Block K · Hammanskraal · Saturday-only ECD learning</p>
        </div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/27605506641?text=Hi%20Lesia%27s%20Educational%20Services%2C%20I%20am%20interested%20in%20applying%20for%20the%202025%2F2026%20intake." target="_blank" rel="noreferrer">
        💬 WhatsApp Admissions
      </a>
    </main>
  );
}
