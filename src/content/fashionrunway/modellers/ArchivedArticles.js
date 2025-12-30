import React from "react";

// cloudfront images
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/IMG-20251230-WA0040.jpg";
const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/IMG-20251230-WA0040.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/2.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Nathi/3.jpg",
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
      {/* HEADER */}
      <header className="article-header editorial-header uk-light theme-purple">
        <h1>Abenathi Cawe</h1>
        <p className="article-subtitle">
          Pageant Model · Runway Model · MC · TV & Radio Presenter · Poet
        </p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Johannesburg, Gauteng | Originally from Sterkspruit, Eastern Cape
        </p>
      </header>

     {/* Hero + Intro Paragraph */}
      <section className="article-content  uk-grid-item-match uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" uk-grid="true">
        <div className="uk-width-1-2 uk-height-medium uk-flex uk-flex-center uk-flex-middle  uk-background-cover uk-grid-item-match">
          <img
            src={galleryImages[0]}
            alt="Abenathi Cawe"
            className="portrait-img"
          />
        </div>
        <div className="uk-child-width-1-2 uk-text-justify article-text">
          <h2>Editorial Bio</h2>
          <h2>Biography</h2>
          <p>
            Abenathi Cawe is a 23-year-old gentleman, born and raised in the
            City of Gold, Johannesburg, and originally from the mountain valleys
            of Sterkspruit in the Eastern Cape. He is currently pursuing a BA
            in Environmental Management and has become a prominent figure in
            modeling, pageantry, and media.
          </p>
          <section className="article-content glass-card">
          <h2>Achievements</h2>
          <p>
            Abenathi holds the esteemed titles of <strong>Mr Royal Xtremes 2024
            King</strong> and <strong>Mr Waterfall South Africa 2025</strong>.
            As a runway model, he has featured in the Jozi Exclusive Fashion
            Show 2024 and Fashion Parade 2025, courtesy of Impilo Magazine.
          </p>

          <p>
            Beyond modeling, Abenathi is an upcoming television and radio
            presenter, a Master of Ceremonies (MC), keynote speaker, and
            motivational speaker. He hosted the 4th Annual Mr & Miss Face of
            Xtremes 2025 Grand Finale and has cultivated a strong presence as a
            poetry writer and reciter.
          </p>
</section>
          <h2>Advocacy & Vision</h2>
          <p>
            As the founder of <strong>#Geleza Ntwana</strong>, a non-profit
            organization, Abenathi promotes positive leadership, the growth and
            well-being of young boys, and environmental sustainability in
            collaboration with the Moeletsi Foundation. He actively addresses
            social, economic, educational, mental, and sexual issues affecting
            youth in society.
          </p>

          <h2>Philosophy</h2>
          <p>
            Driven by the motto: <em>
              "A man of faith, courage, integrity, and a bit of intelligence is
              not shaken or bullied by societal expectations and timelines, but
              is driven by the dreams, goals, and aspirations he holds in both
              his mind and heart."
            </em>
          </p>
        </div>

        {/* GALLERY 
        <section className="story-images-grid uk-grid-small uk-child-width-1-2@s" uk-grid="true">
          {galleryImages.map((img, index) => (
            <div key={index} className="glass-card">
              <img src={img} alt={`Abenathi Gallery ${index + 1}`} />
            </div>
          ))}
        </section>*/}
      </section>

      {/* FOOTER */}
      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}



export const  ArchivedArticles=() =>{
  return (
    <article
      className="editorial-page uk-article theme-lead-gold glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header editorial-header" style={{ padding: "40px 30px" }}>
        <h1>Abenathi Cawe</h1>
        <p className="article-subtitle">
          Pageant Model · Runway Model · MC · TV & Radio Presenter · Poet
        </p>
        <p className="article-subtitle" style={{ fontStyle: "italic" }}>
          Johannesburg, Gauteng | Originally from Sterkspruit, Eastern Cape
        </p>
      </header>

      {/* Side-by-Side Portrait + Intro */}
      <section
        className="article-content"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          alignItems: "flex-start",
          padding: "40px 30px",
          flexWrap: "wrap",
        }}
      >
        {/* Portrait */}
        <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
          <div className="glass-card">
            <img
              src={heroImage}
              alt="Abenathi Portrait"
              style={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0 12px 40px rgba(255,215,0,0.25)",
              }}
            />
          </div>
        </div>

        {/* Intro Text */}
        <div style={{ flex: "2 1 500px" }}>
          <div className="glass-card" style={{ padding: "30px" }}>
            <h2>About Abenathi</h2>
            <p>
              Abenathi Cawe, 23, is a distinguished pageant and runway model,
              television and radio presenter, MC, and poet from Johannesburg,
              Gauteng, originally hailing from the mountain valleys of Sterkspruit
              in the Eastern Cape. Currently pursuing a BA in Environmental Management,
              Abenathi has rapidly made his mark in the fashion and media industry.
            </p>
            <p>
              He holds the prestigious titles of <strong>Mr Royal Xtremes 2024 King</strong> 
              and <strong>Mr Waterfall South Africa 2025</strong>. As a runway model, 
              he has featured in Jozi Exclusive Fashion Show 2024 and Fashion Parade 2025, 
              courtesy of Impilo Magazine.
            </p>
            <p>
              Beyond modeling, Abenathi is a motivational speaker, keynote speaker, poetry writer,
              and founder of <strong>#Geleza Ntwana</strong>, a non-profit promoting positive 
              leadership and environmental sustainability among youth.
            </p>
            <blockquote className="editorial-quote">
              "A man of faith, courage, integrity, and intelligence is not shaken by societal expectations,
              but driven by the dreams and aspirations he holds in mind and heart."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="story-images-grid uk-grid-small uk-child-width-1-2@s" uk-grid="true" style={{ padding: "0 40px 40px 40px" }}>
        {galleryImages.map((img, index) => (
          <div key={index} className="glass-card">
            <img src={img} alt={`Abenathi Gallery ${index + 1}`} style={{ borderRadius: "16px" }} />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
