import React from "react";

// Hero and gallery images (replace with CloudFront links)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0052.jpg";

const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/1.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/2.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/3.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/4.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/5.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/6.jpg"
];

export default function KgothatsoEditorial() {
  return (
    <article
      className="editorial-page uk-article theme-gold glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header
        className="article-header editorial-header"
        style={{
          background: "linear-gradient(90deg, #c0c0c0, #e0e0e0)",
          color: "#1c1c1c"
        }}
      >
        <h1>Kgothatso Mantsho</h1>
        <p className="article-subtitle">
          Model & Singer · Mental Health Advocate
        </p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Inspiring Mind & Body Wellness
        </p>
      </header>

      {/* Hero + Intro Paragraph */}
      <section className="article-content uk-grid-large" uk-grid="true">
        <div className="uk-width-1-3@m uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover">
          <img
            src={heroImage}
            alt="Kgothatso Mantsho"
            className="portrait-img glass-card"
          />
        </div>
        <div className="uk-width-2-3@m article-text glass-card">
          <h2>About Me</h2>
          <p>
            I am Kgothatso Mantsho, a 21-year-old model and singer from
            Polokwane, South Africa. From a young age, I have been passionate
            about fashion, music, and self-expression. My work is driven by a
            desire to inspire others and make a meaningful impact in the creative
            industry.
          </p>
          <p>
            Beyond my artistic pursuits, I am a dedicated advocate for mental
            health awareness and physical wellness. I believe taking care of one’s
            mind and body is essential for personal growth and creative excellence.
          </p>
        </div>
      </section>

      {/* Interests & Vision */}
      <section className="article-content glass-card">
        <h2>Interests & Vision</h2>
        <ul>
          <li>Modeling: Editorial and commercial projects</li>
          <li>Singing: Musical performance and vocal expression</li>
          <li>Mental Health Advocacy: Raising awareness and supporting youth</li>
          <li>Physical Fitness: Maintaining a healthy lifestyle</li>
          <li>Inspiring Others: Motivating and guiding young talent</li>
        </ul>
        <p>
          My vision is to inspire young people to prioritize their mental and
          physical wellbeing while embracing their unique talents. Through
          modeling, music, and advocacy, I aim to empower others to take control
          of their health and pursue their dreams.
        </p>
      </section>

      {/* Gallery */}
      <section
        className="article-content uk-grid-small uk-child-width-1-2@s"
        uk-grid="true"
      >
        {galleryImages.map((img, i) => (
          <div key={i} className="glass-card">
            <img src={img} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Contact & Socials */}
      <section className="article-content glass-card">
        <h2>Contact & Socials</h2>
        <p>Based in Polokwane, South Africa</p>
        <p>
          <a
            href="mailto:kgothatso.m@example.com"
            className="uk-icon-link"
            uk-icon="mail"
          >
            kgothatso.m@example.com
          </a>
        </p>
        <p>
          <a
            href="https://instagram.com/Kgothatso.Mantsho"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="instagram"
          >
            @Kgothatso.Mantsho
          </a>
        </p>
        <p>
          <a
            href="https://www.tiktok.com/@Kgothatso.Mantsho"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="twitter"
          >
            @Kgothatso.Mantsho
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • 2025
      </footer>
    </article>
  );
}
