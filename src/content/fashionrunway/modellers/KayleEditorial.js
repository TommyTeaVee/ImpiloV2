import React from "react";

// CloudFront image placeholders (replace with final URLs)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kaylle/hero.jpg";

export default function KaylleEditorial() {
  return (
    <article
      className="
        editorial-page
        uk-article
        glass-card
        theme-rose-gold
        gradient-soft-gloss
      "
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header uk-text-center uk-light theme-red-wine">
        <h1>Kaylle Precious Monry</h1>
        <p className="article-subtitle">
          "Commercial Model · Fashion Model"
        </p>
       
      </header>

      {/* Hero Image */}
      <section className="article-hero">
        <img src={heroImage} alt="Kaylle Precious Monry" />
      </section>
 <blockquote className="editorial-quote uk-text-muted">
          "Elevating Style, Embracing Authenticity".
        </blockquote>
      {/* Editorial Content */}
      <section className="article-content">
        <div className="article-text glass-card">
          <h2>Editorial Bio</h2>
          <p>
            I am Kaylle Precious Monry, a 19-year-old commercial and fashion model
            born and raised in Johannesburg, South Africa, currently based in
            Vosloorus. From an early stage in my journey, I discovered a strong
            connection to the runway — a space where confidence, presence, and
            self-expression come together.
          </p>

          <p>
            I pride myself on owning every runway with a captivating presence
            that is both poised and powerful. Modeling, for me, is not only about
            appearance — it is about energy, discipline, and the ability to
            translate emotion through movement and stillness.
          </p>

          <h2>Professional Strengths</h2>
          <p>
            Adaptability is one of my strongest qualities. I am comfortable
            working under pressure, handling last-minute shoots, and performing
            in unpredictable environments — including challenging weather
            conditions. I approach every project with professionalism, focus,
            and a solution-driven mindset.
          </p>

          <p>
            Beyond the camera, I value relationships. I actively build strong
            connections with clients, photographers, creative teams, and fellow
            models, understanding that collaboration and trust are essential in
            this industry.
          </p>
<h2>Inspiration & Style</h2>
          <p>
            Inspired by industry icons like Alex Consani and Anok Yai, Kaylle
            approaches modeling not just as a career, but as a medium for
            self-expression and storytelling. Their influence has instilled in
            her confidence and an effortless style that captivates audiences
            with every appearance.
          </p>
          
          <h2>Creative Identity</h2>
          <p>
            My work is defined by versatility and presence. I bring a unique
            balance of elegance and edge to every project I undertake — whether
            on the runway, in editorial settings, or within commercial campaigns.
            Each opportunity is a chance to grow, refine my craft, and elevate
            the story being told.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="article-footer uk-text-center">
        IMPILO MAGAZINE • MODEL EDITORIAL • 2025
      </footer>
    </article>
  );
}
