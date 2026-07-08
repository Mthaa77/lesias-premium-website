import AdmissionsFlow from "@/components/AdmissionsFlow";
import EliteHero from "@/components/EliteHero";
import EliteNavbar from "@/components/EliteNavbar";
import PathwayQuiz from "@/components/PathwayQuiz";
import ProgrammeExplorer from "@/components/ProgrammeExplorer";

const trustBadges = [
  ["ETDP-SETA", "Provider No. 1283", "Accredited ECD training"],
  ["SAQA Aligned", "NQF recognised", "National portability"],
  ["B-BBEE Level 1", "Transformation", "Community-centred growth"],
  ["SACE Endorsed", "Education trust", "Professional credibility"],
  ["Saturday Only", "Flexible", "Designed for real life"],
];

const benefits = [
  ["🗓️", "Flexible Saturday Learning", "Study while working, parenting, or managing weekday responsibilities."],
  ["🏅", "Accredited Confidence", "Strong trust signals make the school feel safe, credible, and professionally aligned."],
  ["🤝", "Mentored Support", "Students feel guided through applications, learning, assessment preparation, and career planning."],
  ["📍", "Local Access", "Soshanguve and Hammanskraal positioning makes quality ECD training feel close to home."],
  ["💼", "Career & Business Focus", "The website sells employability, daycare operations, compliance readiness, and centre leadership."],
  ["🌍", "Community Impact", "Every graduate can uplift children, families, women-led businesses, and the local ECD ecosystem."],
];

const premiumMoments = [
  ["Admissions Concierge", "Every CTA routes visitors toward WhatsApp, phone, or email so enquiries can become warm conversations."],
  ["Programme Intelligence", "Level 4 and Level 5 are explained as a career ladder, not just two course cards."],
  ["Trust Architecture", "Accreditation, campus, schedule, and outcomes are repeated throughout the journey to reduce doubt."],
  ["Conversion Psychology", "The page moves from aspiration to trust, then choice, support, outcomes, and enrolment."],
];

const outcomes = [
  {
    title: "Employment Pathway",
    text: "For students who want to work in registered schools, preschools, daycares, and ECD centres.",
    chips: ["Assistant Teacher", "Grade R Teacher", "Daycare Practitioner", "ECD Administrator", "Centre Supervisor", "Curriculum Coordinator"],
  },
  {
    title: "Entrepreneurship Pathway",
    text: "For students who want to formalise, launch, manage, and grow an ECD centre or home-based daycare.",
    chips: ["Daycare Owner", "Home-Based Centre", "ECD Operator", "Training Facilitator", "ECD Consultant", "Community Leader"],
  },
];

const faq = [
  ["Which programme is best for beginners?", "The Level 4 FET Certificate is the best entry point for beginners, aspiring assistants, daycare staff, and people starting their formal ECD career."],
  ["Which programme is best for daycare owners?", "The Level 5 National Diploma is stronger for owners and managers because it includes advanced teaching, curriculum design, business management, compliance, and centre operations."],
  ["Can students study while working?", "Yes. The Saturday-only model is designed for working adults, parents, and people with weekday responsibilities."],
  ["Where are the campuses?", "Campus 1 is in Soshanguve Block K at Khutso Primary School. Campus 2 is in Hammanskraal, Gauteng."],
];

export default function Home() {
  return (
    <main>
      <EliteNavbar />
      <EliteHero />

      <section className="trust-strip container" aria-label="Trust badges">
        {trustBadges.map(([title, label, detail]) => (
          <div key={title}>
            <strong>{title}</strong>
            <span>{label}</span>
            <small>{detail}</small>
          </div>
        ))}
      </section>

      <section className="section editorial-section">
        <div className="container editorial-grid">
          <div className="section-copy">
            <p className="eyebrow">Premium repositioning</p>
            <h2>Not just a school — a polished ECD career gateway.</h2>
            <p>
              This redesign positions Lesia's Educational Services as a trusted, aspirational, community-rooted institution that helps students turn compassion for children into professional progress.
            </p>
          </div>
          <div className="editorial-card">
            <span>Brand promise</span>
            <h3>Your passion for children can become a recognised career.</h3>
            <p>
              The website now feels like a premium admissions journey: cinematic, emotionally persuasive, practical, and built to convert visitors into student enquiries.
            </p>
          </div>
        </div>
      </section>

      <PathwayQuiz />
      <ProgrammeExplorer />

      <section className="section experience-section" id="experience">
        <div className="container section-heading centered-heading">
          <p className="eyebrow">Elite website experience</p>
          <h2>Advanced interactive components across the whole journey.</h2>
          <p>
            Every section now has a premium role: attract attention, build trust, guide the student, explain the programmes, show outcomes, and convert the lead.
          </p>
        </div>
        <div className="container premium-moments-grid">
          {premiumMoments.map(([title, text]) => (
            <article className="premium-moment" key={title}>
              <span>✦</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="support">
        <div className="container section-heading centered-heading">
          <p className="eyebrow">Why choose Lesia's?</p>
          <h2>Premium support with a strong community heart.</h2>
          <p>
            The school is presented as credible, warm, modern, and outcomes-focused — not just a training provider, but a student-success ecosystem.
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

      <section className="section dark-section" id="outcomes">
        <div className="container outcomes-grid">
          <div className="section-copy outcome-copy">
            <p className="eyebrow">Career outcomes</p>
            <h2>Where can a Lesia's qualification take you?</h2>
            <p>
              The website sells the real outcome: not only a certificate, but employment, leadership, daycare formalisation, and community upliftment.
            </p>
          </div>
          {outcomes.map((outcome, index) => (
            <article className={`career-card ${index === 1 ? "gold-panel" : ""}`} key={outcome.title}>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
              <div className="chips">
                {outcome.chips.map((chip) => <span key={chip}>{chip}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <AdmissionsFlow />

      <section className="section campus-section">
        <div className="container campus-grid">
          <div className="campus-card primary-campus">
            <p className="eyebrow">Campus 01</p>
            <h3>Soshanguve Block K</h3>
            <p>Khutso Primary School, next to Mashigo Funeral Parlour, Soshanguve, Pretoria, Gauteng.</p>
          </div>
          <div className="campus-card">
            <p className="eyebrow">Campus 02</p>
            <h3>Hammanskraal</h3>
            <p>Hammanskraal Campus, Gauteng Province — built to bring ECD training closer to the community.</p>
          </div>
          <div className="campus-card schedule-card">
            <p className="eyebrow">Class schedule</p>
            <h3>Saturdays Only</h3>
            <p>Perfect for students who work, parent, travel, or manage weekday responsibilities.</p>
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
