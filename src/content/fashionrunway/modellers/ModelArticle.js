import React from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

export function ModelArticle({ name, type, description, images, video, insta, tiktok }) {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh" }}>
      <div className="uk-container uk-padding-large">
        {/* Header */}
        <h1 className="uk-article-title uk-text-center">{name}</h1>
        <h4 className="uk-text-center uk-text-muted">{type} Model</h4>

        {/* Images Section */}
        <div className="uk-grid-small uk-child-width-1-2@s uk-margin-top" data-uk-grid>
          {images.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`${name} ${idx}`} className="uk-border-rounded uk-width-1-1" />
            </div>
          ))}
        </div>

        {/* Video */}
        {video && (
          <div className="uk-margin-large-top uk-flex uk-flex-center">
            <video
              src={video}
              controls
              loop
              playsInline
              className="uk-border-rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}

        {/* Description */}
        <div className="uk-margin-large-top uk-text-justify" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
          {description}
        </div>

        {/* Social Links */}
        <div className="uk-card uk-card-default uk-card-body uk-margin-large-top">
          <h4>Connect with {name}</h4>
          <ul className="uk-list uk-list-divider">
            {insta && (
              <li>
                <a href={insta} target="_blank" rel="noreferrer">@{name} (Instagram)</a>
              </li>
            )}
            {tiktok && (
              <li>
                <a href={tiktok} target="_blank" rel="noreferrer">@{name} (TikTok)</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
}
