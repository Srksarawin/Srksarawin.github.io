import { education, certifications, publications } from "../data/portfolio";
import "./Credentials.css";

export default function Credentials() {
  return (
    <section id="credentials" className="section credentials">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">04 · Credentials</p>
          <h2 className="section-title">
            Education & <span>recognition</span>.
          </h2>
        </div>

        <div className="credentials__grid">
          <div className="cred-block">
            <h3 className="cred-block__title">Education</h3>
            <ul className="cred-list">
              {education.map((e) => (
                <li key={e.school} className="cred-item">
                  <p className="cred-item__primary">{e.degree}</p>
                  <p className="cred-item__secondary">
                    {e.school} <span className="dot-sep">·</span> {e.location}
                  </p>
                  <p className="cred-item__period">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="cred-block">
            <h3 className="cred-block__title">Certifications</h3>
            <ul className="cred-list">
              {certifications.map((c) => (
                <li key={c} className="cred-item cred-item--simple">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="cred-block">
            <h3 className="cred-block__title">Publications</h3>
            <ul className="cred-list">
              {publications.map((p) => (
                <li key={p.title} className="cred-item">
                  <p className="cred-item__primary">{p.title}</p>
                  <p className="cred-item__secondary">{p.venue}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
