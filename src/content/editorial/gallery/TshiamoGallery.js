import React from "react";

const tshiamoImages = [
  "https://d123.cloudfront.net/Tshiamo/1.jpg",
  "https://d123.cloudfront.net/Tshiamo/2.jpg",
  "https://d123.cloudfront.net/Tshiamo/3.jpg",
  "https://d123.cloudfront.net/Tshiamo/4.jpg",
  "https://d123.cloudfront.net/Tshiamo/5.jpg",
  "https://d123.cloudfront.net/Tshiamo/6.jpg"
];

export default function TshiamoGallery() {
  return (
    <article className="impilo-article editorial-page theme-purple">
      <header className="article-header">
        <h1>Tshiamo</h1>
        <p className="article-subtitle">Digital Media & Streaming</p>
      </header>

      <section className="story-images-grid">
        {tshiamoImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Tshiamo story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {tshiamoImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Tshiamo gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example4" title="Tshiamo Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Tshiamo/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Tshiamo with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
