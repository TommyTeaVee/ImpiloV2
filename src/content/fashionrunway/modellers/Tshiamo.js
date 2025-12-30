import React from "react";

// Hero image (replace with final CloudFront image)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Tshiamo/IMG-20251227-WA0110.jpg";



export default function TshiamoEditorial() {
  return (
    <article
      className="
        editorial-page
        uk-article
        glass-card
       
        gradient-lead-gloss
      "
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header uk-text-center uk-light   theme-gold-dark">
        <h1>Tshiamo Nkadimeng</h1>
        <p className="article-subtitle">
          Lead Creative · Cinematic Storyteller · Visual Artist
        </p>
      
      </header>

      {/* Hero */}
      <section className="article-hero">
        <img src={heroImage} alt="Tshiamo Nkadimeng" />
      </section>

      {/* Editorial Content */}
      <section className="article-content uk-width-1-2m">
        <div className="article-text glass-card">
          <h2>Editorial Bio</h2>
          <blockquote className="article-subtitle editorial-quote uk-width-1-2@m">
          Building worlds with purpose, precision, and heart.
        </blockquote>
          <p className="uk-dropped">
            I am Tshiamo Nkadimeng, a storyteller driven by memory, meaning, and
            the quiet power that lives beneath the surface. My work exists at the
            intersection of emotion, identity, and visual depth — where
            storytelling becomes an immersive experience rather than a moment.
          </p>

          <p>
            I create with intention. Every frame, movement, and silence is
            purposeful, grounded in lived experience and emotional truth. I am
            not interested in spectacle for spectacle’s sake — I am interested
            in resonance.
          </p>

          <h2>Creative Practice & Vision</h2>
          <p>
            My creative approach is rooted in depth and detail. I build
            narratives that feel spiritual, thoughtful, and honest — stories
            that unfold slowly, allowing space for reflection and connection.
            Presence is essential in my work; I believe what is felt often speaks
            louder than what is shown.
          </p>

          <p>
            Through visual storytelling, I explore themes of reclamation,
            resilience, and dignity. My work challenges erasure, restores memory,
            and honors untold stories — especially those shaped by ancestry,
            power, and identity.
          </p>

          <h2>Current Focus</h2>
          <p>
            I am currently developing original cinematic projects that explore
            power, ancestry, and selfhood in ways that are bold, intimate, and
            unapologetically alive. These works are designed not only to be seen,
            but to be felt — to linger long after the frame fades.
          </p>

          <p>
            As a lead creative within Impilo’s ecosystem, my role extends beyond
            performance. I contribute to shaping visual language, narrative
            direction, and long-term creative vision across projects.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="article-footer uk-text-center">
        IMPILO MAGAZINE • LEAD CREATIVE • 2025
      </footer>
    </article>
  );
}
