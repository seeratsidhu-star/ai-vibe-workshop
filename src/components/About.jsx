import { about } from "../data/workshopData";
import { AboutVisual, MetaIcon } from "./visuals/WorkshopVisuals";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-header-row">
        <div>
          <div className="section-label">About the workshop</div>
          <h2>{about.title}</h2>
          <p className="section-intro">{about.intro}</p>
        </div>
      </div>

      <div className="bento-grid">
        {about.cards.map((card, i) => (
          <article
            key={card.title}
            className={`bento-card bento-tilt-${i + 1} ${card.span === "wide" ? "bento-wide" : ""}`}
          >
            <AboutVisual type={card.visual} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>

      <div className="meta-strip">
        {about.meta.map((item) => (
          <div key={item.label} className="meta-item">
            <MetaIcon label={item.label} />
            <span className="meta-label">{item.label}</span>
            <span className="meta-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
