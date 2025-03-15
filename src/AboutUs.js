import React from "react";
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Left Side - Text Content */}
      <div className="about-text">
        <h2>О НАС</h2>
        <p>
          <strong>Какая-то компания -</strong> стартап IT компания, занимающаяся
          разработкой сторонних решений.
        </p>
        <p>
          Мы придерживаемся подходов TDD, DDD, Clean Code. Качество всегда в
          приоритете.
        </p>
      </div>

      {/* Right Side - Image (Replace src with actual image) */}
      <div className="about-image">
        <img src="/bgp.png" alt="Company" />
      </div>
    </section>
  );
};

export default AboutUs;
