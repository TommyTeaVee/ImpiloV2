import React from "react";

export default function PortfolioCard({ name, subtitle, images, videos }) {
  const isPortrait = (url) => url.toLowerCase().includes("portrait");

  return (
    <article className="editorial-page uk-article gradient-gloss" style={{ overflowY: "auto", maxHeight: "180vh" }}>
      {/* Header */}
      <header className="theme-dark-blue uk-light uk-text-center uk-padding-small">
        <h1>{name}</h1>
        <h4 className="article-subtitle">{subtitle}</h4>
      </header>

      {/* Images */}
      <section className="article-content uk-grid-small uk-flex-center uk-flex-wrap" uk-grid="true">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`uk-flex uk-flex-center uk-flex-middle image-container  ${isPortrait(img) ? "portrait" : "landscape"}`}
          >
            <img src={img} alt={`${name} ${idx + 1}`} className="uk-border-rounded uk-object-cover portfolio-img" style={{ width: "100%", height: "100%", display: "block" }} />
          </div>
        ))}
      </section>

      {/* CloudFront videos */}
      {videos && videos.length > 0 && (
        <section className="uk-margin-large-top uk-grid-small uk-child-width-1-1@s uk-child-width-1-2@m uk-flex-center" uk-grid="true">
          {videos.map((url, idx) => (
            <div key={idx} className="uk-inline video-container">
              <video src={url} controls className="uk-width-1-1 uk-border-rounded" style={{ maxHeight: "300px" }}>
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </section>
      )}
    </article>
  );
}
