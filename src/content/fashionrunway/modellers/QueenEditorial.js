import React from "react";

// Example hero image (replace when ready)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/hero.jpg";

export default function LeratoDaviesEditorial() {
  return (
    <article
      className="editorial-page uk-article theme-midnight glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* HEADER */}
      <header className="article-header editorial-header">
        <h1>Lerato Davies</h1>
        <p className="article-subtitle">
          Fashion Model · Actress · Content Creator
        </p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Gauteng Province, South Africa
        </p>
      </header>

      {/* HERO */}
      <section className="editorial-hero">
        <img src={heroImage} alt="Lerato Davies Editorial Portrait" />
      </section>

      {/* CONTENT */}
      <section className="article-content">
        <div className="article-text">
          <h2>Editorial Profile</h2>
          <p>
            Lerato Davies is a 27-year-old fashion model from Gauteng whose
            presence in front of the camera is both confident and magnetic.
            Crowned <strong>Miss Kagiso 2020/21</strong>, she represents a new
            generation of models who move effortlessly between pageantry,
            fashion, and digital influence.
          </p>

          <p>
            Her love for the lens is unmistakable — photoshoots are not just
            work, but a space where she fully expresses her identity, style, and
            ambition. Whether styled for high-fashion editorials or raw street
            visuals, Lerato understands how to command a frame.
          </p>

          <h2>Fashion, Influence & Digital Power</h2>
          <p>
            Recognised as the <strong>Best Model of Miss Kagiso</strong> and
            crowned <strong>Miss Inspiration SA – Top Social Media Engager</strong>,
            Lerato has mastered the art of modern visibility. Her content
            creation game is strong, intentional, and authentic — blending
            fashion storytelling with lifestyle culture.
          </p>

          <p>
            When she’s not working, she can be found collaborating with fellow
            models, exchanging creative energy, or exploring emerging fashion
            trends that shape her evolving aesthetic.
          </p>

          <h2>On Screen & On the Streets</h2>
          <p>
            Lerato’s talents extend beyond modeling into acting, where she has
            secured extra roles on some of South Africa’s most iconic television
            productions, including <em>Skeem Saam</em>, <em>House of Zwide</em>,
            and <em>Generations: The Legacy</em>.
          </p>

          <p>
            Off set, her creative heart belongs to the streets of Soweto and
            Kagiso. Through vintage-inspired outdoor shoots, she captures the
            soul of township life — translating nostalgia, glamour, and
            movement into striking visual stories shared with her audience.
          </p>

          <blockquote className="editorial-quote">
            “I bring retro glamour to the streets — and let the city tell the story.”
          </blockquote>
        </div>
      </section>

      {/* CONTACT & SOCIALS */}
      <section className="article-content glass-card">
        <h2>Contact & Socials</h2>

        <p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
          >
            <span uk-icon="icon: facebook"></span>
            Lerato Davies
          </a>
        </p>

        <p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
          >
            <span uk-icon="icon: instagram"></span>
            @lerato_davies
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="article-footer">
        IMPILO MAGAZINE • NOIR EDITORIAL SERIES
      </footer>
    </article>
  );
}
    