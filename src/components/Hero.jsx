import { useEffect, useState } from "react";
import { profile, stats } from "../data/portfolio";
import NeuralBackground from "./NeuralBackground";
import "./Hero.css";

// Types out each focus area, pauses, deletes, moves to the next.
function useTypewriter(words, { typeMs = 55, deleteMs = 30, holdMs = 1400 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeMs);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteMs);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.focusAreas);

  return (
    <section id="top" className="hero">
      <NeuralBackground />
      <div className="container hero__inner">
        <div className="hero__terminal" aria-hidden="true">
          <div className="hero__terminal-bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="hero__terminal-title">profile.init</span>
          </div>
          <div className="hero__terminal-body">
            <p><span className="prompt">$</span> whoami</p>
            <p className="out">{profile.name} — {profile.role}</p>
            <p><span className="prompt">$</span> focus --list</p>
            <p className="out">
              <span className="accent">{typed}</span>
              <span className="cursor">▌</span>
            </p>
          </div>
        </div>

        <p className="eyebrow">{profile.location}</p>
        <h1 className="hero__title">
          Hi, I'm {profile.name.split(" ")[0]}.<br />
          I engineer <span className="accent-grad">intelligent systems</span>.
        </h1>
        <p className="hero__subtitle">{profile.summary}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Contact Me
          </a>
        </div>

        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
