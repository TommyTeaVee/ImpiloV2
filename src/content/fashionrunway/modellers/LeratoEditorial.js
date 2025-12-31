// LeratoEditorial.jsx
export default function LeratoEditorialArch() {
  return (
    <article className="fashion-editorial">
      
      {/* Header */}
      <header className="fashion-header">
        <span className="issue">Fashion Model · Issue 09</span>
        <h1>LERATO<br />DISEKO</h1>
        <p className="fashion-quote">“Your dreams are valid”</p>
      </header>

      {/* Hero Image */}
      <section className="fashion-hero">
        <img
          src="https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/thando.jpg"
          alt="Lerato Diseko runway"
        />
      </section>

      {/* Content */}
      <section className="fashion-content">
        <div className="fashion-text glass-card">
          <p className="uk-dropcap">
            Modelling has been an incredible journey of self-discovery and
            empowerment for Lerato Diseko. It has allowed her to express herself
            authentically and significantly boost her self-esteem.
          </p>

          <p>
            Her modelling career began when she participated in <strong>Top Model SA</strong>,
            held in Sasolburg in 2014. A lifelong learner with a passion for God,
            medical science, modelling, and hairstyling, Lerato embodies balance
            between ambition and purpose.
          </p>

          <p>
            After taking a temporary break to focus on her career as a medical
            scientist, Lerato reignited her modelling spark through photoshoots.
            Her major comeback came when she walked for <strong>TVL</strong> and
            <strong> Gert Johan Coetzee</strong> at the Free State Fashion Week in
            2021, and later for the <strong>Impilo Exclusive Jozi Fashion Show 2024</strong>.
          </p>

          <p>
            As a model, Lerato has had the privilege of working with top designers
            and talented creatives, and remains deeply grateful for the
            opportunities that continue to shape her journey.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="fashion-sidebar glass-card">
          <h3>PROFILE</h3>
          <ul>
            <li><strong>Name:</strong> Lerato Godsbling Diseko</li>
            <li><strong>Industry:</strong> Fashion & Runway</li>
            <li><strong>Featured Event:</strong> Exclusive Jozi Fashion Runway 2024</li>
            <li><strong>Designer:</strong> Glenda Lee Designs</li>
          </ul>

          <div className="socials">
            <p>Connect</p>
            <a href="#" aria-label="Instagram">@godsblinglee</a>
            <a href="#" aria-label="TikTok">@leratodisek08</a>
          </div>

          {/* Sponsor Slot */}
          <div className="sponsor-slot">
            <span>Sponsored Feature</span>
            <div className="brand-placeholder">BRAND PARTNER</div>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="fashion-footer">
        IMPILO MAGAZINE · AFRICAN FASHION · CULTURE · LEGACY
      </footer>
    </article>
  );
}


// CloudFront image URLs (Lerato folder)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/thando.jpg";

const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/1.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/2.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/3.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/4.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/5.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/6.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/7.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/8.jpg"
];

export const  LeratoEditorial=()=> {
  return (
    <article
      className="editorial-page uk-article theme-gold glass-card gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header editorial-header">
        <h1>Dr. Lerato Diseko</h1>
        <h4 className="article-subtitle">
          Medical Scientist · Runway Model · Creative Professional
        </h4>
      </header>

      {/* Hero Image */}
      <section className="fashion-hero">
        <img
          src="https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/thando.jpg"
          alt="Lerato Diseko runway"
        />
      </section>
      {/* Hero + Intro Paragraph */}
      <section className="article-content uk-grid-large" uk-grid="true">
        <div className="uk-width-1-3@m">
          <img
            src={heroImage}
            alt="Dr. Lerato Diseko portrait"
            className="portrait-img"
          />
        </div>
        <div className="uk-width-2-3@m article-text">
          <h2>Editorial Bio</h2>
          <p>
            I am Dr. Lerato Diseko, a 32-year-old multifaceted professional based in
            Johannesburg, South Africa. I bridge the worlds of science and fashion,
            working as a medical scientist and runway model. Each day offers a chance
            to grow, create, and inspire.
          </p>
        </div>
      </section>

      {/* Academic & Science Journey */}
      <section className="article-content glass-card">
        <h2>The Scientist</h2>
        <p>
          I hold a PhD in Genetics from the University of the Free State, focusing on
          host genetic make-up and HIV in South Africa. Currently, I work at the National
          Health Laboratory Service and contribute actively to the South African Genetics
          Society and the African Institute of Medical Scientists. My aspiration is to
          inspire and educate future generations as a professor of medical science.
        </p>
      </section>

      {/* Modelling Journey */}
      <section className="article-content glass-card">
        <h2>The Model</h2>
        <p>
          My modelling journey began in 2014 as a Top Model finalist. Since then, I have
          walked prestigious runways including Free State Fashion Week, Impilo Exclusive
          Jozi Fashion Runway, and the SunBet Arena Next Opulent Model finale. I am also
          a finalist for South African Next Super Model 2026. I aim to expand my commercial
          presence and explore acting opportunities.
        </p>
      </section>

      {/* Personal Life */}
      <section className="article-content glass-card">
        <h2>Personal Life & Philosophy</h2>
        <p>
          I live by the motto: “There are no shortcuts to any place worth going.” Outside
          work, I am a competitive gamer, hairstylist, and devoted family person. Faith,
          discipline, and creativity guide me through both science and fashion, keeping me
          grounded and inspired.
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
              <img src={img} alt={`Lerato ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Socials */}
      <section className="article-content glass-card">
        <h2>Contact & Socials</h2>
        <p>Based in Johannesburg, South Africa</p>

        <p>
          <a
            href="mailto:lerato.diseko@example.com"
            className="uk-icon-link"
            uk-icon="icon: mail"
          >
            lerato.diseko@example.com
          </a>
        </p>

        <p>
          <a
            href="https://instagram.com/lerato_diseko"
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-link"
            uk-icon="instagram"
          >
            @lerato_diseko
          </a>
        </p>
      </section>

      {/* Inspirational Quote */}
      <section className="article-content glass-card uk-text-center">
        <blockquote className="uk-h3 uk-text-italic">
          “There are no shortcuts to any place worth going.”
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • 2025 • MODELS & PROFESSIONALS
      </footer>
    </article>
  );
}
