import React from "react";

export default function Page1Intros() {
  return (
    <article className="uk-article" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <div className="uk-container uk-margin-large-top">
      
        <header className="uk-text-lead">
          <h2>A Tale of Two Cities: Justice for Creators in Two Worlds</h2>
        </header>

        <figure className="page-image">
          <img
            src="https://lennonliterary.com/wp-content/uploads/2024/03/zakes-mda-2-by-jim-shirey.jpg"
            alt="Zakes Mda"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>

        <section className="uk-text-lead uk-margin-top uk-text-justify uk-dropcap">
          <p>
            “It was the best of times, it was the worst of times…” — Charles Dickens.
            In the modern age, those words echo across the courtrooms of Johannesburg
            and the servers of Silicon Valley. Two creators — writer Zakes Mda and
            innovator Nkosana Makate — found themselves facing powerful institutions
            that profited from their work.
          </p>

          <p>
            Zakes Mda’s writings were scraped by a global AI company to train language
            models without permission. In another “city,” Makate’s *Please Call Me*
            idea became a billion-rand telecom feature while he fought for recognition.
            Both stories ask the same question: who owns an idea once it is shared?
          </p>

          <p>
            Their battles, decades apart, form a new *Tale of Two Cities* — one digital,
            one corporate — joined by a single theme: creators seeking fairness in
            systems built for profit.
          </p>
        </section>

        <footer className="page-footer">
          Page 1 — Impilo Digital Magazine | Legal Matters Series
        </footer>
      </div>
    
    </article>
  );
}
