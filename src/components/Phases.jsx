import { Fragment } from "react";
import { phases } from "../data/workshopData";
import { PhaseTimeline, PhaseVisual } from "./visuals/WorkshopVisuals";

function PhaseCard({ phase, index }) {
  return (
    <li className={`phase-card phase-tilt-${index + 1}`}>
      <PhaseVisual index={index} />
      <div className="phase-content">
        <div className="phase-meta-row">
          <span className="phase-number-badge">{phase.number}</span>
          <span className="phase-tag">{phase.tag}</span>
          <span className={`phase-time-badge phase-time-${phase.timeSlot}`}>
            {phase.timeBadge}
          </span>
          <span className="phase-duration">{phase.duration}</span>
        </div>
        <h3>{phase.title}</h3>
        <p className="phase-outcome">
          <span className="phase-outcome-label">Outcome</span>
          {phase.outcome}
        </p>
        <p className="phase-description">{phase.description}</p>
        <ul className="phase-tags" aria-label={`Topics for ${phase.title}`}>
          {phase.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Phases() {
  return (
    <section id="phases" className="section phases" aria-labelledby="phases-heading">
      <div className="section-label">Phased approach</div>
      <h2 id="phases-heading">{phases.title}</h2>
      <p className="section-intro">{phases.intro}</p>

      <PhaseTimeline items={phases.items} />

      <ol className="phase-list">
        {phases.items.map((phase, i) => (
          <Fragment key={phase.number}>
            {i === 2 && (
              <li className="phase-day-divider" aria-hidden="true">
                <span>Day 2 · Aug 18</span>
              </li>
            )}
            <PhaseCard phase={phase} index={i} />
          </Fragment>
        ))}
      </ol>
    </section>
  );
}
