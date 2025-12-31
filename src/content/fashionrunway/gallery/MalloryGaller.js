

const maloryImages = [
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/597509587_1773913143307480_3343662049904525811_n.jpg",
 "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/594492881_839450478990650_6108248294909079814_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/594508902_3532804803526203_322427045526266923_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/595067756_752644143823393_3490901065141491330_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/597142850_1541741730305404_3937074414282302100_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/597193519_888093877243086_2140226843720845223_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/597577569_1609019990462459_9155969753040145459_n.jpg",
  "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/594398058_848023231361606_3252975973675872416_n.jpg",
  
];

export default function MaloryGallery() {
  return (
    <article className="impilo-article editorial-page" style={{ overflowY: "auto", maxHeight: "180vh" }}>
      <header className="article-header">
        <h1>Malory</h1>
        <p className="article-subtitle">Performance Arts</p>
      </header>

      <section className="story-images-grid">
        {maloryImages.slice(0, 2).map((img, i) => (
          <div key={i} className="story-image-wrapper">
            <img src={img} alt={`Malory story ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-grid">
        {maloryImages.map((img, i) => (
          <div key={i} className="gallery-image-wrapper">
            <img src={img} alt={`Malory gallery ${i + 1}`} />
          </div>
        ))}
      </section>
  {/* Gallery */}
      <section className="article-content glass-card">
        <h2>Editorial Gallery</h2>
        <div
          className="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="true"
        >
          {maloryImages.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`Mallory Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="video-embed">
        <iframe src="https://www.youtube.com/embed/example3" title="Malory Video" frameBorder="0" allowFullScreen />
      </section>

      <section className="audio-player">
        <audio controls>
          <source src="https://d123.cloudfront.net/Malory/audio.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <section className="monetization">
        <div className="tip-jar">Support Malory with a tip or digital product</div>
      </section>

      <footer className="article-footer">IMPILO MAGAZINE • 2025</footer>
    </article>
  );
}
