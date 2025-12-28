export function InnovationArticle() {
  return (
    <article className="editorial-page uk-article  theme-purple glass-card gradient-gloss">

      <header className="editorial-header">
        <h1>Designing the Future Human</h1>
        <p className="editorial-subtitle">African innovators making global impact</p>
      </header>

      <section className="editorial-hero">
        <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" alt="Innovation Hero" />
      </section>

      <div className="article-content" uk-grid="true">
        <div className="editorial-text uk-width-2-3@m">
          <p>Innovation in Africa is practical, personal, and powerful.</p>
          <p>These solutions address real problems in education, healthcare, and creative industries.</p>

          <div className="ad-inline">Tech / Startup Sponsor</div>

          <div className="editorial-audio">
            <h4>🎧 Audio / Podcast</h4>
            <audio controls src="/audio/future-human.mp3"></audio>
          </div>

          <div className="editorial-video">
            <h4>▶ Feature Video</h4>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="400" frameBorder="0" allowFullScreen />
          </div>
        </div>

        <div className="editorial-portrait uk-width-1-3@m">
          <img src="https://images.pexels.com/photos/3184415/pexels-photo-3184415.jpeg" alt="Portrait" />
          <div className="editorial-highlights">
            <h3>HIGHLIGHTS</h3>
            <ul>
              <li>Tech for access</li>
              <li>Design for inclusion</li>
              <li>Community-driven solutions</li>
            </ul>
          </div>
          <div className="ad-sidebar">Startup Feature Ad</div>
        </div>
      </div>

      <div className="ad-footer">Footer Ad — Innovation Sponsor</div>
      <footer className="editorial-footer">IMPILO MAGAZINE — INNOVATION</footer>
    </article>
  );
}
    