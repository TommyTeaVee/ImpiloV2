import React from "react";

export default function Page3MakateCase() {
    return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">

        <h1 className="uk-article-title uk-heading-line">
          <span>The End of a Long Call: Nkosana Makate and the Please Call Me Settlement</span>
        </h1>
        <p className="uk-text-lead">
          From memo to milestone — two decades of patience rewrote corporate history.
        </p>

        {/* Portrait */}
        <div className="uk-card uk-card-default uk-margin-medium-top uk-text-center">
          <div className="uk-cover-container uk-height-medium">
            <img src="/images/placeholder-makate.jpg" alt="Nkosana Makate portrait" data-uk-cover />
          </div>
          <p className="uk-text-meta uk-padding-small">Portrait Placeholder — Nkosana Makate</p>
        </div>

        <p>
          In 2000, a young accountant at Vodacom, Nkosana Makate, proposed a free “Please Call Me”
          message for prepaid users. The idea became a national habit; recognition did not follow.
          His twenty-five-year pursuit ended with a 2025 settlement acknowledging his contribution.
        </p>

        <p>
          His journey passed through every legal tier — from internal letters to the Constitutional Court.
          The Concourt confirmed that verbal commitments can bind when intent is proven.
          The settlement is both personal redemption and a corporate reckoning.
        </p>
<section>
<p>
The dispute moved through the South African courts for years, reaching appellate courts and ultimately implicating constitutional principles
(including fairness and the rights of inventors who are employees or contractors). The case has been complex: earlier rulings set out different
ways to quantify what Makate might fairly receive (including percentage-based approaches to revenue) and later courts scrutinised the legal
foundations of those methods.
</p>
</section>


<section>
<h2>Settlement: Confidential but Instructive</h2>
<p>
Vodacom disclosed only that the matter was settled and that the settlement will be reflected in its interim financials. Because the approach to
disclosure affected Vodacom’s earnings guidance, market analysts were able to infer a likely range for the payout. That inference is why multiple
outlets have suggested the real figure may be in the high hundreds of millions of rand.
</p>
</section>


<section>
<h2>New Claim: A 40% Demand from a Legal Backer</h2>
<p>
Almost immediately after the settlement became public, an entity linked to a previous backer surfaced with a demand for 40% of the payout. The
claim rests on a historical funding or sharing agreement purportedly entitling the backer to a portion of any proceeds obtained by Makate from the
dispute.
</p>
<p>
Why this is contentious: 40% is a very large share compared with typical litigation funding or referral arrangements, and the enforceability of any
such agreement depends on its terms, the timing, the signatures, whether the agreement was validly formed under South African contract law, and
whether a court would view the agreement as unconscionable or against public policy. Additionally, if Makate entered into separate settlements or
undertakings with other parties, competing claims may need to be resolved in supplementary litigation or by arbitration.
</p>
</section>


<section>
<h2>What's Contrary About The 40% Claim</h2>
<ul>
<li>The 40% figure is unusually high for funders and may be challenged as unconscionable.</li>
<li>If the backer was not the primary contractual counterparty (for instance the backer acted only as a funder or adviser), the claim may be treated as
an equitable lien or restitutionary claim rather than an absolute entitlement to a set percentage.</li>
<li>Any written agreement will be scrutinised for capacity, proper execution and compliance with the law — defects could void the obligation.</li>
<li>Competing claims and priorities (tax, insolvency, prior assignments) could reduce or displace the claimed share in practice.</li>
</ul>
</section>


<section>
<h2>Law, Policy and Innovation</h2>
<p>
The story sits at the intersection of intellectual contribution and employment law: when does an idea conceived by an employee or junior staffer
become property of the employer, and when is the originator entitled to compensation? This case underscores the need for clear contracting,
transparent reward structures for employee-originated ideas, and careful documentation when third parties provide funding or advice in exchange for a
share of any proceeds.
</p>
</section>


<section>
<h2>Closing</h2>
<p>
The settlement likely brings finality to the primary dispute between Makate and Vodacom, but it also opens a new chapter of secondary disputes over
entitlement — a reminder that in high-stakes innovation litigation the headline settlement is often only the beginning of ancillary battles.
</p>
</section>
        <p>
          Lesson: innovation inside employment still deserves clarity, credit, and compensation.
          Read your contracts, log your ideas, and respect your own intellectual labour.
        </p>

        <blockquote cite="#">
          <p>“The law may be slow, but it remembers the diligent.” — Justice Jafta (2016)</p>
        </blockquote>
      </div>
    </article>
  );
};