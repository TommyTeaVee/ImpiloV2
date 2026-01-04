import React from "react";

// Hero and gallery images (replace with CloudFront links)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0063.jpg?fit=crop&w=650&h=433&q=80";

const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0052.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251228-WA0045.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0056.jpg",
   "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251228-WA0043.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0053.jpg.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0054.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0055.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0062.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0054.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0063.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0065.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0065.jpg",
   "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251228-WA0041.jpg",
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251228-WA0042.jpg",
     "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251228-WA0046.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251228-WA0047.jpg",
        "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251228-WA0048.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251228-WA0049.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0050.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0051.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0056.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0057.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0058.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0059.jpg",
          "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0060.jpg",
          "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0061.jpg",
          "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Kgothatso/IMG-20251209-WA0062.jpg",
   
];

export default function KgothatsoEditorial() {
  return (
    <article className="editorial-page uk-article  glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header
        className="article-header editorial-header theme-dark-pink-purple "
        
      >
        
        <h1>Kgothatso Mantsho</h1>
        <h4 className="article-subtitle">
          Model & Singer · Mental Health Advocate
        </h4>
      
      </header>
  {/* Hero */}
      <section className="article-hero glass-card hero-landscape">
        <img src={heroImage} alt="Kgothatso Hero" />
      
      </section>
  <blockquote className="editorial-quote" >
          Inspiring Mind & Body Wellness
        </blockquote>
      {/* Hero + Intro Paragraph */}
      <section className="article-content  uk-grid-item-match uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" uk-grid="true">
        <div className="uk-width-1-2 uk-height-medium uk-flex uk-flex-center uk-flex-middle  uk-background-cover uk-grid-item-match">
          <img
            src={galleryImages[3]}
            alt="Kgothatso Mantsho"
            className="portrait-img uk-border-circle"
          />
        </div>
        <div className="uk-child-width-1-1 uk-text-justify article-text glass-card">
          <h2>Editorial Bio</h2>
          <p>
            Kgothatso Mantsho, a 21-year-old model and singer from
            Polokwane, South Africa. From a young age, I have been passionate
            about fashion, music, and self-expression. My work is driven by a
            desire to inspire others and make a meaningful impact in the creative
            industry.
          </p>
          <p>
            Beyond my artistic pursuits, I am a dedicated advocate for mental
            health awareness and physical wellness. I believe taking care of one’s
            mind and body is essential for personal growth and creative excellence.
          </p>
        </div>
      </section>

      {/* Interests & Vision */}
      <section className="article-content glass-card">
        <h2>Interests & Vision</h2>
        <ul>
          <li>Modeling: Editorial and commercial projects</li>
          <li>Singing: Musical performance and vocal expression</li>
          <li>Mental Health Advocacy: Raising awareness and supporting youth</li>
          <li>Physical Fitness: Maintaining a healthy lifestyle</li>
          <li>Inspiring Others: Motivating and guiding young talent</li>
        </ul>
        <p>
          My vision is to inspire young people to prioritize their mental and
          physical wellbeing while embracing their unique talents. Through
          modeling, music, and advocacy, I aim to empower others to take control
          of their health and pursue their dreams.
        </p>
      </section>

      {/* Gallery */}
      <section
        className="article-content uk-grid-small uk-child-width-1-2@s"
        uk-grid="true"
      >
        {galleryImages.map((img, i) => (
          <div key={i} className="glass-card">
            <img src={img} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Contact & Socials */}
      <section className="article-content glass-card">
        <h2>Contact & Socials</h2>
        <p>Based in Polokwane, South Africa</p>
        <p>
          <a
            href="mailto:kgothatso.m@impilomag.co.za"
            className="uk-icon-link"
            uk-icon="mail"
          >
            kgothatso.m@impilomag.co.za
          </a>
        </p>
        <p>
          <a
            href="https://instagram.com/Kgothatso.Mantsho"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="instagram"
          >
            @Kgothatso.Mantsho
          </a>
        </p>
        <p>
          <a
            href="https://www.tiktok.com/@Kgothatso.Mantsho"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="twitter"
          >
            @Kgothatso.Mantsho
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • 2025
      </footer>
    </article>
  );
}
