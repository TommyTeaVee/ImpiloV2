export function PerformanceArticle() {
  return (
    <article className="editorial-page theme-lime glass-card gradient-gloss">

      <header className="editorial-header">
        <h1>The Body as Sound</h1>
        <p className="editorial-subtitle">Movement and rhythm as storytelling</p>
      </header>

      <section className="editorial-hero">
        <img src="https://images.pexels.com/photos/1701197/pexels-photo-1701197.jpeg" alt="Performance Hero" />
      </section>

      <div className="article-content" uk-grid="true">
        <div className="editorial-text uk-width-2-3@m">
          <p>Performance art speaks when words fail.</p>
          <p>The body becomes both message and medium.</p>

          <div className="ad-inline">Performance Arts Ad</div>

          <div className="editorial-audio">
            <h4>🎧 Audio / Podcast</h4>
            <audio controls src="/audio/body-sound.mp3"></audio>
          </div>

          <div className="editorial-video">
            <h4>▶ Feature Video</h4>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="400" frameBorder="0" allowFullScreen />
          </div>
        </div>

        <div className="editorial-portrait uk-width-1-3@m">
          <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Portrait" />
          <div className="editorial-highlights">
            <h3>HIGHLIGHTS</h3>
            <ul>
              <li>Movement as language</li>
              <li>Live expression</li>
              <li>Cultural preservation</li>
            </ul>
          </div>

          <div className="ad-sidebar">Art School / Performance Ad</div>
        </div>
      </div>

      <div className="ad-footer">Footer Ad — Performance Sponsor</div>
      <footer className="editorial-footer">IMPILO MAGAZINE — PERFORMANCE</footer>
    </article>
  );
}
