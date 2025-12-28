import React from "react";

const niyaImages = [
 "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597276777_845191011476625_5468057120930678414_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597294462_1579807106702969_2406400255434832480_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597341294_854562023855290_4884005913892026060_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597554090_1262392849258999_2136210632167120071_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/598544775_1596265338392491_776237317003461488_n.jpg"
];

export default function NiyaGallery() {
  return (
    <article className="impilo-article editorial-page theme-pink">
      <header className="article-header">
        <h1>Niya</h1>
        <p className="article-subtitle">Aspiring  Model & Stylist</p>
      </header>

      <section className="story-images-grid">
        {niyaImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Niya story ${i + 5}`} />
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

    {/*   <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example2" title="Niya Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Niya/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Niya with a tip or digital product</div>
      </section> */}

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
