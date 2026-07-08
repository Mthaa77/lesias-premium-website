import Image from "next/image";

const mediaItems = [
  {
    src: "/images/IMG-20260113-WA0008.jpg",
    title: "A place to start your teaching journey",
    label: "Student story",
    description: "Real moments help future students see the school as familiar, welcoming, and possible.",
  },
  {
    src: "/images/IMG-20260113-WA0009.jpg",
    title: "Training rooted in community",
    label: "Learning environment",
    description: "Lesia's speaks to students who want practical education close to home and connected to real families.",
  },
  {
    src: "/images/FB_IMG_1767876078874.jpg",
    title: "Confidence grows step by step",
    label: "ECD progress",
    description: "Every class, portfolio task, and milestone helps students move closer to professional readiness.",
  },
  {
    src: "/images/FB_IMG_1767876345564.jpg",
    title: "A future worth celebrating",
    label: "Milestone moment",
    description: "The brand should feel proud, human, and aspirational — because students are building something meaningful.",
  },
];

const galleryItems = [
  "/images/FB_IMG_1767876357568.jpg",
  "/images/FB_IMG_1767876366152.jpg",
  "/images/FB_IMG_1767876378214.jpg",
  "/images/images.png",
];

export default function MediaShowcase() {
  return (
    <section className="section media-showcase" id="media">
      <div className="container media-hero-grid">
        <div className="section-copy">
          <p className="eyebrow">Real school moments</p>
          <h2>See the people, pride, and purpose behind Lesia's.</h2>
          <p>
            The school is not just a qualification provider. It is a place where students begin to see themselves as educators, leaders, daycare owners, and builders of stronger early learning communities.
          </p>
        </div>
        <div className="media-video-card">
          <video autoPlay muted loop playsInline preload="metadata" poster="/images/Enhance_logo_ultra_premium_2K_202607080538.jpeg">
            <source src="/images/Animate_the_logo._Cinematic_202607080543.mp4" type="video/mp4" />
          </video>
          <div className="video-caption">
            <span>Lesia's identity</span>
            <strong>Recognised training with a community heart</strong>
          </div>
        </div>
      </div>

      <div className="container media-feature-grid">
        {mediaItems.map((item, index) => (
          <article className={`media-card media-card-${index + 1}`} key={item.src}>
            <Image src={item.src} alt={item.title} fill sizes="(max-width: 720px) 100vw, 50vw" />
            <div className="media-overlay">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="container gallery-ribbon" aria-label="Additional Lesia's media gallery">
        {galleryItems.map((src, index) => (
          <div className="gallery-tile" key={src}>
            <Image src={src} alt={`Lesia's gallery image ${index + 1}`} fill sizes="(max-width: 720px) 50vw, 25vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
