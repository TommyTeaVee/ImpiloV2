import React from "react";

// CloudFront image URLs (Alex folder)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597235561_25468893126083089_8798243625842166663_n.jpg";

const galleryImages = [
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597235561_25468893126083089_8798243625842166663_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597613140_1174187981033040_6470994187745984638_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597723630_2243718366128208_8143169235445074438_n.jpg",
   "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597723630_2243718366128208_8143169235445074438_n.jpg"
];

export default function AlexEditorial() {
  return (
    <article
      className="editorial-page uk-article theme-gold glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header editorial-header">
        <h1>Alex Major</h1>
        <p className="article-subtitle">
          Fashion Model · Transformation · Self-Expression
        </p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Resilience over perfection.
        </p>
      </header>

      {/* Intro: Portrait + Story */}
      <section className="article-content uk-grid-large" uk-grid="true">
        <div className="uk-width-1-3@m">
          <img
            src={heroImage}
            alt="Alex Major portrait"
            className="portrait-img"
          />
        </div>

        <div className="uk-width-2-3@m article-text">
          <h2>Editorial Bio</h2>
          <p className="uk-dropcap">
            For years, I lived inside a body that felt like it was working
            against me. Severe acne covered my face, and with it came a level of
            broken confidence that made even eye contact feel impossible.
          </p>
          <p>
            When I walked down the street, my head was always down — my focus
            fixed on my feet, hoping to go unnoticed, hoping to disappear into
            the background.
          </p>
        </div>
      </section>

      {/* Struggle & Reality */}
      <section className="article-content glass-card">
        <h2>Living Inside the Struggle</h2>
        <p>
          At the same time, my weight was quietly controlling my life. I reached
          25 stone (125 kilograms) and felt trapped in a constant cycle of
          eating. I would eat up to fifteen times a day — never feeling full,
          never feeling satisfied.
        </p>
        <p>
          Food became a way to fill something much deeper than hunger. It was a
          coping mechanism, a temporary comfort in a body and mind that felt
          disconnected.
        </p>
      </section>

      {/* Turning Point */}
      <section className="article-content article-text">
        <h2>The Turning Point</h2>
        <p>
          Everything began to change the day I saw images of models who looked
          confident, strong, and free in their own skin. Instead of feeling
          discouraged, something unexpected happened — I felt inspired.
        </p>
        <p>
          For the first time, I allowed myself to imagine a different future.
          One where I didn’t hide. One where I was proud of who I was becoming.
        </p>
        <p>
          That moment became a turning point. I made a decision to change my
          life — not just physically, but mentally and emotionally.
        </p>
      </section>

      {/* Growth & Discipline */}
      <section className="article-content glass-card">
        <h2>Discipline, Growth & Identity</h2>
        <p>
          I began working towards my dreams with discipline, patience, and
          self-belief. The journey wasn’t easy — it demanded consistency,
          resilience, and uncomfortable self-reflection.
        </p>
        <p>
          But it was worth every step. Each day became a choice to show up for
          myself, even when doubt was loud.
        </p>
      </section>

      {/* Vision */}
      <section className="article-content article-text">
        <h2>Vision & Purpose</h2>
        <p>
          Today, my goal is clear: to become a known model and to prove that your
          past does not define your future.
        </p>
        <p>
          My story is not about perfection. It is about resilience,
          self-growth, and the courage to choose yourself — even when it feels
          impossible.
        </p>
      </section>

      {/* Quote */}
      <section className="article-content glass-card uk-text-center">
        <blockquote className="uk-h3 uk-text-italic">
          “Transformation begins the moment you believe you deserve more.”
        </blockquote>
      </section>

      {/* Gallery */}
      <section className="article-content">
        <h2>Visual Evolution</h2>
        <div
          className="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="true"
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="glass-card">
              <img src={img} alt={`Alex ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • TRANSFORMATION • FASHION • 2025
      </footer>
    </article>
  );
}
