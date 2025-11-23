import React from "react";

export default function Page5Conclusion() {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">

        <h1 className="uk-article-title uk-heading-line">
          <span>Fulfilment and Legacy</span>
        </h1>
        <p className="uk-text-lead">
          From expectation to structure to legacy — a blueprint for South Africa’s next creators.
        </p>

        {/* Portrait Placeholder */}
        <div className="uk-card uk-card-default uk-margin-medium-top uk-text-center">
          <div className="uk-cover-container uk-height-medium">
            <img src="/images/placeholder-collage.jpg" alt="Creative collage" data-uk-cover />
          </div>
          <p className="uk-text-meta uk-padding-small">Collage Placeholder — South African Creatives</p>
        </div>

        <p>
          Mda and Makate’s stories prove that intellectual labour is capital — and that the law can defend it.
          Their achievements signal a maturing creative economy grounded in fairness and foresight.
        </p>

        <p>
          Universities and incubators should embed IP literacy into curricula so that the next generation pairs
          creativity with compliance. Hope alone is not a strategy; documentation is.
        </p>

        <blockquote cite="#">
          <p>“The future belongs to the prepared.” — Impilo Digital Magazine (2025)</p>
        </blockquote>
      </div>
    </article>
  );
};