// VFXAdArticle.jsx
export default function VFXAdArticle() {
  return (
    <article className="vfx-page uk-article">
      {/* Header */}
      <header className="vfx-header">
        <h1>THE FUTURE OF VISUAL STORYTELLING</h1>
        <p className="vfx-subtitle">
          How VFX, 3D Photography & Digital Illusions Are Redefining Brand Culture
        </p>
      </header>

      {/* Hero Video */}
      <section className="vfx-hero uk-margin-large-top">
        <video
          className="vfx-video"
          src="https://d16o5gtkyqkgf2.cloudfront.net/3D+Photography+.mp4"
          controls
          muted
          playsInline
          poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
        />
      </section>

      {/* Content Grid */}
      <div
        className="uk-grid uk-grid-large uk-margin-large-top"
        uk-grid="true"
      >
        {/* Article Text */}
        <div className="uk-width-2-3@m vfx-text glass-card">
          <p>
            Visual effects are no longer reserved for blockbuster cinema.
            Today, brands, digital magazines, and independent creators are
            leveraging cinematic VFX and 3D photography to craft immersive
            narratives that feel futuristic, emotional, and unforgettable.
          </p>

          <p>
            From floating fashion silhouettes to hyper-real product illusions,
            VFX-driven advertising blurs the line between reality and digital
            imagination. These visuals don’t just sell products — they create
            culture.
          </p>

          <p>
            At <strong>Impilo Digital Media Group</strong>, we see VFX as a
            storytelling language — one that allows African creativity to
            compete on a global cinematic stage while remaining rooted in local
            identity.
          </p>

          <blockquote className="vfx-quote">
            “The future of advertising isn’t louder — it’s more immersive.”
          </blockquote>
        </div>

        {/* Sidebar */}
        <aside className="uk-width-1-3@m glass-card vfx-sidebar">
          <h3>ARTICLE DETAILS</h3>
          <ul>
            <li><strong>Theme:</strong> Innovation & Digital Media</li>
            <li><strong>Category:</strong> VFX Advertising</li>
            <li><strong>Format:</strong> Video + Editorial</li>
            <li><strong>Monetization:</strong> Branded Content</li>
          </ul>

          {/* Monetization Slot */}
          <div className="vfx-ad-slot">
            <p>Sponsored by</p>
            <div className="vfx-ad-placeholder">
              BRAND PARTNER
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="vfx-footer uk-margin-large-top">
        IMPILO DIGITAL MEDIA GROUP — VISUAL CULTURE • DIGITAL FUTURES
      </footer>
    </article>
  );
}
