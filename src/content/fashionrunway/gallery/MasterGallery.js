import React, { useEffect, useState } from "react";

// Helper: pre-load image and detect dimensions
const loadImage = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve({ url, width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve({ url, width: 0, height: 0 });
  });

export default function MasterGallery({
  images = [], // { url: string, caption?: string }
  embeds = [], // { type: 'youtube'|'instagram'|'tiktok', url: string }
}) {
  const [portraitImages, setPortraitImages] = useState([]);
  const [landscapeImages, setLandscapeImages] = useState([]);

  useEffect(() => {
    async function processImages() {
      const loaded = await Promise.all(images.map((img) => loadImage(img.url)));
      const portraits = loaded.filter((img) => img.height >= img.width);
      const landscapes = loaded.filter((img) => img.width > img.height);
      setPortraitImages(portraits);
      setLandscapeImages(landscapes);
    }
    processImages();
  }, [images]);

  return (
    <section className="section uk-section glass-card uk-animation-fade">
      {/* Top Landscape Images */}
      {landscapeImages.length > 0 && (
        <div className="uk-grid-small uk-child-width-1-2@s uk-margin-medium-bottom" uk-grid="true">
          {landscapeImages.map((img, i) => (
            <div key={`lt-${i}`} className="glass-card uk-animation-fade" style={{ animationDelay: `${i * 150}ms` }}>
              <img src={img.url} alt={`Landscape ${i}`} className="uk-width-1-1" />
              {img.caption && <figcaption className="uk-text-center">{img.caption}</figcaption>}
            </div>
          ))}
        </div>
      )}

      {/* Portraits */}
      {portraitImages.length > 0 && (
        <div className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-margin-medium-bottom" uk-grid="true">
          {portraitImages.map((img, i) => (
            <div key={`p-${i}`} className="glass-card uk-animation-fade" style={{ animationDelay: `${i * 100}ms` }}>
              <img src={img.url} alt={`Portrait ${i}`} className="uk-width-1-1" />
              {img.caption && <figcaption className="uk-text-center">{img.caption}</figcaption>}
            </div>
          ))}
        </div>
      )}

      {/* Embedded media */}
      {embeds.length > 0 && (
        <div className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-medium-bottom" uk-grid="true">
          {embeds.map((embed, i) => (
            <div key={`e-${i}`} className="glass-card uk-animation-fade" style={{ animationDelay: `${i * 150}ms` }}>
              {embed.type === "youtube" && (
                <iframe
                  width="100%"
                  height="250"
                  src={embed.url}
                  title={`YouTube video ${i}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {embed.type === "instagram" && (
                <iframe
                  src={embed.url}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                  scrolling="no"
                  title={`Instagram embed ${i}`}
                ></iframe>
              )}
              {embed.type === "tiktok" && (
                <iframe
                  src={embed.url}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  allowFullScreen
                  title={`TikTok embed ${i}`}
                ></iframe>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Bottom Landscapes */}
      {landscapeImages.length > 0 && (
        <div className="uk-grid-small uk-child-width-1-2@s uk-margin-medium-top" uk-grid="true">
          {landscapeImages.map((img, i) => (
            <div key={`lb-${i}`} className="glass-card uk-animation-fade" style={{ animationDelay: `${i * 150}ms` }}>
              <img src={img.url} alt={`Landscape Bottom ${i}`} className="uk-width-1-1" />
              {img.caption && <figcaption className="uk-text-center">{img.caption}</figcaption>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
