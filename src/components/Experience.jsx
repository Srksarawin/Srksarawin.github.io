import { experience } from "../data/portfolio";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">02 · Experience</p>
          <h2 className="section-title">
            Career <span>timeline</span>.
          </h2>
        </div>

        <ol className="timeline">
          {experience.map((role, i) => (
            <li key={role.role + role.org} className="timeline__item">
              <div className="timeline__marker">
                <span className="timeline__index">{String(i + 1).padStart(2, "0")}</span>
                <span className="timeline__line" />
              </div>

              <div className="timeline__card">
                <div className="timeline__card-head">
                  <div>
                    <h3 className="timeline__role">{role.role}</h3>
                    <p className="timeline__org">
                      {role.org} <span className="dot-sep">·</span> {role.location}
                    </p>
                  </div>
                  <span className="timeline__period">{role.period}</span>
                </div>

                <ul className="timeline__points">
                  {role.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className="timeline__tags">
                  {role.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
