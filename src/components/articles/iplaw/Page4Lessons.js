import React from "react";

export default function Page4Lessons() {
return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">

        <h1 className="uk-article-title uk-heading-line">
          <span>Lessons for Future Creators and Entrepreneurs</span>
        </h1>
        <p className="uk-text-lead">Expectation is the seed; structure is the root.</p>

        {/* Placeholder Infographic */}
        <div className="uk-card uk-card-default uk-margin-medium-top uk-text-center">
          <div className="uk-cover-container uk-height-medium">
            <img src="/images/placeholder-infographic.jpg" alt="Infographic placeholder" data-uk-cover />
          </div>
          <p className="uk-text-meta uk-padding-small">Infographic Placeholder — Innovation Checklist</p>
        </div>

        <h3 className="uk-heading-bullet">1 — Document Before You Disclose</h3>
        <p>Time-stamp every draft, store emails, and sign NDAs before you share ideas.</p>

        <h3 className="uk-heading-bullet">2 — Know Your IP Toolkit</h3>
        <p>
          Copyright = expression; Patent = invention; Trademark = brand; Design = appearance.
          Register with CIPC or WIPO for protection.
        </p>

        <h3 className="uk-heading-bullet">3 — Navigate AI with Intention</h3>
        <p>
          Monitor digital reuse of your work and join guilds that lobby for fair AI policy.
        </p>

        <h3 className="uk-heading-bullet">4 — Pitch with Ethics and Precision</h3>
        <p>
          Prepare value propositions and ownership splits early. Professionalism equals protection.
        </p>
      </div>
    </article>
  );
};