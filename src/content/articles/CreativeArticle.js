export function CreativityArticle() {
  return (
    <article style={{overflowY: 'auto', maxHeight: '180vh'}}  className="editorial-page  uk-article theme-pink glass-card gradient-gloss">

      <header className="editorial-header">
        <h1>The Chaos Behind the Canvas</h1>
        <p className="editorial-subtitle">Young artists redefining African creativity</p>
      </header>

      <section className="editorial-hero">
        <img src="https://images.pexels.com/photos/2698918/pexels-photo-2698918.jpeg" alt="Creativity Hero" />
      </section>

      <div className="article-content" uk-grid="true">
        <div className="editorial-text uk-width-2-3@m">
          <p>Creativity today is raw, fearless, and unapologetic.</p>
          <p>Platforms no longer define talent — vision does.</p>

          <div className="ad-inline">Sponsored Creativity Ad</div>

          <div className="editorial-audio">
            <h4>🎧 Audio / Podcast</h4>
            <audio controls src="/audio/chaos-behind-canvas.mp3"></audio>
          </div>

          <div className="editorial-video">
            <h4>▶ Feature Video</h4>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="400" frameBorder="0" allowFullScreen />
          </div>
        </div>

        <div className="editorial-portrait uk-width-1-3@m">
          <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg" alt="Portrait" />
          <div className="editorial-highlights">
            <h3>HIGHLIGHTS</h3>
            <ul>
              <li>Innovative art techniques</li>
              <li>Digital-first storytelling</li>
              <li>Youth-driven movements</li>
            </ul>
          </div>
          <div className="ad-sidebar">Gallery / Brand</div>
        </div>
      </div>

      <div className="ad-footer">Footer Ad — Sponsored Creativity</div>
      <footer className="editorial-footer">IMPILO MAGAZINE — CREATIVITY</footer>
    </article>
  );
}
