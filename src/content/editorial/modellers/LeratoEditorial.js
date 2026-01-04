// LeratoEditorial.jsx



// CloudFront image URLs (Lerato folder)
const heroImage =
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/thando.jpg";

const galleryImages = [
 "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003039-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003049-Enhanced-SR-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003205-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003330-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003521-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003716-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003718-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003742-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003852-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015004254-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015004623-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015004838-Enhanced-SR.jpg",
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015004924-Enhanced-SR.jpg",
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015005225-Enhanced-SR.jpg",
     "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014222101-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014222202-Enhanced-SR.jpg",
       "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014222249-Enhanced-SR.jpg",
        "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014222311-Enhanced-SR.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014223936-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014223940-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014223941-Enhanced-SR.jpg", 
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014223942-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014224155-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014224158-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014224801-Enhanced-SR.jpg", 
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0578.jpg" ,
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0586.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0591.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0594.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0597.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0604.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0607.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0608.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0609.jpg",
       "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0619.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0620.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0621.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0625.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0627.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0636.jpg",
              "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0643.jpg",
   "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0646-Enhanced-SR.jpg",
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0666.jpg",
     "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0672.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0681.jpg",
];

export const  LeratoEditorial=()=> {
  return (
    <article
      className="editorial-page uk-article   gradient-gloss"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="article-header theme-soft-pink uk-light  editorial-header">
        <h1>Dr. Lerato Diseko</h1>
        <h4 className="article-subtitle">
          Medical Scientist · Runway Model · Creative Professional
        </h4>
      </header>

      {/* Hero Image */}
      <section className="article-hero">
        <img
          src={heroImage}
          alt="Lerato Diseko runway"
        />
      </section>
      {/* Hero + Intro Paragraph */}
      <section className="article-content uk-grid-large " uk-grid="true">
        
        {/* Inspirational Quote */}
      <section className="article-content uk-width-1-1@m  uk-text-center">
        <div className="uk-width-1-4@s uk-match-grid">
          <img
            src={galleryImages[7]}
            alt="Dr. Lerato Diseko portrait"
            className="portrait-img uk-border-circle" 
          />
          
        </div>
        <blockquote className="editorial-quote">
          “There are no shortcuts to any place worth going.”
        </blockquote>
      </section>
        <div className="uk-width-2-3@m article-text">
          <h2>Editorial Bio</h2>
          <p className="uk-dropcap">
            Dr. Lerato Diseko, a 32-year-old multifaceted professional based in
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
        <blockquote>
          I live by the motto: “There are no shortcuts to any place worth going.” Outside
          work, I am a competitive gamer, hairstylist, and devoted family person. Faith,
          discipline, and creativity guide me through both science and fashion, keeping me
          grounded and inspired.
        </blockquote>
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

      

      {/* Footer */}
      <footer className="article-footer">
        IMPILO MAGAZINE • 2025 • MODELS & PROFESSIONALS
      </footer>
    </article>
  );
}
