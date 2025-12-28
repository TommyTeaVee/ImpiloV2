import React from "react";

const niyaImages = [
  "https://d123.cloudfront.net/Niya/photo1.jpg",
  "https://d123.cloudfront.net/Niya/photo2.jpg",
  "https://d123.cloudfront.net/Niya/photo3.jpg",
  "https://d123.cloudfront.net/Niya/photo4.jpg",
  "https://d123.cloudfront.net/Niya/photo5.jpg",
  "https://d123.cloudfront.net/Niya/photo6.jpg",
  "https://d123.cloudfront.net/Niya/photo7.jpg",
  "https://d123.cloudfront.net/Niya/photo8.jpg"
];

export default function NiyaGallery() {
  return (
    <article className="impilo-article editorial-page theme-pink">
      <header className="article-header">
        <h1>Sagrita</h1>
        <p className="article-subtitle">Editorial Modelling</p>
      </header>

      <section className="story-images-grid">
        {niyaImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Niya story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {niyaImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Niya gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example2" title="Niya Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Niya/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Niya with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
