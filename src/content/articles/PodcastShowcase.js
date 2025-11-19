import React from 'react';

export function PodcastShowcase() {
  const podcasts = [
    {
  title: "Episode 1: Creative Beginnings",
  description: "An inspiring dive into Tommy V. Fihla’s journey in digital media, visual storytelling, and the creative process behind Impilo Digital Magazine.",
  audioSrc: "https://d16o5gtkyqkgf2.cloudfront.net/podcasts/Trend+Break.mp3",
  imageSrc: "https://d16o5gtkyqkgf2.cloudfront.net/podcasts/Firefly_create+a+cover+page+model++reading+an+Impilo+magazine+must+be+black%2C+impilo+must+be+v+719537.jpg"
},

    {
      title: "Episode 2: The Power of Visual Media",
      description: "We explore how cinematography, photography, and fashion intersect in modern African storytelling. Insights and lessons from the field.",
      audioSrc: "https://d16o5gtkyqkgf2.cloudfront.net/podcasts/Trend+Break.mp3",
      imageSrc: "https://d16o5gtkyqkgf2.cloudfront.net/cover1.png"
    }
  ];

  return (
    <article  style={{overflowY: 'auto', maxHeight: '180vh'}} className="uk-article uk-section">
      <div className="uk-container">
        <h1 className="uk-heading-medium uk-text-center">🎙️ Latest Podcasts</h1>

        <div className="uk-grid-large" data-uk-grid>
          {podcasts.map((pod, index) => (
            <div key={index} className="uk-width-1-1">
              <div className="uk-card uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-1@s uk-child-width-1-2@m uk-flex-middle" data-uk-grid>
                
                {/* Album Art */}
                <div className="uk-card-media-left uk-cover-container">
                  <img src={pod.imageSrc} alt={`Album art for ${pod.title}`} uk-cover="true" />
                  <canvas width="600" height="600"></canvas>
                </div>

                {/* Podcast Info */}
                <div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title" style={{ fontFamily: 'Didot, serif' }}>{pod.title}</h3>
                    <p className="uk-text-justify">{pod.description}</p>
                    <audio controls className="uk-width-1-1 uk-margin-small-top">
                      <source src={pod.audioSrc} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
