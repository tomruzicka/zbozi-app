import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">O aplikaci</h1>
      <p>
        Aplikace vytvořena pro
        <a
          href="http://www.seznam.cz"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Seznam.cz&nbsp;
        </a>
        jako materiál pro výběrové řízení.
      </p>
    </section>
  );
};

export default About;
