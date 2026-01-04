import React, { useState } from "react";


export default function ImpiloCover() {
  const [theme, setTheme] = useState("exclusive"); // exclusive | nomercy

  return (
    <article
      className={`uk-article impilo-cover ${theme}`}
      style={{ overflowY: "auto", maxHeight: "180vh" }}
      uk-scrollspy="cls: uk-animation-fade; repeat: true"
    >
      {/* Theme Switch (optional admin/editor control) */}
      <div className="impilo-theme-toggle">
        <button onClick={() => setTheme("exclusive")}>Exclusive</button>
        <button onClick={() => setTheme("nomercy")}>No Mercy</button>
      </div>

      {/* Masthead */}
      <header
        className="uk-text-center uk-margin-large-bottom"
        uk-scrollspy="cls: uk-animation-slide-top-medium"
      >
        <div className="impilo-ring"></div>
        <h1 className="impilo-logo">
          <span className="impilo-i">I</span>MPILO
        </h1>
        <div className="impilo-sub">MAGAZINE</div>
      </header>

      {/* Main Grid */}
      <div
        className="uk-grid-large uk-grid-divider uk-flex-center"
        uk-grid="true"
      >
        {/* Hero Image */}
        <div className="uk-width-1-1 uk-width-1-2@m uk-text-center">
          <div
            className="impilo-hero-wrapper"
            uk-scrollspy="cls: uk-animation-scale-up"
          >
            <img
              src="https://images.pexels.com/photos/32371795/pexels-photo-32371795.jpeg"
              alt="Impilo Feature"
              className="impilo-model"
            />

            {/* Audio Overlay */}
            <button
              className="impilo-audio-btn"
              uk-toggle="target: #audio-modal"
            >
              ▶ LISTEN
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="uk-width-1-1 uk-width-1-2@m">
          <div className="uk-grid-small" uk-grid="true">
            <div className="uk-width-1-2">
              <img
                src="https://images.pexels.com/photos/15647623/pexels-photo-15647623.jpeg"
                className="impilo-cert"
                alt="Visual Arts Certificate"
              />
            </div>
            <div className="uk-width-1-2">
              <img
                src="/images/cert-mentorship.jpeg"
                className="impilo-cert"
                alt="Mentorship Certificate"
              />
            </div>
          </div>

          <div
            className="uk-text-center uk-margin-top"
            uk-scrollspy="cls: uk-animation-slide-bottom-medium"
          >
            <span className="impilo-tag">Exclusive</span>
            <h3 className="impilo-runway">JOZI FASHION RUNWAY</h3>
            <p className="impilo-est">EST. 2024</p>
          </div>
        </div>
      </div>

      {/* Swipe Hint */}
      <div className="impilo-swipe-hint">
        <span uk-icon="icon: arrow-down"></span>
        <p>Swipe / Scroll</p>
      </div>

      {/* Audio Modal */}
      <div id="audio-modal" uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
          <h3>Impilo Podcast</h3>
          <audio controls autoPlay style={{ width: "100%" }}>
            <source src="/audio/impilo-feature.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </article>
  );
}
