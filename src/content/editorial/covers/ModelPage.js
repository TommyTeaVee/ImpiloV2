import React from "react";

/**
 * ModelPage
 * @param {string} name - Model name
 * @param {string} subtitle - Optional description
 * @param {array} images - Array of image URLs
 * @param {array} videos - Array of CloudFront video URLs
 */
export default function ModelPage({ name, subtitle, images, videos }) {
  const isPortrait = (url) => url.toLowerCase().includes("portrait");

  return (
    <div className="editorial-page uk-article gradient-gloss" style={{ width: "100%", height: "100%" }}>
      {/* Header */}
      <header className="theme-dark-blue uk-light uk-text-center uk-padding-small">
        <h1>{name}</h1>
        {subtitle && <h4 className="article-subtitle">{subtitle}</h4>}
      </header>

      {/* Image gallery */}
      <section className="article-content uk-grid-small uk-flex-center uk-flex-wrap" uk-grid="true">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`uk-flex uk-flex-center uk-flex-middle image-container ${isPortrait(img) ? "portrait" : "landscape"}`}
          >
            <img
              src={img}
              alt={`${name} ${idx + 1}`}
              className="uk-border-rounded uk-object-cover"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
        ))}
      </section>

      {/* Videos */}
      {videos && videos.length > 0 && (
        <section className="uk-margin-large-top uk-grid-small uk-child-width-1-1@s uk-child-width-1-2@m uk-flex-center" uk-grid="true">
          {videos.map((url, idx) => (
            <div key={idx} className="uk-inline video-container">
              <video src={url} controls className="uk-width-1-1 uk-border-rounded" style={{ maxHeight: "300px" }} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
