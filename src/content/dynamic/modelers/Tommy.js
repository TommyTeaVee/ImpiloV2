import React from 'react';
import contents from '../../../contents';

export function Tommy() {
  const content = contents[0];

  return (
  
    <article className="uk-article" style={{ overflowY: 'auto', maxHeight: '180vh' }}>
      <div className="uk-container uk-margin-large-top">
        <div className="uk-grid-large uk-child-width-1-1@m uk-grid-match" data-uk-grid>
          {/* Left Column */}
          <div>
            <h1 className="uk-heading-medium" style={{ fontFamily: content.fontFamily }}>
              About Me
            </h1>
            <h2 className="uk-text-lead">Tommy V. Fihla</h2>
            <h3 className="uk-heading-line"><span>My Bio</span></h3>
            <div class="uk-panel uk-panel-box uk-panel-box-primary">
            <p className="uk-text-lead uk-margin-top uk-text-justify uk-dropcap">
              My name is Tommy V. Fihla, I am Founder and Chief Editor of Impilo Digital Magazine. I am an innovative creative.
              I enjoy creative photography, cinematography and optical illusion. One thing I like about what I do is the ability
              to connect with the audience and tell stories in an engaging and captivating way.
            </p>
</div>
 <div className="uk-position-relative uk-margin-medium-top uk-overflow-hidden">
  {/* Video */}
  <video width="100%" controls loop playsInline data-uk-video="autoplay: inview">
    <source src="https://d16o5gtkyqkgf2.cloudfront.net/Intro-bio.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Animated Teleticker */}
  <div className="ticker-overlay uk-position-bottom uk-position-small uk-width-1-2">
    <div className="uk-card uk-card-small uk-card-body uk-card-default ticker-track">
      <div className="ticker-text">
        Founder and Chief Editor — Welcome to Impilo Digital Magazine — Stay tuned for exclusive content
      </div>
    </div>
  </div>
</div>


            {/* Audio Section */}
            <div className="uk-margin-medium-top">
              <h3 className="uk-heading-line"><span>Featured Audio</span></h3>
              <audio controls className="uk-width-1-1">
                <source src="https://archive.org/download/believe_202104/Believe.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h1 className="uk-heading-medium" style={{ fontFamily: content.fontFamily }}>
              Skills
            </h1>

            <h3 className="uk-heading-line"><span>Modeling Agent</span></h3>
            <div className="uk-grid-small uk-child-width-1-2@s" data-uk-grid>
              {[
                "Professional Modelling Photoshoot",
                "Portfolio Development",
                "Coaching and Mentoring",
                "Runway and Fashion Coordination"
              ].map((item, index) => (
                <div key={index} className="uk-card uk-card-default uk-card-body uk-card-small">
                  {item}
                </div>
              ))}
            </div>

            <h3 className="uk-heading-line uk-margin-large-top"><span>Performance Arts</span></h3>
            <div className="uk-grid-small uk-child-width-2-2@s" data-uk-grid>
              {[
                "Creative Photography",
                "Product Photography",
                "Cinematography",
                "Visual Effects and CGI",
                "Animation",
                "Scriptwriting"
              ].map((item, index) => (
                <div key={index} className="uk-card uk-card-default uk-card-body uk-card-small">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
