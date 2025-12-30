import React from "react";

// Replace these URLs with your actual cloud-hosted images
const heroImage = "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597554090_1262392849258999_2136210632167120071_n.jpg";
const storyImages = [
  //"https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597554090_1262392849258999_2136210632167120071_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597276777_845191011476625_5468057120930678414_n.jpg"
];
const galleryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597276777_845191011476625_5468057120930678414_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Thats_Niya/597294462_1579807106702969_2406400255434832480_n.jpg",
  "https://d123.cloudfront.net/LaNiya/3.jpg",
  "https://d123.cloudfront.net/LaNiya/4.jpg",
  "https://d123.cloudfront.net/LaNiya/5.jpg",
  "https://d123.cloudfront.net/LaNiya/6.jpg"
];

export default function LaNiyaProfile() {
  return (
    <article style={{overflowY: 'auto', maxHeight: '180vh'}}  className="editorial-page  uk-article  glass-card gradient-gloss">
      {/* Header */}
      <header className="article-header  editorial-header theme-rose uk-light">
        <h1>La’Niya</h1>
        <p className="article-subtitle">Model & Hairstylist – New York City</p>
      </header>

      {/* Hero */}
      <section className="article-hero glass-card">
        <img src={heroImage} alt="La’Niya Hero" />
      </section>

    
      <section className="story-images-grid uk-width-1-1@m">
        {storyImages.map((img, i) => (
          <div key={i} >
            <img className="uk-border-circle" src={img} alt={`Story ${i + 1}`} />
          </div>
        ))}
    
      {/* Article Content */}
      
        <div className="article-text uk-dropcap  uk-width-1-1@m ">
          <p>My name is <strong>La’Niya</strong>, and I’m an aspiring <strong>model</strong> and professional <strong>hairstylist</strong> based in the vibrant heart of New York City.</p>
          <p>I specialize in <strong>commercial and print modeling</strong>, bringing energy, creativity, and professionalism to every shoot I participate in. Combining my modeling experience with hairstyling, I offer a unique perspective to every creative project.</p>
          <p>Having completed cosmetology school, I am passionate about hair, beauty, and personal styling. I am eager to continue <strong>building my portfolio</strong>, collaborating with photographers, stylists, and brands, and exploring new opportunities in the NYC fashion scene.</p>
         
        </div>
      </section>

      
      {/* Footer */}
      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}

export const LaNiyaArticle2=() =>{
  return (
    <article className="impilo-article editorial-page theme-lime">
      <header className="article-header glass-card">
        <h1>La’Niya</h1>
        <p className="article-subtitle">Model & Hairstylist – NYC</p>
      </header>

      {/* Hero */}
      <section className="article-hero glass-card">
        <img src={storyImages[1]} alt="La'Niya Hero" />
      </section>

      {/* Story Image */}
      <section className="story-images-grid">
        <div className="story-image-wrapper glass-card">
          <img src={storyImages[1]} alt="Story 1" />
        </div>
      </section>

      {/* Portrait Grid */}
      <section className="gallery-grid">
        {galleryImages.slice(2).map((img, i) => (
          <div key={i} className="gallery-image-wrapper glass-card">
            <img src={img} alt={`Portrait ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Video & Audio & Tip Jar */}
      <section className="video-embed glass-card">
        <iframe
          src="https://www.youtube.com/embed/example"
          title="La'Niya Video"
          frameBorder="0"
          allowFullScreen
        />
      </section>

      <section className="audio-player glass-card">
        <audio controls>
          <source src="https://d123.cloudfront.net/LaNiya/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar glass-card">Support La’Niya with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}





