import { schedule, location } from "../data/workshopData";
import { CalendarVisual, LocationVisual } from "./visuals/WorkshopVisuals";

export default function LearnMorePanel({ expanded }) {
  return (
    <div
      className={`learn-more-wrapper ${expanded ? "is-expanded" : ""}`}
      aria-hidden={!expanded}
    >
      <div className="learn-more-inner">
        <div className="learn-more-panel">
          <div className="learn-more-section">
            <h3 className="learn-more-heading">Dates &amp; schedule</h3>
            <CalendarVisual days={schedule.days} />
            <ul className="schedule-list">
              {schedule.days.map((day) => (
                <li key={day.label} className="schedule-item">
                  <div className="schedule-label">{day.label}</div>
                  <div>
                    <strong>{day.date}</strong>
                    <span className="schedule-time">{day.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="learn-more-section">
            <h3 className="learn-more-heading">Location</h3>
            <LocationVisual />
            <p className="format-note">{location.format}</p>
            <div className="location-grid">
              <article className="location-card">
                <span className="location-tag">{location.inPerson.label}</span>
                <h4>
                  {location.inPerson.city}
                  <span className="location-venue">{location.inPerson.venue}</span>
                </h4>
              </article>
              <article className="location-card">
                <span className="location-tag">{location.virtual.label}</span>
                <h4>{location.virtual.detail}</h4>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
