import React from 'react';

export function WelcomeArticle() {
  return (
     <article className="uk-article app app-container" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <header className="article-header">
        <h1 >Welcome to <br/>Impilo Digital Magazine</h1>
      </header>

      <div className="video-section">
        <video
          className="portrait-video"
          src="https://d16o5gtkyqkgf2.cloudfront.net/mel_gallery.mp4"
          controls
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="article-body">
        <p className='uk-dropcap'> 
          Welcome to our world of digital innovation! At IMPILO Magazine, we are passionate about bringing you the best of content through our digital platform. 
          As a digital magazine, we pride ourselves on offering a wider reach and unparalleled accessibility, allowing readers from every corner of the globe to dive into our stories instantly, 
          free from geographical or logistical constraints.</p>

<p>We are dedicated to sustainability, and by choosing a digital format, we significantly reduce waste by eliminating the need for paper and ink. 
Our platform isn’t just about reading—it's an interactive experience. With multimedia capabilities such as videos and hyperlinks, we're able to engage you in ways that traditional print simply can't.

        </p>
        <p>
          At Impilo Digital Magazine, we celebrate creativity, style, culture, and identity. 
          Our platform is dedicated to highlighting unique voices and inspiring stories from around the country.
        </p>
        <p>
          Stay tuned for exclusive features, interviews, behind-the-scenes footage, and spotlights on the emerging 
          talent shaping our future. Welcome to a world where every story matters.
        </p>
      </section>
    </article>
  );
}
