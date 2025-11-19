import React from "react";

export default function Page1Intro() {
 return (
    <article
      className="uk-article"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      <div className="uk-container uk-margin-large-top">

        <h1 className="uk-article-title uk-heading-line">
          <span>Great Expectations: From Idea to Recognition in the Age of AI and Innovation</span>
        </h1>
        <p className="uk-text-lead uk-margin-remove-top">
          “Justice delayed can still be justice delivered.”
        </p>

        {/* Portrait Section */}
        <div className="uk-grid-small uk-child-width-1-2@m uk-margin-medium-top" data-uk-grid>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-text-center">
              <div className="uk-cover-container uk-height-medium">
                <img src="/images/placeholder-mda.jpg" alt="Zakes Mda portrait" data-uk-cover />
              </div>
              <p className="uk-text-meta uk-margin-small-top">Portrait: Zakes Mda</p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-text-center">
              <div className="uk-cover-container uk-height-medium">
                <img src="/images/placeholder-makate.jpg" alt="Nkosana Makate portrait" data-uk-cover />
              </div>
              <p className="uk-text-meta uk-margin-small-top">Portrait: Nkosana Makate</p>
            </div>
          </div>
        </div>

        <p>
          <em>Great Expectations</em> tells of ambition tested by reality — and finally fulfilled.
          In South Africa two creators walked that arc: writer <strong>Zakes Mda</strong> and
          innovator <strong>Nkosana Makate</strong>. Both fought long battles for recognition and, in 2025,
          both received it.
        </p>

        <p>
          Mda’s trans-national dispute over AI training data unfolded in U.S. courts.
          Makate’s was local and institutional, stretching through decades of litigation until
          Vodacom reached a confidential settlement. Each victory shows that persistence and documentation
          turn ideas into enforceable rights.
        </p>

        <blockquote cite="#">
          <p>
            “Hope without evidence is wishful thinking; evidence with hope is strategy.”
            — <em>Legal Matters</em>
          </p>
        </blockquote>
      </div>
    </article>
  );
};