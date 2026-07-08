import AdmissionsFlow from "@/components/AdmissionsFlow";
import EliteHero from "@/components/EliteHero";
import EliteNavbar from "@/components/EliteNavbar";
import MediaShowcase from "@/components/MediaShowcase";
import PathwayQuiz from "@/components/PathwayQuiz";
import ProgrammeExplorer from "@/components/ProgrammeExplorer";

const trustBadges = [
  ["ETDP-SETA", "Provider No. 1283", "Training you can trust"],
  ["SAQA Aligned", "NQF recognised", "Qualifications with direction"],
  ["B-BBEE Level 1", "Transformation", "Built for community progress"],
  ["SACE Endorsed", "Education trust", "Professional credibility"],
  ["Saturday Only", "Flexible", "Made for real-life schedules"],
];

const benefits = [
  ["🗓️", "Study Without Pausing Your Life", "Saturday classes help you grow your future while still managing work, family, travel, and daily responsibilities."],
  ["🏅", "Recognised ECD Direction", "The programmes give students a clear route into early learning work, teaching support, centre leadership, or daycare ownership."],
  ["🤝", "Guidance That Feels Personal", "Students are supported with programme choice, learning confidence, assessment preparation, and practical next steps."],
  ["📍", "Quality Training Close to Home", "With access in Soshanguve and Hammanskraal, students can study in a familiar community environment."],
  ["💼", "Career and Business Readiness", "The training speaks to employment, classroom confidence, daycare operations, compliance, and centre management."],
  ["🌍", "A Qualification With Impact", "Every trained educator contributes to stronger children, stronger families, and better early learning outcomes."],
];

const premiumMoments = [
  ["Real School Media", "Photos and video create a human first impression that feels local, honest, and emotionally credible."],
  ["Clear Student Journey", "Visitors are guided from interest to programme choice, application, support, and enrolment without confusion."],
  ["Programme Clarity", "Level 4 and Level 5 are explained as a simple growth path, not just course names on a brochure."],
  ["Lead-Focused Design", "Every major section gently moves the visitor toward calling, WhatsApping, or starting an application."],
];

const outcomes = [
  {
    title: "Employment Pathway",
    text: "For students who want to work in preschools, daycares, ECD centres, Grade R environments, and early learning support roles.",
    chips: ["Assistant Teacher", "Grade R Teacher", "Daycare Practitioner", "ECD Administrator", "Centre Supervisor", "Curriculum Coordinator"],
  },
  {
    title: "Entrepreneurship Pathway",
    text: "For students who want to formalise a home-based crèche, launch a daycare, manage a centre, or grow an ECD business.",
    chips: ["Daycare Owner", "Home-Based Centre", "ECD Operator", "Training Facilitator", "ECD Consultant", "Community Leader"],
  },
];

const faq = [
  ["Which programme is best if I am starting from zero?", "Start with the Level 4 FET Certificate. It is the strongest foundation for new entrants, aspiring assistants, daycare staff, and students beginning their formal ECD journey."],
  ["Which programme is better if I want to own or manage a daycare?", "The Level 5 National Diploma is the stronger path for ownership and management because it develops advanced teaching, curriculum, leadership, business, and compliance confidence."],
  ["Can I study while working or parenting?", "Yes. The Saturday-only structure is designed for adults who have weekday responsibilities but still want to improve their future."],
  ["Where can I attend classes?", "Lesia's offers access through Soshanguve Block K at Khutso Primary School and a Hammanskraal campus in Gauteng."],
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
            <p className="eyebrow">The Lesia's promise</p>
            <h2>Training educators who shape a child's first foundation.</h2>
            <p>
              Early childhood education is where confidence, language, creativity, discipline, and curiosity begin. Lesia's helps students become the kind of practitioners families can trust and children can remember.
            </p>
          </div>
          <div className="editorial-card media-editorial-card">
            <span>From passion to profession</span>
            <h3>Your love for children can become a recognised career.</h3>
            <p>
              Whether you are starting fresh, already working with children, or dreaming of opening a daycare, Lesia's gives you a structured path forward.
            </p>
          </div>
        </div>
      </section>

      <MediaShowcase />
      <PathwayQuiz />
      <ProgrammeExplorer />

      <section className="section experience-section" id="experience">
        <div className="container section-heading centered-heading">
          <p className="eyebrow">A smoother admissions journey</p>
          <h2>Every section is designed to guide, reassure, and convert.</h2>
          <p>
            The site now reads like a premium admissions conversation: warm enough for parents and community members, professional enough for an accredited training institution.
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
          <p className="eyebrow">Why students choose Lesia's</p>
          <h2>Flexible learning, recognised direction, and support that feels close.</h2>
          <p>
            Students need more than a qualification. They need clarity, encouragement, practical guidance, and a learning environment that understands real life.
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
            <h2>Build a future in teaching, childcare, or ECD business.</h2>
            <p>
              The goal is not only to study. The goal is to become useful, employable, confident, and prepared for real work with young children.
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
            <p>Attend classes at Khutso Primary School, next to Mashigo Funeral Parlour, in Soshanguve, Pretoria, Gauteng.</p>
          </div>
          <div className="campus-card campus-photo-card">
            <p className="eyebrow">Campus 02</p>
            <h3>Hammanskraal</h3>
            <p>A community-access campus for students who want recognised ECD training closer to home.</p>
          </div>
          <div className="campus-card schedule-card">
            <p className="eyebrow">Class schedule</p>
            <h3>Saturdays Only</h3>
            <p>Keep your weekday responsibilities while building a qualification that can open new doors.</p>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-copy">
            <p className="eyebrow">Quick answers</p>
            <h2>What students usually ask before applying.</h2>
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
            <h2>Your ECD future can start with one message.</h2>
            <p>
              Ask about Level 4, Level 5, registration, campus options, class dates, and the best route for your goals. Lesia's will help you take the next step clearly.
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
