export function ModellingArticle() {
  return (
    <article className="editorial-page theme-green glass-card gradient-gloss">

      <header className="editorial-header">
        <h1>Stillness is a Weapon</h1>
        <p className="editorial-subtitle">Editorial modelling beyond poses</p>
      </header>

      <section className="editorial-hero">
        <img src="https://images.pexels.com/photos/247206/pexels-photo-247206.jpeg" alt="Modelling Hero" />
      </section>

      <div className="article-content" uk-grid="true">
        <div className="editorial-text uk-width-2-3@m">
          <p>Editorial modelling is no longer about poses.</p>
          <p>It is about emotion, message, and presence.</p>

          <div className="ad-inline">Fashion Brand Ad</div>

          <div className="editorial-audio">
            <h4>🎧 Audio / Podcast</h4>
            <audio controls src="/audio/stillness-weapon.mp3"></audio>
          </div>

          <div className="editorial-video">
            <h4>▶ Feature Video</h4>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="400" frameBorder="0" allowFullScreen />
          </div>
        </div>

        <div className="editorial-portrait uk-width-1-3@m">
          <img src="https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg" alt="Portrait" />
          <div className="editorial-highlights">
            <h3>HIGHLIGHTS</h3>
            <ul>
              <li>Narrative-driven shoots</li>
              <li>Expression over perfection</li>
              <li>Art-direction mastery</li>
            </ul>
          </div>
          <div className="ad-sidebar">Editorial Sponsor</div>
        </div>
      </div>

      <div className="ad-footer">Footer Ad — Sponsored Brand</div>
      <footer className="editorial-footer">IMPILO MAGAZINE — MODELLING</footer>
    </article>
  );
}
