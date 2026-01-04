import React, { useState, useEffect } from "react";

function DynamicCloudGallery({ folderURL, title, subtitle, theme = "gold", ext = ".jpg", count = 12 }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imgs = [];
    for (let i = 1; i <= count; i++) {
      imgs.push(`${folderURL}img${i}${ext}`);
    }
    setImages(imgs);
  }, [folderURL, ext, count]);

  return (
    <article className={`impilo-article editorial-page theme-${theme}`}>
      <header className="article-header">
        <h1>{title}</h1>
        {subtitle && <p className="article-subtitle">{subtitle}</p>}
      </header>

      <section className="gallery-album">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`${title} gallery ${i + 1}`} />
        ))}
      </section>
    </article>
  );
}

export default DynamicCloudGallery;
