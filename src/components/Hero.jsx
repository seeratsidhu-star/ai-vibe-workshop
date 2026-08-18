import { useState } from "react";
import { hero, workshopMeta } from "../data/workshopData";
import { scrollToSection } from "../hooks/useActiveSection";
import LearnMorePanel from "./LearnMorePanel";
import { HeroIllustration } from "./visuals/HeroIllustration";

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="pulse" />
            {workshopMeta.badge}
          </div>
          <h1>
            {hero.headline}
            <br />
            <span className="display-accent">{hero.subheadline}</span>
            <span className="hero-audience">{workshopMeta.audience}</span>
          </h1>
          <p className="hero-lead">{hero.lead}</p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-secondary"
              aria-expanded={expanded}
              aria-controls="learn-more-panel"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Show less" : "Learn more"}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToSection("register")}
            >
              Register now
            </button>
          </div>
        </div>
        <HeroIllustration />
      </div>
      <div id="learn-more-panel">
        <LearnMorePanel expanded={expanded} />
      </div>
    </section>
  );
}
