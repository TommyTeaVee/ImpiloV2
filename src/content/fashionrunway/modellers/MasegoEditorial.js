import React from "react";

// CloudFront image URLs (Masego folder)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/hero.jpg";

const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/1.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/2.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/3.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/4.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/5.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/6.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/7.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Masego/8.jpg"
];

export default function MasegoEditorial() {
  return (
    <article
      className="editorial-page uk-article theme-lime glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header editorial-header">
        <h1>Masego Diseko</h1>
        <p className="article-subtitle">
          Fashion Model · Pageantry Winner · Youth Advocate
        </p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Passion, Posing, Purpose
        </p>
      </header>

      {/* Hero + Intro Paragraph */}
      <section className="article-content uk-grid-large" uk-grid="true">
        <div className="uk-width-1-3@m">
          <img
            src={heroImage}
            alt="Masego Diseko portrait"
            className="portrait-img"
          />
        </div>
        <div className="uk-width-2-3@m article-text">
          <h2>Editorial Bio</h2>
          <p>
            I am Masego Diseko, a passionate model from South Africa. I fell in love
            with posing in front of the camera from a young age, inspired by Tyra Banks.
            Height didn’t define me; perseverance did. My modeling journey began in 2020
            with Ace Models and introduced me to runway, posing, and public speaking.
          </p>
        </div>
      </section>

      {/* Modelling & Pageantry Journey */}
      <section className="article-content glass-card">
        <h2>Pageantry & Career Highlights</h2>
        <p>
          In December 2020, I competed in my first pageant and was crowned Miss Thaba Nchu
          Queen. I then joined Belladiosa Agency, winning Miss Goldfields Supermodel Queen
          2022. I've walked for Omoda, GStaat Fashion Show, and worked with Twork Productions
          for portfolio shoots. Recently, I focused on commercial modeling in Gauteng and
          was a finalist in Miss Unity SA.
        </p>
      </section>

      {/* Advocacy & Personal */}
      <section className="article-content glass-card">
        <h2>Advocacy & Philosophy</h2>
        <p>
          Beyond modeling, I am passionate about mental health and youth empowerment,
          using my platform to inspire and uplift others. Every collaboration reflects
          my professionalism, creativity, and heart. I believe modeling is not only about
          posing but also about purpose and impact.
        </p>
      </section>

      {/* Gallery */}
      <section className="article-content">
        <h2>Gallery</h2>
        <div
          className="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="true"
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="glass-card">
              <img src={img} alt={`Masego ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Socials */}
      <section className="article-content glass-card">
        <h2>Contact & Socials</h2>
        <p>Based in Gauteng, South Africa</p>

        <p>
          <a
            href="mailto:masego.diseko@example.com"
            className="uk-icon-link"
            uk-icon="icon: mail"
          >
            masego.diseko@example.com
          </a>
        </p>

        <p>
          <a
            href="https://instagram.com/masego_diseko"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="instagram"
          >
            @masego_diseko
          </a>
        </p>
      </section>

      {/* Inspirational Quote */}
      <section className="article-content glass-card uk-text-center">
        <blockquote className="uk-h3 uk-text-italic">
          “Perseverance, passion, and purpose define my journey.”
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • 2025 • MODELS & PROFESSIONALS
      </footer>
    </article>
  );
}
