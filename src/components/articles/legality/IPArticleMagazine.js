import React, { useEffect } from "react";

// Magazine-style A4 article using UIkit (https://getuikit.com/)
// Default export React component. Designed as a single-file preview for a magazine app.
// Uses UIkit classes. The component injects UIkit CSS from CDN when mounted.

export default function IPArticleMagazine() {
 

  return (
    <div className="magazine-root" style={{  overflowY: "auto", maxHeight: "180vh", background: "#f7f7f7", padding: 24 }}>
      <div className="uk-container uk-container-large">
        {/* Page 1 */}
        <article className="page uk-card uk-card-default uk-card-body">

          <header className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-expand">
              <h1 className="uk-heading-primary" style={{ fontSize: '28px', lineHeight: 1.05, marginBottom: 6 }}>Intellectual Property: Rights, Risks & Real‑Life Lessons</h1>
              <p className="uk-text-meta">A concise two‑page magazine feature with practical lessons for creatives and innovators</p>
            </div>
            <div className="uk-width-auto">
              <div style={{ width: 120, height: 120, borderRadius: 6, overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.12)' }}>
                <img src="https://via.placeholder.com/240x240?text=Cover+Image" alt="cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </header>

          <section className="uk-grid-medium Uk-margin-medium-top" uk-grid="true" style={{ marginTop: 18 }}>
            <div className="uk-width-2-3">
              <p className="uk-text-lead" style={{ fontSize: 16 }}>
                Intellectual property (IP) protects creations of the mind — from inventions and writings to brand identities.
                But protection is only part of the battle: enforcement, fair compensation and clarity of agreements often determine whether creators are rewarded.
              </p>

              <h3 className="uk-margin-small-top">Case study: “Please Call Me”</h3>
              <p>
                Around the year 2000, a concept for a free message service — popularly known as <em>“Please Call Me”</em> — was developed by Nkosinathi Makade (sometimes cited as Nkosana Makate).
                The idea was adopted by a major telco and produced significant usage. What followed was years of litigation focused not solely on formal IP doctrines, but on whether there had been a promise to compensate the creator and how much that contribution was worth.
              </p>

              <figure className="uk-margin"><img src="https://via.placeholder.com/800x350?text=Timeline+or+Court+Sketch+Placeholder" alt="timeline" style={{ width: '100%', borderRadius: 6 }} /></figure>

              <p>
                The dispute illustrates how oral agreements, valuation debates and procedural issues can prolong resolution. Even when courts find merit in a claimant's position, questions of valuation, evidence and appellate processes can keep matters in court for years.
              </p>

              <h3 className="uk-margin-small-top">Case study: Zakes Mda vs AI</h3>
              <p>
                More recently, authors including South African novelist Zakes Mda have been part of litigation against AI developers who used copyrighted books to train language models without permission.
                Unlike the "Please Call Me" dispute, this case centred on clear allegations of unauthorized copying and therefore mapped readily onto copyright law. The result was a successful claim and a substantial settlement for affected authors.
              </p>

              <figure className="uk-margin"><img src="https://via.placeholder.com/800x350?text=AI+and+Books+Placeholder" alt="ai books" style={{ width: '100%', borderRadius: 6 }} /></figure>

              <p>
                The contrast is instructive: where the harm is framed as direct copying of copyrighted works, statutory remedies are often clearer; where promises and contributions are informal, courts must untangle messy factual and equitable questions.
              </p>

            </div>

            <aside className="uk-width-1-3">
              <div className="uk-card uk-card-muted uk-card-body" style={{ borderRadius: 8 }}>
                <h4 className="uk-margin-small">Quick Facts</h4>
                <ul className="uk-list uk-list-divider">
                  <li><strong>Makade (Please Call Me):</strong> Long-running South African dispute about compensation for an idea adopted by a telco.</li>
                  <li><strong>Zakes Mda vs AI:</strong> Authors claimed unauthorized copying; resulted in class action settlement and compensation.</li>
                  <li><strong>Takeaway:</strong> Clear legal basis (= faster remedy); murky promise/valuation (= protracted litigation).</li>
                </ul>

                <div className="uk-margin-top">
                  <h5>Author</h5>
                  <div className="uk-flex uk-flex-middle">
                    <img src="https://via.placeholder.com/72x72?text=Author" alt="author" style={{ width: 56, height: 56, borderRadius: 8, marginRight: 10 }} />
                    <div>
                      <div style={{ fontWeight: 600 }}>Magazine Legal Desk</div>
                      <div className="uk-text-meta">A4 Magazine • Oct 2025</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="uk-card uk-card-default uk-card-body uk-margin-top" style={{ borderRadius: 8 }}>
                <h5 className="uk-margin-small">Key Questions</h5>
                <ol className="uk-list uk-list-decimal">
                  <li>Was there a written agreement?</li>
                  <li>Which legal right applies: contract, copyright or patent?</li>
                  <li>How will value be measured?</li>
                </ol>
              </div>

            </aside>
          </section>

          <footer style={{ position: 'absolute', bottom: 20, left: 28, right: 28 }}>
            <div className="uk-grid-small" uk-grid="true">
              <div className="uk-width-expand uk-text-meta">For creatives & innovators — practical guidance on the next page →</div>
              <div className="uk-width-auto uk-text-right uk-text-meta">Page 1</div>
            </div>
          </footer>

        </article>

        {/* Page 2 */}
        <article className="page uk-card uk-card-default uk-card-body" style={{
          width: "210mm",
          height: "297mm",
          margin: "0 auto 24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          overflow: "hidden",
          background: "white",
          padding: "28mm 20mm"
        }}>

          <header>
            <h2 className="uk-heading-bullet" style={{ fontSize: 20 }}>Lessons & Practical Guidance for Creatives</h2>
          </header>

          <section className="uk-grid-medium" uk-grid="true" style={{ marginTop: 14 }}>
            <div className="uk-width-2-3">

              <h4>Practical rules of thumb</h4>
              <ul className="uk-list uk-list-bullet">
                <li><strong>Document agreements early.</strong> Reduce ambiguity by getting written contracts for contributions, even short emails suffice.</li>
                <li><strong>Choose the right legal vehicle.</strong> Know whether your claim fits patent, copyright, trademark or contract law.</li>
                <li><strong>Preserve evidence and metrics.</strong> Keep records that substantiate your contribution and value (usage stats, emails, drafts).</li>
                <li><strong>Consider collective action.</strong> For widespread digital misuse, banding together makes enforcement feasible.</li>
                <li><strong>Plan for valuation.</strong> Prepare financial models and expert input — valuation determines ultimate compensation.</li>
              </ul>

              <h4 className="uk-margin-top">A short checklist — before you pitch or partner</h4>
              <ol className="uk-list uk-list-decimal">
                <li>Write down the idea, date it, and email it to yourself or the partner.</li>
                <li>Sign a simple terms note: who owns what, who gets paid, and how disputes are resolved.</li>
                <li>Register copyrights where practical (automatic in many countries, but registration helps in some jurisdictions).</li>
                <li>Safeguard drafts and versions; use version control for code or creative works.</li>
                <li>Understand local law: remedies and procedures differ by country.</li>
              </ol>

              <figure className="uk-margin-top"><img src="https://via.placeholder.com/800x280?text=Checklist+or+Infographic+Placeholder" alt="checklist" style={{ width: '100%', borderRadius: 6 }} /></figure>

              <h4 className="uk-margin-top">Policy & the future</h4>
              <p>
                Both cases highlight the need for adaptive law: clearer rules for AI training data, streamlined mechanisms for valuing contributions, and incentives for platforms to license material fairly.
                Creators and lawmakers should collaborate: licensing marketplaces, standard contracts and transparent revenue‑share models will lower the cost of enforcement.
              </p>

            </div>

            <aside className="uk-width-1-3">

              <div className="uk-card uk-card-primary uk-card-body" style={{ borderRadius: 8 }}>
                <h4 className="uk-margin-small">Top tips (Sticky)</h4>
                <ul className="uk-list">
                  <li>Write it down — immediately.</li>
                  <li>Get simple written consent before sharing prototypes.</li>
                  <li>Use NDAs with caution — they can slow partnerships.</li>
                  <li>When in doubt, consult an IP lawyer early.</li>
                </ul>
              </div>

              <div className="uk-card uk-card-default uk-card-body uk-margin-top" style={{ borderRadius: 8 }}>
                <h5>Mini exercise</h5>
                <p>Create a 1‑paragraph description of your idea. Then draft two sentences that state who owns what if you share it with a partner.</p>
                <a className="uk-button uk-button-text uk-margin-top" href="#">Download worksheet (placeholder)</a>
              </div>

              <div className="uk-margin-top uk-text-meta">References: High‑level public reporting on the Makade "Please Call Me" dispute and published news on AI copyright cases involving authors such as Zakes Mda.</div>

            </aside>
          </section>

          <footer style={{ position: 'absolute', bottom: 20, left: 28, right: 28 }}>
            <div className="uk-grid-small" uk-grid="true">
              <div className="uk-width-expand uk-text-meta">Need a printable PDF or adapted South African legal notes? We can localize this article.</div>
              <div className="uk-width-auto uk-text-right uk-text-meta">Page 2</div>
            </div>
          </footer>

        </article>

      </div>
    </div>
  );
}
