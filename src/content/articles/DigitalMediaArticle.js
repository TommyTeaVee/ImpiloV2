export function DigitalMediaArticle() {
  return (
    <article style={{overflowY: 'auto', maxHeight: '180vh'}}  className=" uk-article editorial-page theme-blue glass-card gradient-gloss">

      <header className="editorial-header">
        <h1>Always Live, Never Static</h1>
        <p className="editorial-subtitle">Streaming reshapes African culture</p>
      </header>

      <section className="editorial-hero">
        <img src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg" alt="Digital Media Hero" />
      </section>

      <div className="article-content" uk-grid="true">
        <div className="editorial-text uk-width-2-3@m">
          <p>Streaming has democratized storytelling.</p>
          <p>Culture now travels in real time across platforms.</p>

          <div className="ad-inline">Streaming Platform Ad</div>

          <div className="editorial-audio">
            <h4>🎧 Audio / Podcast</h4>
            <audio controls src="/audio/always-live.mp3"></audio>
          </div>

          <div className="editorial-video">
            <h4>▶ Feature Video</h4>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="400" frameBorder="0" allowFullScreen />
          </div>
        </div>

        <div className="editorial-portrait uk-width-1-3@m">
          <img src="https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg" alt="Portrait" />
          <div className="editorial-highlights">
            <h3>HIGHLIGHTS</h3>
            <ul>
              <li>Podcast revolutions</li>
              <li>Independent creators</li>
              <li>Live-first audiences</li>
            </ul>
          </div>

          <div className="ad-sidebar">Digital Media Sponsor</div>
        </div>
      </div>

      <div className="ad-footer">Footer Ad — Streaming Sponsor</div>
      <footer className="editorial-footer">IMPILO MAGAZINE — DIGITAL MEDIA</footer>
    </article>
  );
}
