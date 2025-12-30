import React from "react";

// CloudFront image URLs (Abenathi folder)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/IMG-20251230-WA0040.jpg";
const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/IMG-20251230-WA0040.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/IMG-20251230-WA0040.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/IMG-20251230-WA0040.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/4.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/5.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/6.jpg",
];
export default function AbenathiEditorial() {
  return (
    <article
      className="editorial-page uk-article  glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header editorial-header uk-light theme-purple">
        <h1>ABENATHI CAWE</h1>
        <p className="article-subtitle">
          Pageant Model · Runway · Presenter · Creative Leader
        </p>
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
            alt="Abenathi Cawe portrait"
            className="portrait-img"
          />
        </div>

        <div className="uk-child-width-1-1 uk-text-justify article-text glass-card">
          <h2>Editorial Bio</h2>
          <p className="uk-dropcap">
        Abenathi Cawe is a 23-year-old creative professional born and raised in
        Johannesburg, Gauteng, with roots in the mountain valleys of Sterkspruit
        in the Eastern Cape.
      </p>
          <p>
            I am currently studying towards a Bachelor of Arts in Environmental
            Management, balancing academic discipline with a passion for
            creative expression across fashion, media, and leadership.
          </p>

          <blockquote className="editorial-quote uk-width-1-2@m">
            “Purpose gives confidence direction.”
          </blockquote>
        </div>
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
        className="editorial-avatar uk-border-circle"
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

      {/* Pageantry & Titles */}
      <section className="article-content glass-card">
        <h2>Pageantry & Recognition</h2>
        <p>
          My modeling journey is deeply rooted in pageantry and runway
          excellence. I hold the title of <strong>Mr Royal Xtremes 2024 King</strong>,
          and I was recently crowned <strong>Mr Waterfall South Africa 2025</strong>.
        </p>
        <p>
          These platforms strengthened my confidence, leadership skills, and
          ability to communicate purpose beyond appearance.
        </p>
      </section>

      {/* Runway & Fashion */}
      <section className="article-content article-text">
        <h2>Runway & Fashion Presence</h2>
        <p>
          As a runway model, I have featured in the <strong>Jozi Exclusive Fashion
          Show 2024</strong> and the <strong>Fashion Parade 2025</strong>, both
          presented in collaboration with Impilo Magazine.
        </p>
        <p>
          The runway is where discipline, storytelling, and presence merge — and
          where I feel most connected to my craft.
        </p>
      </section>

      {/* Media & Voice */}
      <section className="article-content glass-card uk-match-grid uk-width-1-1@m">
    
        <div className="uk-width-1-1 uk-height-medium uk-flex uk-flex-right uk-flex-middle  uk-background-cover uk-grid-item-match">
        <h2>Media, Voice & Leadership</h2>
        <p>
          Beyond modeling, I am an upcoming television and radio presenter, a
          Master of Ceremonies, keynote speaker, and motivational speaker.
        </p>
        <p>
          I had the honour of hosting the <strong>4th Annual Mr & Miss Face of
          Xtremes 2025 Grand Finale</strong>, a defining moment in my journey as
          a communicator and leader.
        </p>
        </div>
      </section>

      {/* Advocacy & Purpose */}
      <section className="article-content article-text">
        <h2>Advocacy & Impact</h2>
        <p>
          I am the founder of a non-profit organisation, <strong>#Geleza Ntwana</strong>,
          focused on promoting positive leadership among young people, uplifting
          the boy child, and advancing environmental sustainability.
        </p>
        <p>
          Through partnerships with organisations such as the Moeletsi
          Foundation, I strive to create meaningful change at community level.
        </p>
      </section>

      {/* Philosophy */}
      <section className="article-content glass-card uk-text-center">
        <blockquote className="editorial-quote uk-h3 uk-text-italic">
          “A man of faith, courage, integrity, and intelligence is not shaken by
          societal timelines — he is guided by purpose.”
        </blockquote>
      </section>


      {/* Gallery 
      <section className="article-content">
        <h2>Visual Presence</h2>
        <div
          className="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="true"
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="glass-card">
              <img src={img} alt={`Abenathi ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>*/}

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • LEADERSHIP • FASHION • IMPACT • 2025
      </footer>
    </article>
  );
}
