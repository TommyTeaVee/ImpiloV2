import React from "react";

export function SidebarThumbnails({ categories, activePage, onClickPage }) {
  return (
    <div className="uk-visible@m" style={{ width: "140px", position: "sticky", top: "120px" }}>
      <ul className="uk-nav uk-nav-default uk-padding-small">
        {categories.map((cat, index) => (
          <li
            key={cat.id}
            className={activePage === index ? "uk-active" : ""}
            style={{ marginBottom: "12px" }}
          >
            <button
              className="uk-button uk-button-text uk-text-left"
              onClick={() => onClickPage(index)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Hover Thumbnails */}
      <div className="uk-margin-top uk-flex uk-flex-center">
        {categories.map((cat, index) => (
          <img
            key={cat.id}
            src={cat.thumb}
            alt={cat.name}
            className="uk-border-rounded uk-box-shadow-small"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              marginBottom: "8px",
              opacity: activePage === index ? 1 : 0.5,
              cursor: "pointer",
              transition: "opacity 0.3s, transform 0.3s",
              transform: activePage === index ? "scale(1.05)" : "scale(1)"
            }}
            onClick={() => onClickPage(index)}
          />
        ))}
      </div>
    </div>
  );
}
