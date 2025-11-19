import React from "react";

export default function Page2LawContext() {
    return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh" }}>
      <div className="uk-container uk-margin-large-top">

        <h1 className="uk-article-title uk-heading-line">
          <span>The Law and the Promise of Fairness</span>
        </h1>
        <p className="uk-text-lead">Law translates imagination into structure — when creators learn its grammar.</p>

        {/* Portrait Placeholder */}
        <div className="uk-card uk-card-default uk-margin-medium-top">
          <div className="uk-cover-container uk-height-medium">
            <img src="/images/placeholder-justice.jpg" alt="Scales of Justice" data-uk-cover />
          </div>
          <p className="uk-text-meta uk-padding-small">Illustration Placeholder — “The Scales of Justice”</p>
        </div>

        <p>
          Courts decide on proof, not passion. Documentation — contracts, drafts, and correspondence —
          is the artist’s strongest exhibit. Both Mda and Makate succeeded because their evidence told
          a story law could hear.
        </p>

        <p>
          South Africa’s Constitution and commercial statutes offer creators a foundation:
          copyright for expression, patents for invention, trademarks for identity, and design rights for form.
          The CIPC anchors these protections.
        </p>

        <p>
          For innovators: treat every note, file, and email as legal architecture. Evidence is your ally.
        </p>
      </div>
    </article>
  );
};