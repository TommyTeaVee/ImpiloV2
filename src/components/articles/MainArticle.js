// ArticleLayout.jsx
export default function MainArticle({
  theme,
  title="My main Article",
  subtitle,
  hero,
  portrait,
  audio,
  video,
  children,
  highlights
}) {
  return (
    <article style={{overflowY: 'auto', maxHeight: '180vh'}} className={`uk-article editorial-page ${theme} `}>

      {/* HEADER */}
      <header className="editorial-header uk-text-center">
        <h1>{title}</h1>
        <p className="editorial-subtitle">{subtitle}</p>
      </header>

      {/* HERO */}
      <div className="uk-container uk-margin-large-top">
        <img src={hero} alt={title} className="editorial-hero" />
      </div>

      {/* BODY */}
      <div className="uk-container uk-margin-large-top">
        <div uk-grid="true" className="uk-grid-large">

          {/* TEXT */}
          <div className="uk-width-2-3@m editorial-text">
            {children}

            {/* AUDIO */}
            {audio && (
              <div className="editorial-audio">
                <h4>🎧 Audio / Podcast</h4>
                <audio controls src={audio}></audio>
              </div>
            )}

            {/* VIDEO */}
            {video && (
              <div className="editorial-video">
                <h4>▶ Feature Video</h4>
                <div className="uk-responsive-width">
                  <iframe
                    src={video}
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="uk-width-1-3@m">
            <img src={portrait} className="editorial-portrait" />

            {highlights && (
              <div className="editorial-highlights">
                <h3>HIGHLIGHTS</h3>
                <ul>
                  {highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="editorial-footer uk-text-center">
        IMPILO MAGAZINE — FEATURE STORY
      </footer>

    </article>
  );
}
