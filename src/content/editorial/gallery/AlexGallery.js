import React from "react";

const alexImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597613140_1174187981033040_6470994187745984638_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/588368821_1125058359796949_6930297484511444639_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/589912712_1680723502905537_8456216366489532862_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/591705776_866181062533320_3094779934071122464_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/5588212942_1491891708530949_1820565203027167313_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex597235561_25468893126083089_8798243625842166663_n.jpg",
   "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597723630_2243718366128208_8143169235445074438_n.jpg",
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/599588821_919309747120543_4303400229194063118_n.jpg",
     
  
  
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
          src="https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/VID_20251218_002504_583.mp4"
          title="Alex Video"
          frameBorder="0"
          allowFullScreen
        />
      </section>

      {/* Audio Player 
      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Alex/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>*/}

      {/* Monetization / Tip Jar 
      <section className="monetization">
        <div className="tip-jar">Support Alex with a tip or digital product</div>
      </section>
*/}
      <footer className="article-footer"> &copy IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
