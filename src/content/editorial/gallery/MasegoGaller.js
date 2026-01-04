import React from "react";

const masegoImages = [
  "https://d123.cloudfront.net/Masego/1.jpg",
  "https://d123.cloudfront.net/Masego/2.jpg",
  "https://d123.cloudfront.net/Masego/3.jpg",
  "https://d123.cloudfront.net/Masego/4.jpg",
  "https://d123.cloudfront.net/Masego/5.jpg",
  "https://d123.cloudfront.net/Masego/6.jpg",
  "https://d123.cloudfront.net/Masego/7.jpg",
  "https://d123.cloudfront.net/Masego/8.jpg"
];

export default function MasegoGallery() {
  return (
    <article className="impilo-article editorial-page theme-pink">
      <header className="article-header">
        <h1>Masego</h1>
        <p className="article-subtitle">Innovative Performance Arts</p>
      </header>

      <section className="story-images-grid">
        {masegoImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Masego story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {masegoImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Masego gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example8" title="Masego Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Masego/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Masego with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
