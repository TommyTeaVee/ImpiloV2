import React from "react";
import AiInfographic from "../legality/AiInforgraphic";

export default function Page4Lessons() {
  return (
     <article className="uk-article" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
    <div className="page">
      <div className="page-content">
        <header className="page-header">
          <h2>Lessons for Entrepreneurs and Creators</h2>
        </header>

        <figure className="page-image">
          <img
            src="/images/legal-books.jpg"
            alt="Legal Books"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>

        <section className="page-text">
          <p>
            Your document stressed safe practice: creators must know the kinds of
            intellectual property available — copyright, patent, trademark, and
            trade secret — and how each is enforced through the Companies and
            Intellectual Property Commission (CIPC).
          </p>

          <p>
            When pitching ideas, use NDAs, register creative work early, and send
            follow-up emails to confirm discussions.  Attach time-stamped drafts or
            prototypes.  This not only protects you but also builds professionalism.
          </p>

          <AiInfographic />

          <p>
            “Innovation without legal protection,” as you wrote, “is a gift to
            opportunists.”  That single sentence captures the spirit of preventive
            law: justice is easiest when prepared in advance.
          </p>
        </section>

        <footer className="page-footer">
          Page 4 — Practical Lessons & IP Education
        </footer>
      </div>
    </div>
    </article>
  );
}
