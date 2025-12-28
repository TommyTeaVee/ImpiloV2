import React from "react";

export default function ModelAgency() {
  return (
    <article style={{overflowY: 'auto', maxHeight: '180vh'}}  className="editorial-feature uk-article glass-card gradient-gloss theme-blue">

      {/* HERO SECTION */}
      <section className="editorial-hero">
        <img src="https://images.pexels.com/photos/10679201/pexels-photo-10679201.jpeg" alt="Black Diamond Ambassador Team" />

        <div className="editorial-hero-overlay">
          <h1>
            HOW DO WE<br />
            MOLD THE FUTURE<br />
            IN OUR HANDS
          </h1>

          <span className="editorial-tag">INTRODUCTION</span>
        </div>
      </section>

      {/* BODY */}
      <section className="editorial-body">

        {/* LEFT COLUMN */}
        <div className="editorial-left">
          <p>
            <strong>Mr. and Mrs Black Diamond Ambassador</strong> is a pageant
            that aims to build both males and females to become our
            <strong> leaders of tomorrow</strong>, with confidence and style.
            The organisation is based in <strong>Eastern Cape, Queenstown</strong>.
          </p>

          <figure className="editorial-image">
            <img src="/images/team.jpg" alt="The Team" />
            <figcaption>THE TEAM</figcaption>
          </figure>

          {/* AUDIO */}
          <div className="editorial-audio">
            <h4>🎧 Audio Story</h4>
            <audio controls>
              <source src="/audio/black-diamond-intro.mp3" />
            </audio>
          </div>

          {/* INLINE AD */}
          <div className="ad-inline">
            Sponsored by · Leadership Development Programme
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <aside className="editorial-right">
          <p>
            We also host a pageant for <strong>young girls and boys</strong> from
            Queenstown to boost their level of confidence and leadership skills.
            This pageant is called <strong>Mr and Mrs Mlungisi</strong>.
          </p>

          <p>
            Our provincial title is <strong>Mr and Mrs Intelligence Eastern Cape</strong>.
            You can follow all our work and behind-the-scenes moments on Facebook.
          </p>

          <blockquote className="editorial-quote">
            “We take a close look into the workings of our pageants and get to
            know the stories, dreams and motivations behind every participant.”
          </blockquote>

          {/* VIDEO */}
          <div className="editorial-video">
            <h4>▶ Feature Documentary</h4>
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Black Diamond Ambassador"
              allowFullScreen
            />
          </div>

          {/* SIDEBAR AD */}
          <div className="ad-sidebar">
            Partner Feature · Youth Empowerment NGO
          </div>
        </aside>

      </section>

      {/* FOOTER */}
      <footer className="editorial-footer">
        IMPILO MAGAZINE
      </footer>

    </article>
  );
}
