export function BreakingFeatureArticle() {
  return (
    <article  style={{overflowY: 'auto', maxHeight: '180vh'}}  className="uk-article editorial-page theme-feature glass-card gradient-gloss">

      <header className="editorial-header">
        <h1>Culture Doesn’t Wait</h1>
        <p className="editorial-subtitle">The power of young voices shaping society</p>
      </header>

      <section className="editorial-hero">
        <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" alt="Breaking Feature Hero" />
      </section>

      <div className="article-content" uk-grid="true">
        <div className="editorial-text uk-width-2-3@m">
          <p>Young voices are no longer waiting for permission to be heard.</p>
          <p>They are creating culture, shaping society, and redefining norms.</p>

          <div className="ad-inline">Social / Civic Sponsor</div>

          <div className="editorial-audio">
            <h4>🎧 Audio / Podcast</h4>
            <audio controls src="/audio/culture-doesnt-wait.mp3"></audio>
          </div>

          <div className="editorial-video">
            <h4>▶ Feature Video</h4>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="400" frameBorder="0" allowFullScreen />
          </div>
        </div>

        <div className="editorial-portrait uk-width-1-3@m">
          <img src="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg" alt="Portrait" />
          <div className="editorial-highlights">
            <h3>HIGHLIGHTS</h3>
            <ul>
              <li>Youth-led initiatives</li>
              <li>Social change through creativity</li>
              <li>Breaking the mold of tradition</li>
            </ul>
          </div>

          <div className="ad-sidebar">Breaking Feature Sponsor</div>
        </div>
      </div>

      <div className="ad-footer">Footer Ad — Breaking Feature</div>
      <footer className="editorial-footer">IMPILO MAGAZINE — BREAKING FEATURE</footer>
    </article>
  );
}
