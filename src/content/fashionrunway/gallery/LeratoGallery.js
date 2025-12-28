import React from "react";

const leratoImages = [
  "https://d123.cloudfront.net/Lerato/1.jpg",
  "https://d123.cloudfront.net/Lerato/2.jpg",
  "https://d123.cloudfront.net/Lerato/3.jpg",
  "https://d123.cloudfront.net/Lerato/4.jpg",
  "https://d123.cloudfront.net/Lerato/5.jpg",
  "https://d123.cloudfront.net/Lerato/6.jpg",
  "https://d123.cloudfront.net/Lerato/7.jpg",
  "https://d123.cloudfront.net/Lerato/8.jpg",
  "https://d123.cloudfront.net/Lerato/9.jpg",
  "https://d123.cloudfront.net/Lerato/10.jpg",
  "https://d123.cloudfront.net/Lerato/11.jpg",
  "https://d123.cloudfront.net/Lerato/12.jpg"
];

export default function LeratoGallery() {
  return (
    <article className="impilo-article editorial-page theme-blue">
      <header className="article-header">
        <h1>Lerato</h1>
        <p className="article-subtitle">Creative Direction</p>
      </header>

      <section className="story-images-grid">
        {leratoImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Lerato story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {leratoImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Lerato gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example6" title="Lerato Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Lerato/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Lerato with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
