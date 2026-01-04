import React from "react";

const learnmoreImages = [
  "https://d123.cloudfront.net/Learnmore/1.jpg",
  "https://d123.cloudfront.net/Learnmore/2.jpg",
  "https://d123.cloudfront.net/Learnmore/3.jpg",
  "https://d123.cloudfront.net/Learnmore/4.jpg",
  "https://d123.cloudfront.net/Learnmore/5.jpg",
  "https://d123.cloudfront.net/Learnmore/6.jpg",
  "https://d123.cloudfront.net/Learnmore/7.jpg",
  "https://d123.cloudfront.net/Learnmore/8.jpg",
  "https://d123.cloudfront.net/Learnmore/9.jpg",
  "https://d123.cloudfront.net/Learnmore/10.jpg"
];

export default function LearnmoreGaller() {
  return (
    <article className="impilo-article editorial-page theme-green">
      <header className="article-header">
        <h1>Learnmore</h1>
        <p className="article-subtitle">Creative Innovation & Editorial</p>
      </header>

      <section className="story-images-grid">
        {learnmoreImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Learnmore story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {learnmoreImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Learnmore gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example9" title="Learnmore Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Learnmore/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Learnmore with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
