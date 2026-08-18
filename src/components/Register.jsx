import { useState } from "react";
import { register } from "../data/workshopData";
import { RegisterVisual } from "./visuals/WorkshopVisuals";

export default function Register() {
  const [toast, setToast] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    setToast(
      `Thanks, ${name}! You're registered for 17–18 Aug 2026. Check your email for details.`
    );
    e.target.reset();
    setTimeout(() => setToast(""), 4500);
  }

  return (
    <>
      <section id="register" className="section register">
        <div className="register-card">
          <div className="register-copy">
            <RegisterVisual />
            <div className="section-label">Join us</div>
            <h2>{register.title}</h2>
            <p>{register.description}</p>
          </div>
          <form className="register-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Design background
              <select name="designBackground" required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {register.designBackgrounds.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Experience level
              <select name="experience" required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {register.experienceLevels.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn btn-primary btn-full">
              Register for workshop
            </button>
            <p className="form-note">
              We'll send confirmation and prep details to your inbox.
            </p>
          </form>
        </div>
      </section>

      <div
        className={`toast ${toast ? "show" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </>
  );
}
