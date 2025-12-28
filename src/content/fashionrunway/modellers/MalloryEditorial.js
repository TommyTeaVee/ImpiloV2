import React from "react";

// CloudFront image URLs
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/597365457_25633973229561269_6284949099148431428_n.jpg";

const storyImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/story/mallory-story-1.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/mallory-story-2.jpg"
];

const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/gallery/1.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/gallery/2.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/gallery/3.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/gallery/4.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/gallery/5.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/gallery/6.jpg"
];

export default function MalloryEditorial() {
  return (
    <article
      style={{ overflowY: "auto", maxHeight: "180vh" }}
      className="editorial-page uk-article theme-gold glass-card gradient-gloss"
    >
      {/* Header */}
      <header className="article-header editorial-header">
        <h1>Mallory</h1>
        <h4 className="article-subtitle">
          Fashion Model · Brand Representative · Creative Founder, Florida, US
        </h4>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Confidence in motion. Storytelling through fashion.
        </p>
      </header>

      {/* Hero Image */}
      <section className="article-hero editorial-header">
        <img src={heroImage} alt="Mallory Editorial Hero" />
      </section>

      {/* Story Images */}
      <section
        className="story-images-grid uk-grid-small uk-child-width-1-2@s"
        uk-grid="true"
      >
        {storyImages.map((img, i) => (
          <div key={i} className="glass-card">
            <img src={img} alt={`Mallory Story ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Editorial Content */}
      <section className="article-content">
        <div className="article-text">
          <h2>Editorial Bio</h2>
          <p className="uk-dropcap">
            I am a Florida-based fashion model with hands-on experience in
            photoshoots, promotional modeling, brand representation, and
            creative-led events. I approach every project with intention,
            confidence, and professionalism, using fashion as a medium for
            storytelling and visual impact.
          </p>

          <p>
            My presence in front of the camera is grounded in adaptability and
            emotional range. Whether working on editorial concepts or brand
            activations, I focus on delivering imagery that feels authentic,
            expressive, and aligned with the narrative of each collaboration.
          </p>

          <h2>Creative Direction & Community</h2>
          <p>
            I am the founder of <strong>Booked &amp; Busy</strong>, a creative
            platform designed to connect models, photographers, and brands to
            produce high-impact visuals and meaningful collaborations.
          </p>

          <p>
            Building creative ecosystems is a core part of my work. I believe
            fashion is strongest when it is collaborative, inclusive, and
            driven by shared vision.
          </p>

          <h2>Vision & Aspirations</h2>
          <p>
            My long-term goals include representing iconic global brands,
            walking and modeling for <strong>Victoria’s Secret</strong>, and
            appearing on the cover of <strong>Sports Illustrated</strong>.
          </p>

          <p>
            As I grow, my focus remains on elevating both my personal career
            and the creatives I work alongside — creating opportunities,
            visibility, and lasting impact through fashion.
          </p>
        </div>
      </section>

    
      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • 2025
      </footer>
    </article>
  );
}
