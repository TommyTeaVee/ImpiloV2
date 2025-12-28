import React from "react";

const alexImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597613140_1174187981033040_6470994187745984638_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/588368821_1125058359796949_6930297484511444639_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/589912712_1680723502905537_8456216366489532862_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/591705776_866181062533320_3094779934071122464_n.jpg",
];



export default function AlexGallery() {
  return (
    <article className="impilo-article editorial-page theme-gold gallery-article">
      <header className="article-header">
        <h2>Alex</h2>
        <p className="article-subtitle">Fashion & Creativity</p>
      </header>

      {/* Story Images Grid */}
      <section className="gallery-grid">
        {alexImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Alex story ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Full Gallery Grid */}
      <section className="gallery-grid">
        {alexImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Alex gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Video Embed */}
      <section className="video-embed">
        <iframe
          src="https://www.youtube.com/embed/example1"
          title="Alex Video"
          frameBorder="0"
          allowFullScreen
        />
      </section>

      {/* Audio Player */}
      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Alex/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      {/* Monetization / Tip Jar */}
      <section className="monetization">
        <div className="tip-jar">Support Alex with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
