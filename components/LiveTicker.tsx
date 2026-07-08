const tickerItems = [
  "2025/2026 intake open",
  "Level 4 FET Certificate",
  "Level 5 National Diploma",
  "Saturday-only learning",
  "Soshanguve Block K campus",
  "Hammanskraal campus",
  "WhatsApp admissions support",
  "Start your ECD career with confidence",
];

export default function LiveTicker() {
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className="live-ticker" aria-label="Lesia's Educational Services live admissions ticker">
      <div className="ticker-status">
        <span /> Live admissions update
      </div>
      <div className="ticker-window">
        <div className="ticker-track">
          {repeatedItems.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
