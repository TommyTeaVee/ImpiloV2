import React from "react";

const muhammedImages = [
  "https://d123.cloudfront.net/Muhammed/1.jpg",
  "https://d123.cloudfront.net/Muhammed/2.jpg",
  "https://d123.cloudfront.net/Muhammed/3.jpg",
  "https://d123.cloudfront.net/Muhammed/4.jpg",
  "https://d123.cloudfront.net/Muhammed/5.jpg",
  "https://d123.cloudfront.net/Muhammed/6.jpg"
];

export default function MomoGallery() {
  return (
    <article className="impilo-article editorial-page theme-purple">
      <header className="article-header">
        <h1>Muhammed</h1>
        <p className="article-subtitle">Digital Media & Innovation</p>
      </header>

      <section className="story-images-grid">
        {muhammedImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Muhammed story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {muhammedImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Muhammed gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example10" title="Muhammed Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Muhammed/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Muhammed with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
