import React from "react";

const BalenciagaIntro = () => {
  return (
      <article
        className="uk-article"
        style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}
      >
        <div className="uk-container uk-margin-large-top">
          {/* Title + Hero */}
          <div className="uk-text-center uk-margin-large-bottom">
            <h1 className="uk-article-title uk-heading-line">
              <span>Balenciaga’s Indirect Influence on “Dad Shoes”</span>
            </h1>
            <p className="uk-text-lead uk-margin-remove-top">
              How a century-old couture philosophy redefined sneaker culture.
            </p>
          </div>

          {/* HERO IMAGE / VIDEO PLACEHOLDER */}
          <div className="uk-position-relative uk-margin-medium-bottom">
            <div className="uk-cover-container uk-height-large">
              <img
                src="https://media.gettyimages.com/id/2197973960/zh/%E7%85%A7%E7%89%87/paris-france-a-close-up-on-a-balenciaga-speed-trainers-sneaker-during-the-la-mode-en-mouvement.jpg"
                alt="Balenciaga runway show"
                data-uk-cover
              />
              {/* optional overlay gradient */}
              <canvas width="600" height="400"></canvas>
            </div>
            <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-text-center uk-padding-small">
              <p className="uk-text-meta">
                Editorial Placeholder — “Balenciaga Runway Collection Video”
              </p>
            </div>
          </div>

          {/* INTRODUCTION */}
          <p>
            The term <strong>“Dad Shoes”</strong> may sound ironic for an industry built on glamour,
            yet it’s the unexpected champion of modern sneaker culture. 
            Behind this phenomenon lies a silent architect — <strong>Balenciaga</strong>, 
            the century-old luxury house whose creative philosophy transformed how we define beauty, bulk, and nostalgia.
          </p>

          <p>
            Founded by Cristóbal Balenciaga in 1919, the house pioneered structure and precision.
            Decades later, creative director <strong>Demna Gvasalia</strong> revived those codes, 
            turning architectural couture into cultural commentary. When the <strong>Balenciaga Triple S</strong> 
            debuted in 2017, it did more than shock fashion editors — it validated the ordinary. 
            It gave permission for the world to find elegance in imperfection.
          </p>

          {/* PORTRAIT PLACEHOLDERS */}
          <div className="uk-grid-small uk-child-width-1-2@m uk-margin-medium-top" data-uk-grid>
            <div>
              <div className="uk-card uk-card-default uk-text-center">
                <div className="uk-cover-container uk-height-medium">
                  <img
                    src="https://www.wantedonline.co.za/resizer/v2/NID43MKD5VMYBMWPTZVIY2WOZ4.png"
                    alt="Cristobal Balenciaga"
                    data-uk-cover
                  />
                </div>
                <p className="uk-text-meta uk-padding-small">
                  Portrait Placeholder — Cristóbal Balenciaga, 1950s
                </p>
              </div>
            </div>

            <div>
              <div className="uk-card uk-card-default uk-text-center">
                <div className="uk-cover-container uk-height-medium">
                  <img
                    src="/images/placeholder-demna.jpg"
                    alt="Demna Gvasalia"
                    data-uk-cover
                  />
                </div>
                <p className="uk-text-meta uk-padding-small">
                  Portrait Placeholder — Demna Gvasalia, Creative Director
                </p>
              </div>
            </div>
          </div>

          {/* PARAGRAPHS */}
          <h3 className="uk-heading-bullet">From Elegance to Exaggeration</h3>
          <p>
            Balenciaga’s design language has always been about tension — between structure and softness,
            elegance and distortion. His early silhouettes blurred the line between fabric and architecture.
            When Demna reinterpreted this legacy, he did so not through gowns, but through sneakers — 
            exaggerated, sculptural, and unapologetically heavy.
          </p>

          <p>
            The <strong>Triple S</strong> sneaker, layered with rubber and irony, 
            became the blueprint for the global “chunky shoe” renaissance. 
            What once mocked suburban dads suddenly strutted Paris runways. 
            In fashion’s cyclical irony, authenticity became the new luxury.
          </p>

          {/* QUOTE */}
          <blockquote cite="#" className="uk-margin-large-top">
            <p>
              “Balenciaga turned mockery into mastery. The ordinary became couture.” 
            </p>
          </blockquote>
        </div>
      </article>
  );
};

export default BalenciagaIntro;
