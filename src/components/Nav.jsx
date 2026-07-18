import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import "./Nav.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark">&lt;/&gt;</span>
          {profile.name.split(" ")[0]}
        </a>

        <nav className="nav__links nav__links--desktop">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta nav__cta--desktop" href="#contact">
          Get in touch
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav__links nav__links--mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav__cta" onClick={() => setOpen(false)}>
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
