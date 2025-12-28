import React from "react";

const rapoleImages = [
  "https://d123.cloudfront.net/Rapole/1.jpg",
  "https://d123.cloudfront.net/Rapole/2.jpg",
  "https://d123.cloudfront.net/Rapole/3.jpg",
  "https://d123.cloudfront.net/Rapole/4.jpg",
  "https://d123.cloudfront.net/Rapole/5.jpg",
  "https://d123.cloudfront.net/Rapole/6.jpg",
  "https://d123.cloudfront.net/Rapole/7.jpg",
  "https://d123.cloudfront.net/Rapole/8.jpg"
];

export default function RapoleGallery() {
  return (
    <article className="impilo-article editorial-page theme-lime">
      <header className="article-header">
        <h1>Rapole</h1>
        <p className="article-subtitle">Fashion Innovation</p>
      </header>

      <section className="story-images-grid">
        {rapoleImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Rapole story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {rapoleImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Rapole gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example5" title="Rapole Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Rapole/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Rapole with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
