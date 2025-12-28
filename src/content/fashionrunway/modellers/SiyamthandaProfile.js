import React from "react";

export default function SiyamthandaMdleleniArticle() {
  return (
    <article style={{overflowY: 'auto', maxHeight: '180vh'}}  className="uk-article editorial-page impilo-article glass-card gradient-gloss">

      {/* HERO IMAGE */}
      <section className="article-hero">
        <img
          src="https://images.pexels.com/photos/4557879/pexels-photo-4557879.jpeg"
          alt="Siyamthanda Mdleleni"
        />
      </section>

      {/* HEADER */}
      <header className="article-header theme-pink">
        <h1>SIYAMTHANDA</h1>
        <h2 style={{ letterSpacing: "0.25em", fontWeight: 300 }}>
          MDLELENI
        </h2>
      </header>

      {/* CONTENT */}
      <section className="article-content">

        {/* LEFT TEXT */}
        <div className="article-text">
          <p>
            I advocate for Ubuntu. I believe that Ubuntu is an old African idea
            that says we are only human beings through the humanity of others.
          </p>

          <p>
            Ubuntu is all based on love, truth, peace, happiness, togetherness,
            and human value. Remember that Ubuntu is the core of human value and
            without it, mankind is enveloped by greed, selfishness, pride, and
            immorality.
          </p>

          <p>
            I’m inspired by Zozibini Tunzi because she is the first Black woman
            to win the competition. She taught us that leadership is important,
            especially for young girls and women.
          </p>

          {/* AUDIO / PODCAST */}
          <div className="editorial-audio">
            <h4>🎧 Audio Interview</h4>
            <audio controls>
              <source src="/audio/siyamthanda-ubuntu.mp3" type="audio/mpeg" />
            </audio>
          </div>

          {/* MONETIZATION */}
          <div className="ad-inline">
            Sponsored Feature · Empowerment Brand
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <aside className="article-portrait">

          <p className="location">
            <strong>22 years old</strong> from Queenstown,
            Eastern Cape. Currently residing in Underberg,
            KwaZulu-Natal.
          </p>

          <blockquote className="siyamthanda-quote">
            “That Ubuntu is an old African idea that says we are only human
            beings through the humanity of others. Ubuntu is based on love,
            truth, peace, happiness, togetherness and human value.”
          </blockquote>

          <div className="article-highlight theme-pink">
            <h2>ACHIEVEMENT</h2>
            <ul>
              <li>Miss Hephzibah Personality 2022</li>
            </ul>
          </div>

          {/* VIDEO PLACEHOLDER */}
          <div className="editorial-video">
            <h4>▶ Feature Video</h4>
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Siyamthanda Feature"
              frameBorder="0"
              allowFullScreen
            />
          </div>

          {/* SIDEBAR AD */}
          <div className="ad-sidebar">
            Model Portfolio · Brand Partner
          </div>

        </aside>
      </section>

      {/* FOOTER */}
      <footer className="article-footer theme-pink">
        IMPILO MAGAZINE
      </footer>
    </article>
  );
}
