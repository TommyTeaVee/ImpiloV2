import React from "react";

const leratoImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003039-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003049-Enhanced-SR-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003205-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003330-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003521-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003716-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003718-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003742-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015003852-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015004254-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015004623-Enhanced-SR.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015004838-Enhanced-SR.jpg",
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015004924-Enhanced-SR.jpg",
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20231015005225-Enhanced-SR.jpg",
     "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014222101-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014222202-Enhanced-SR.jpg",
       "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014222249-Enhanced-SR.jpg",
        "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014222311-Enhanced-SR.jpg",
         "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014223936-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014223940-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014223941-Enhanced-SR.jpg", 
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014223942-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014224155-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014224158-Enhanced-SR.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/20241014224801-Enhanced-SR.jpg", 
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0578.jpg" ,
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0586.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0591.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0594.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0597.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0604.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0607.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0608.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0609.jpg",
       "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0619.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0620.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0621.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0625.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0627.jpg",
            "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0636.jpg",
              "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0643.jpg",
   "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0646-Enhanced-SR.jpg",
    "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0666.jpg",
     "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0672.jpg",
      "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Lerato/IMG_0681.jpg",
      
];

export default function LeratoGallery() {
  return (
    <article className="impilo-article editorial-page theme-blue"
    style={{ overflowY: "auto", maxHeight: "180vh" }}>
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
          <source src="https://d1zrm2iszdbieq.cloudfront.net/Lerato/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Lerato with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
