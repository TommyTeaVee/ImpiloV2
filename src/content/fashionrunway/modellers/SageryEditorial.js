import React from "react";

// Example cloudfront image URLs
const heroImage = "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Sagery/📸/204A5143.JPG?";
const storyImages = [
  "https://d123.cloudfront.net/Sagery/story1.jpg",
  "https://d123.cloudfront.net/Sagery/story2.jpg"
];
const galleryImages = [
  "https://d123.cloudfront.net/Sagery/1.jpg",
  "https://d123.cloudfront.net/Sagery/2.jpg",
  "https://d123.cloudfront.net/Sagery/3.jpg",
  "https://d123.cloudfront.net/Sagery/4.jpg",
  "https://d123.cloudfront.net/Sagery/5.jpg",
  "https://d123.cloudfront.net/Sagery/6.jpg"
];

export default function SageryEditorial() {
  return (
    <article style={{overflowY: 'auto', maxHeight: '180vh'}}  className="editorial-page  uk-article theme-purple glass-card gradient-gloss">
      {/* Header */}
      <header className="article-header editorial-header">
        <h1>Sagery Brunetti</h1>
        <p className="article-subtitle">Fashion Model · Beauty Artist · Creative Professional</p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Driven by creation. Defined by growth.
        </p>
      </header>

      {/* Hero Image */}
      <section className="article-hero glass-card">
        <img src={heroImage} alt="Sagery Hero" />
      </section>

      {/* Story Images
      <section className="story-images-grid uk-grid-small uk-child-width-1-2@s" uk-grid="true">
        {storyImages.map((img, i) => (
          <div key={i} className="glass-card">
            <img src={img} alt={`Story ${i + 1}`} />
          </div>
        ))}
      </section> */}

      {/* Editorial Content */}
      <section className="article-content ">
        <div className="article-text">
          <h2>My Bio</h2>
          <p className="uk-dropcap">
            I am Sagery Brunetti, a Chilean-born fashion model, makeup artist, and hair stylist based in Los Angeles, California. My professional focus is within the fashion industry, working primarily in editorial photoshoots and music video productions.
          </p>
          <p>
            I approach modeling as a creative and evolving discipline. Each project is an opportunity to learn, refine skills, and contribute meaningfully to the visual narrative of fashion and music.
          </p>

          <h2>Modeling Journey & Creative Growth</h2>
          <p>
            My journey into modeling developed organically from my background in beauty and styling. Working closely with creative teams allowed me to understand the construction of fashion imagery from both a technical and artistic perspective.
          </p>
          <p>
            I feel especially connected to editorial photoshoots and music productions, where collaboration, experimentation, and storytelling are essential. I am deeply committed to continuous growth, seeking to expand versatility and strengthen presence with every project.
          </p>

          <h2>Model Profile</h2>
          <p>
            I am an editorial-focused fashion model with experience in music video productions and beauty-driven fashion content. My work is defined by professionalism, adaptability, and strong visual awareness.
          </p>
        </div>
      </section>

      
      {/* Contact & Socials */}
      <section className="article-content glass-card">
        <h2>Contact & Socials</h2>
        <p>Based in Los Angeles, CA</p>

        <p>
          <a href="mailto:love.sagery@gmail.com" className="uk-icon-link">
  <span uk-icon="icon: mail"></span>
  love.sagery@gmail.com
</a>
        </p>

        <p>
          <a href="https://instagram.com/flowsay111" target="_blank" rel="noopener noreferrer" className="uk-icon-link" uk-icon="instagram">
            @flowsay111
          </a>
        </p>

        <p>
          <a href="https://instagram.com/bratz_stylist" target="_blank" rel="noopener noreferrer" className="uk-icon-link" uk-icon="instagram">
            @bratz_stylist
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
