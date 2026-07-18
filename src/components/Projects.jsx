import { projects } from "../data/portfolio";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">03 · Projects</p>
          <h2 className="section-title">
            Things I've <span>built</span>.
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__top">
                <span className="project-card__period">{project.period}</span>
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View code ↗
                  </a>
                )}
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="project-card__stack">
                {project.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
