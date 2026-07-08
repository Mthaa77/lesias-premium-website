import Image from "next/image";

const mediaItems = [
  {
    src: "/images/IMG-20260113-WA0008.jpg",
    title: "Real student presence",
    label: "Admissions story",
    description: "Human photos make the website feel trustworthy, local, and emotionally connected.",
  },
  {
    src: "/images/IMG-20260113-WA0009.jpg",
    title: "Learning community",
    label: "Classroom energy",
    description: "Authentic moments support the promise of practical, mentored, community-based training.",
  },
  {
    src: "/images/FB_IMG_1767876078874.jpg",
    title: "ECD transformation",
    label: "Student journey",
    description: "These visuals help visitors imagine themselves joining the programme and progressing.",
  },
  {
    src: "/images/FB_IMG_1767876345564.jpg",
    title: "Proud milestones",
    label: "Growth moment",
    description: "A premium gallery gives the school more emotional credibility than generic stock imagery.",
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
          <p className="eyebrow">Real Lesia's media</p>
          <h2>Authentic visuals now power the premium story.</h2>
          <p>
            The uploaded photos and animated logo video are now used to make the website feel more real, more emotional, and more credible — replacing generic design with actual Lesia's brand assets.
          </p>
        </div>
        <div className="media-video-card">
          <video autoPlay muted loop playsInline preload="metadata" poster="/images/Enhance_logo_ultra_premium_2K_202607080538.jpeg">
            <source src="/images/Animate_the_logo._Cinematic_202607080543.mp4" type="video/mp4" />
          </video>
          <div className="video-caption">
            <span>Animated identity</span>
            <strong>Cinematic Lesia's brand motion</strong>
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
