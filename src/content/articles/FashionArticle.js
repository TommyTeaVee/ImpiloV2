import React from "react";

export function FashionArticle() {
  return (
    <article className="editorial-page theme-gold glass-card gradient-gloss">

      <header className="editorial-header">
        <h1>No Mercy</h1>
        <p className="editorial-subtitle">Unapologetic Fashion & Power</p>
      </header>

      <section className="editorial-hero">
        <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" alt="Fashion Hero" />
      </section>

      <div className="article-content" uk-grid="true">
        <div className="editorial-text uk-width-2-3@m">
          <p>Fashion in this issue abandons restraint. “No Mercy” is a declaration of dominance, where fabric, body, and attitude collide.</p>
          <p>This editorial explores control, movement, and visual tension, translating raw emotion into form.</p>

          <div className="ad-inline">Sponsored Content / Native Ad</div>

          <div className="editorial-audio">
            <h4>🎧 Audio / Podcast</h4>
            <audio controls src="/audio/no-mercy-fashion.mp3"></audio>
          </div>

          <div className="editorial-video">
            <h4>▶ Feature Video</h4>
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="400" frameBorder="0" allowFullScreen />
          </div>
        </div>

        <div className="editorial-portrait uk-width-1-3@m">
          <img src="https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg" alt="Portrait" />
          <div className="editorial-highlights">
            <h3>HIGHLIGHTS</h3>
            <ul>
              <li>Avant-garde editorial styling</li>
              <li>High-contrast lighting</li>
              <li>Fierce feminine silhouettes</li>
            </ul>
          </div>
          <div className="ad-sidebar">Brand / Event Promo</div>
        </div>
      </div>

      <div className="ad-footer">Footer Ad — Sponsored Message</div>
      <footer className="editorial-footer">IMPILO MAGAZINE — FEATURE STORY</footer>
    </article>
  );
}
