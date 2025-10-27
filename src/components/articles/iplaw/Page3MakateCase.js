import React from "react";
import LegalTimeline from "../legality/LegalTimeline";

export default function Page3MakateCase() {
  return (
    <div className="page">
      <div className="page-content">
        <header className="page-header">
          <h2>Nkosana Makate vs Vodacom — A Legal Journey</h2>
        </header>

        <figure className="page-image">
          <img
            src="/images/makate.jpg"
            alt="Nkosana Makate"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>

        <section className="page-text">
          <p>
            In 2000, junior accountant Nkosana Makate proposed a solution for prepaid
            users: a free message asking another person to call back. Vodacom adopted
            it, branding it *Please Call Me*.  Millions used it, yet the inventor
            received nothing.
          </p>

          <p>
            The *Legal Matters* document notes that Makate’s mistake lay in relying on
            verbal promises and in not defining his invention through a contract.  
            The courts examined whether the idea fell within his employment duties.
            Ultimately, the Constitutional Court ruled he was entitled to negotiate
            compensation.
          </p>

          <LegalTimeline />

          <p>
            His saga underlines corporate responsibility: companies should foster
            innovation channels that credit employees.  And it warns innovators: 
            always document, protect, and formalize before disclosure.
          </p>
        </section>

        <footer className="page-footer">
          Page 3 — Case Study from Legal Matters © Impilo Digital Magazine
        </footer>
      </div>
    </div>
  );
}
