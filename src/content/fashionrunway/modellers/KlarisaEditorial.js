import React from "react";

// CloudFront image URLs (Klarissa folder)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Repole/600260324_1218208216883878_8807527564035410958_n.jpg";

const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Repole/1.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Repole/2.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Repole/3.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Repole/4.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Repole/5.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Repole/6.jpg"
];

export default function KlarissaEditorial() {
  return (
    <article
      className="editorial-page uk-article   glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header theme-rose uk-light  editorial-header">
        <h1>Klarissa Repole</h1>
        <p className="article-subtitle">
          Fashion Model · Performer · Creative Professional
        </p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Passion, perseverance, and vibrant creativity.
        </p>
      </header>
  {/* Hero */}
      <section className="article-hero glass-card">
        <img src={heroImage} alt="Klarrisa Hero" />
      </section>

      {/* Intro: Hero + First Paragraph */}
      <section className="article-content uk-grid-large" uk-grid="true">
        <div className="uk-width-1-3@m">
          <img
            src={heroImage}
            alt="Klarissa Repole portrait"
            className="portrait-img"
          />
        </div>
        <div className="uk-width-2-3@m article-text uk-text-lead uk-margin-top uk-text-justify ">
          <h2>My Bio</h2>
          <p className="uk-dropcap">
            My name is Klarissa Repole, and I am a model from Ponte Vedra Beach, Florida. I
            started out as a dancer doing ballet, tap, and jazz at a young age. Singing lessons
            and musical theatre further fueled my passion for art and fashion. Though I was
            initially told I was too “soft and pretty” for college musical theatre, that
            experience led me to my first fashion show in St. Augustine at “Le Macaron.”
          </p>
        </div>
      </section>

      {/* Modeling Journey */}
      <section className="article-content glass-card">
        <h2>Modeling Journey</h2>
        <p>
          I have explored many creative avenues, including working in recording studios
          and attempting a rock band. Ultimately, modeling became my focus. I am thrilled
          to be participating in Jacksonville Fashion Week (Jan 22–24) where I will
          model for Custom Paper Dollz, a vibrant carnival-themed show. 
        </p>
        <p>
          My work is colorful, energetic, and fun. I am open to all types of modeling —
          from bikini and lingerie modeling to fashion shows and high fashion editorials.
        </p>
      </section>

      {/* Vision & Statement */}
      <section className="article-content article-text">
        <h2>Vision & Statement</h2>
        <p>
          My ultimate goal is to inspire people to never give up. There is always
          something out there for you. Perhaps your true calling isn’t clear yet,
          but one day you will find something you are passionate about and love to do.
        </p>
      </section>

      {/* Gallery */}
      <section className="article-content">
        <h2>Gallery</h2>
        <div
          className="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="true"
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="glass-card">
              <img src={img} alt={`Klarissa ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Socials */}
      <section className="article-content glass-card">
        <h2>Contact & Socials</h2>
        <p>Based in Ponte Vedra Beach, FL</p>

        <p>
          <a
            href="https://instagram.com/Klarissa.Repole98"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="instagram"
          >
            @Klarissa.Repole98
          </a>
        </p>

        <p>
          <a
            href="https://www.tiktok.com/@Klarissa.Repole"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="icon: social"
          >
            @Klarissa.Repole
          </a>
        </p>

        <p>
          <a
            href="https://facebook.com/Klarissa.Repole"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="facebook"
          >
            Klarissa Repole
          </a>
        </p>
      </section>

      {/* Inspirational Quote */}
      <section className="article-content glass-card uk-text-center">
        <blockquote className="uk-h3 uk-text-italic">
          “Passion and perseverance always light the path to your true calling.”
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • 2025 • MODELS & CREATIVE TALENT
      </footer>
    </article>
  );
}
