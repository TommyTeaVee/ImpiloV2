import React from "react";

// CloudFront image URLs (Muhammed folder)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Muhammed/1000073096.jpg";

const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Muhammed/1.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Muhammed/2.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Muhammed/3.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Muhammed/4.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Muhammed/5.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Muhammed/6.jpg"
];

export default function MomoEditorial() {
  return (
    <article
      className="editorial-page uk-article  glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header editorial-header uk-light theme-dark-blue">
        <h1>Muhammed Anver Allie</h1>
        <p className="article-subtitle">
          Fashion Model · Commercial Performer · Visual Storyteller
        </p>
       
      </header>

      {/* Intro: Portrait + Text */}
      <section className="article-content  uk-grid-item-match uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" uk-grid="true">
        <div className="uk-width-1-2 uk-height-medium uk-flex uk-flex-center uk-flex-middle  uk-grid-item-match">
          <img
            src={heroImage}
            alt="Muhammed portrait"
            className="portrait-img"
          />
        </div>

        <div className="uk-child-width-1-1 uk-text-justify article-text glass-card">
          <h2>Editorial Bio</h2>
          <p className="uk-dropcap">
            My name is Muhammed Anver Allie. Modelling has always been more than
            an interest to me — it is a passion rooted in my love for art and
            self-expression. I am inspired by the power models hold to influence
            perception, tell stories, and create meaningful change.
          </p>
          <p>
            What drew me to this industry, and what continues to motivate me, is
            the ability to exist as both a canvas and a voice. Modelling allows
            me to communicate emotion, narrative, and identity without saying a
            word.
          </p>
        </div>
      </section>
{/* Philosophy Quote */}
      <section className="article-content  uk-grid-item-match uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top ">
        <blockquote className="uk-h3 uk-text-italic editorial-quote uk-width-1-2@m ">
          “Modelling is like painting. It isn’t only about how the final piece
          looks — it’s about how it makes people feel.”
        </blockquote>
    
      {/* Artistic Philosophy */}
      <div className="article-content glass-card">
        <h2>Art, Authenticity & Presence</h2>
        <p>
          To me, modelling matters because it is art. It is a space where I get
          to express myself simply by being myself — fully and unapologetically.
          I show up with my uniqueness, my strengths, and even my insecurities,
          because I believe authenticity is what gives art its impact.
        </p>
        <p>
          Every frame becomes a moment of honesty. Every project becomes a
          reflection of growth, intention, and emotional truth.
        </p>
      </div>
</section>
      {/* Journey & Experience */}
      <section className="article-content article-text">
        <h2>Journey & Professional Growth</h2>
        <p>
          My journey has been shaped by consistent growth through portfolio
          shoots with Mrs. Tyla Smith, editorial work, and performance-based
          experiences. I am currently represented by <strong>33andMe Talent Agency</strong> and have been cast as a background actor in a Betway commercial.
        </p>
        <p>
          I attended the International Arts Talent Showcase, where I performed
          in a TV commercial and participated in a commercial runway. I was
          honoured to place in the <strong>Top 10 Best Commercial Runway</strong>,
          and to receive a callback from New York — a moment that affirmed my
          direction and discipline.
        </p>
        <p>
          Additional editorial work, including a styled shoot with Tweak and
          Style, has further strengthened my understanding of collaboration,
          styling, and visual storytelling.
        </p>
      </section>

      {/* Challenges & Mindset */}
      <section className="article-content glass-card">
        <h2>Resilience & Perspective</h2>
        <p>
          Like many in this industry, I’ve had to learn how to navigate
          rejection. Modelling requires thick skin — not every casting is meant
          for you, and not every client is looking for your specific look.
        </p>
        <p>
          I’ve learned that rejection is not a reflection of worth, but simply
          a matter of fit. The right opportunities will always find you when the
          timing aligns.
        </p>
        <p>
          Modelling is a slow-burn journey that demands patience, consistency,
          and trust in the process. My look continues to evolve, shaped by
          experience, confidence, and self-assurance.
        </p>
      </section>

      {/* Support System */}
      <section className="article-content article-text">
        <h2>Community & Gratitude</h2>
        <p>
          I would not be where I am today without the encouragement of my
          mother, my family, my friends, and the community I’ve built along the
          way. Their belief in me, alongside the support of fellow models,
          actors, and my agency, has been instrumental in strengthening my
          confidence.
        </p>
        <p>
          Their support reminds me why I started — and why I continue.
        </p>
      </section>

      

      {/* Gallery */}
      <section className="article-content">
        <h2>Visual Portfolio</h2>
        <div
          className="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="true"
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="glass-card">
              <img src={img} alt={`Muhammed ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • FASHION • PERFORMANCE • CULTURE • 2025
      </footer>
    </article>
  );
}
