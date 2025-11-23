import React from 'react'

function BalenciagaSpread() {
  return (
      <article
        className="uk-article"
       style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}
      >
        <div className="uk-container uk-margin-large-top">
          <h2 className="uk-heading-line">
            <span>Legacy, Irony, and the Rise of New Balance</span>
          </h2>

          {/* IMAGE PLACEHOLDER */}
          <div className="uk-card uk-card-default uk-margin-medium-top uk-text-center">
            <div className="uk-cover-container uk-height-large">
              <img
                src="/images/placeholder-newbalance.jpg"
                alt="New Balance Dad Shoes"
                data-uk-cover
              />
            </div>
            <p className="uk-text-meta uk-padding-small">
              Product Placeholder — New Balance 990 &amp; 550 Editorial
            </p>
          </div>

          <p>
            The ripple effect of Balenciaga’s exaggerated sneakers revived forgotten silhouettes across 
            the sportswear industry. Brands like <strong>New Balance</strong>, once dismissed as comfort-first,
            discovered a new audience of Gen Z collectors and stylists craving authenticity. 
            Suddenly, “uncool” was the new aspirational.
          </p>

          <p>
            By collaborating with Aimé Leon Dore and Joe Freshgoods, 
            New Balance bridged generational aesthetics — combining the orthopaedic charm of 
            suburban dads with high-fashion storytelling. Balenciaga had opened the door; 
            New Balance walked through it in suede.
          </p>

          {/* VIDEO PLACEHOLDER */}
          <div className="uk-position-relative uk-margin-large-top">
            <video
              width="100%"
              controls
              playsInline
              poster="/images/placeholder-video-frame.jpg"
            >
              <source src="/videos/placeholder-balenciaga-dadshoe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-text-center uk-padding-small">
              <p className="uk-text-meta">
                Video Placeholder — “The Dad Shoe Revival” mini documentary
              </p>
            </div>
          </div>

          <h3 className="uk-heading-bullet uk-margin-large-top">The Lessons Behind the Trend</h3>
          <ul className="uk-list uk-list-bullet">
            <li>
              <strong>Authenticity ages better than novelty.</strong> True design survives irony.
            </li>
            <li>
              <strong>Embrace the past to innovate the future.</strong> Reinvention requires reverence.
            </li>
            <li>
              <strong>Irony is profitable when intentional.</strong> Balenciaga didn’t chase a meme — it made one.
            </li>
            <li>
              <strong>Fashion is storytelling.</strong> Every product must narrate purpose, not just presence.
            </li>
          </ul>

          <blockquote cite="#" className="uk-margin-large-top">
            <p>
              “The ugly sneaker became beautiful because it dared to be itself — and that’s the truest revolution.”
            </p>
          </blockquote>

          <h3 className="uk-heading-bullet">Conclusion</h3>
          <p>
            Balenciaga’s influence on the “Dad Shoe” trend reflects the brand’s long-standing defiance of 
            convention. Its philosophy transformed criticism into culture, and imperfection into luxury. 
            The ripple reached far beyond couture, teaching the next generation of designers that 
            rebellion and reverence can coexist.
          </p>

          <p>
            As the lines blur between high fashion and comfort wear, one lesson endures:
            those who walk boldly in their creative contradictions will always set the pace.
          </p>
        </div>
      </article>
  )
}

export default BalenciagaSpread