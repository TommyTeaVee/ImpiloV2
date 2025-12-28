import React from "react";

const queenImages = [
  "https://d123.cloudfront.net/Queen/1.jpg",
  "https://d123.cloudfront.net/Queen/2.jpg",
  "https://d123.cloudfront.net/Queen/3.jpg",
  "https://d123.cloudfront.net/Queen/4.jpg",
  "https://d123.cloudfront.net/Queen/5.jpg",
  "https://d123.cloudfront.net/Queen/6.jpg"
];

export default function QueenGallery() {
  return (
    <article className="impilo-article editorial-page theme-gold">
      <header className="article-header">
        <h1>Queen</h1>
        <p className="article-subtitle">Fashion & Lifestyle</p>
      </header>

      <section className="story-images-grid">
        {queenImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Queen story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {queenImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Queen gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example7" title="Queen Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Queen/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Queen with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
