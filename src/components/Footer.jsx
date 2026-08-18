import { workshopMeta } from "../data/workshopData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {workshopMeta.title} {workshopMeta.audience} · {workshopMeta.datesLabel}
      </p>
    </footer>
  );
}
