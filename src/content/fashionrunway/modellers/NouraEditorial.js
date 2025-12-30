import React from "react";

// Example hero image (replace when ready)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Noura/hero.jpg";

export default function NouraEditorial() {
  return (
    <article
      className="editorial-page uk-article theme-midnight glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* HEADER */}
      <header className="article-header editorial-header">
        <h1>Noura Isumu</h1>
        <p className="article-subtitle">
          Model · Actress · Wardrobe Whisperer
        </p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Johannesburg, South Africa
        </p>
      </header>

      {/* HERO */}
      <section className="editorial-hero">
        <img src={heroImage} alt="Noura Isumu Editorial Portrait" />
      </section>

      {/* CONTENT */}
      <section className="article-content">
        <div className="article-text">
          <h2>Editorial Profile</h2>
          <p>
            Noura Isumu is a Johannesburg-based model, actress, and creative
            professional whose work spans both the spotlight and the shadows
            behind the scenes. Her journey through visual storytelling has
            allowed her to experience every layer of the fashion and film
            worlds — from commanding the runway to shaping characters through
            wardrobe and design.
          </p>

          <p>
            She began modeling at a young age, navigating Johannesburg’s vibrant
            creative landscape while developing a deep understanding of camera,
            movement, and presence. Acting followed naturally — allowing her to
            explore emotion, character, and narrative in ways that transcend
            surface-level performance.
          </p>

          <h2>Wardrobe & Creative Craft</h2>
          <p>
            Beyond the lens, Noura’s creative strength lives within the wardrobe
            space. As part of the <strong>Empini Style Squad</strong>, she works
            within the Wardrobe Department, where fabric, function, and fantasy
            come together to define character and mood.
          </p>

          <p>
            Her approach to wardrobe is intentional and expressive — transforming
            garments into extensions of identity. Each costume becomes a visual
            language, each outfit a story waiting to unfold.
          </p>

          <h2>Creative Philosophy</h2>
          <p>
            Whether front-facing or behind the scenes, Noura brings soul,
            discipline, and depth to every frame. She understands that visual
            storytelling is not only about what is seen, but what is felt.
          </p>

          <blockquote className="editorial-quote">
            “I don’t just wear the story — I help build it.”
          </blockquote>
        </div>
      </section>

      {/* CONTACT & SOCIALS */}
      <section className="article-content glass-card">
        <h2>Contact & Socials</h2>

        <p>
          <a
            href="https://www.facebook.com/LesediKekana"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
          >
            <span uk-icon="icon: facebook"></span>
            Lesedi Kekana (Noura Isumu)
          </a>
        </p>

        <p>
          <a
            href="https://instagram.com/noura_isumu2"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
          >
            <span uk-icon="icon: instagram"></span>
            @noura_isumu2
          </a>
        </p>

        <p>
          <a
            href="https://www.tiktok.com/@anastasia_millicent25"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
          >
            <span uk-icon="icon: tiktok"></span>
            @anastasia_millicent25
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
