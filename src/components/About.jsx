import { profile, skills } from "../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">01 · About</p>
          <h2 className="section-title">
            From <span>models</span> to <span>production</span>.
          </h2>
        </div>

        <div className="about__grid">
          <p className="about__text">{profile.summary}</p>

          <div className="skills">
            {skills.map((group) => (
              <div key={group.category} className="skills__group">
                <h3 className="skills__category">{group.category}</h3>
                <ul className="skills__list">
                  {group.items.map((item) => (
                    <li key={item} className="skills__chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
