import { profile } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contact" className="section contact">
        <div className="container contact__inner">
          <p className="eyebrow">05 · Contact</p>
          <h2 className="contact__title">
            Let's build something <span>intelligent</span> together.
          </h2>
          <p className="contact__subtitle">
            Open to AI/ML engineering roles, freelance builds, and interesting collaborations.
          </p>

          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="btn btn--ghost">
              {profile.phone}
            </a>
          </div>

          <div className="contact__socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {year} {profile.name}. Built with React.</span>
          <span className="footer__status">
            <span className="status-dot" /> Available for opportunities
          </span>
        </div>
      </footer>
    </>
  );
}
