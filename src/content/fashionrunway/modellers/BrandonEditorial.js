import React from "react";

// CloudFront image URLs (Brandon folder)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Brandon/hero.jpg";

const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Brandon/1.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Brandon/2.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Brandon/3.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Brandon/4.jpg"
];

export default function BrandonEditorial() {
  return (
    <article
      className="editorial-page uk-article  gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="theme-dark-blue uk-light">
        <h1>BRANDON MAZULA</h1>
        <h4 className="article-subtitle">
          Fashion · Runway · Commercial · Editorial
        </h4>
      </header>

      {/* Intro: Portrait + Story */}
      <section
        className="article-content uk-grid-item-match uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top"
        uk-grid="true"
      >
        <div
          className="uk-width-1-2 uk-height-medium uk-flex uk-flex-center uk-flex-middle"
          style={{ height: "500px" }}
        >
          <img
            src={heroImage}
            alt="Brandon Mazula portrait"
            className="portrait-img"
          />
        </div>

        <div className="uk-child-width-1-1 uk-text-justify article-text glass-card">
          <h2>Editorial Bio</h2>
          <p className="uk-dropcap">
            My name is Brandon Sindiso Mazula, a Johannesburg-based model working
            across fashion, runway, commercial, and editorial spaces within the
            South African creative industry.
          </p>
          <p>
            With over two years of experience, I bring a commanding presence to
            every set and catwalk — defined by confidence, intention, and an
            expressive face that translates emotion into imagery.
          </p>

          <blockquote className="editorial-quote uk-width-1-2@m">
            “Presence turns movement into story.”
          </blockquote>
        </div>
      </section>

      {/* Runway & Fashion */}
      <section className="article-content glass-card">
        <h2>Runway & Fashion Presence</h2>
        <p>
          The runway is where my discipline and confidence come alive. I am
          recognised for a strong, controlled stride that commands attention
          while maintaining elegance and precision.
        </p>
        <p>
          Each walk is approached as performance — measured, expressive, and
          grounded in storytelling through movement.
        </p>
      </section>

      {/* Editorial & Camera */}
      <section className="article-content article-text">
        <h2>Editorial & On-Camera Work</h2>
        <p>
          Editorial work allows me to explore character, mood, and narrative.
          My ability to shift expression and embody visual direction has enabled
          me to build a growing portfolio of high-impact collaborations.
        </p>
        <p>
          I was featured in <strong>Impilo Magazine</strong>, marking a defining
          milestone in my editorial journey and reinforcing my commitment to
          growth within the industry.
        </p>
      </section>
<section
  className="article-content editorial-avatar-row uk-grid-small uk-grid-match glass-card"
  uk-grid="true"
>
  {/* Avatar column */}
  <div className="uk-width-1-4@m uk-width-1-3@s uk-flex uk-flex-center uk-flex-middle">
    <div className="avatar-wrapper">
      <img
        src={heroImage}
        alt="Abenathi Cawe portrait"
        className="editorial-avatar uk-border-pill"
      />
    </div>
  </div>

  {/* Text column */}
  <div className="uk-width-expand uk-flex uk-flex-middle uk-width-1-3@s">
    <div className="editorial-text-block">

      <blockquote className="editorial-quote">
        “A man of faith, courage, and integrity is not shaken by timelines.”
      </blockquote>
    </div>
  </div>
</section>
      {/* Beyond Modeling */}
      <section className="article-content glass-card">
        <h2>Beyond Modeling</h2>
        <p>
          Beyond the camera, I am deeply passionate about acting and fashion
          design. These disciplines allow me to merge creativity with
          performance, expanding my understanding of storytelling beyond a
          single medium.
        </p>
        <p>
          My long-term vision is to build a multifaceted career that bridges
          fashion, performance, and creative direction.
        </p>
      </section>

      {/* Vision */}
      <section className="article-content article-text">
        <h2>Vision & Direction</h2>
        <p>
          I see modeling as more than appearance — it is a platform for growth,
          discipline, and influence. Every project is an opportunity to evolve,
          refine, and push creative boundaries.
        </p>
        <p>
          Driven, versatile, and always evolving, I aim to establish myself as
          not just a model, but a lasting creative force within fashion and
          entertainment.
        </p>
      </section>

      {/* Quote */}
      <section className="article-content glass-card uk-text-center">
        <blockquote className="uk-h3 uk-text-italic">
          “Growth begins when comfort ends.”
        </blockquote>
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
              <img src={img} alt={`Brandon ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • FASHION • PERFORMANCE • EDITORIAL • 2025
      </footer>
    </article>
  );
}
