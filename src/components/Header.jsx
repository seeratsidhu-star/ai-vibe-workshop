import { navLinks } from "../data/workshopData";
import { scrollToSection, useActiveSection } from "../hooks/useActiveSection";

export default function Header() {
  const sectionIds = navLinks.map((link) => link.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="site-header">
      <button
        type="button"
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        AI Vibe<span>Code</span>
      </button>
      <nav className="nav" aria-label="Main">
        {navLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            className={`nav-link ${activeId === link.id ? "is-active" : ""}`}
            aria-current={activeId === link.id ? "true" : undefined}
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </button>
        ))}
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => scrollToSection("register")}
        >
          Register
        </button>
      </nav>
    </header>
  );
}
