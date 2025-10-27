import React from "react";

export default function Page2LawContext() {
  return (
     <article className="uk-article" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
    <div className="page">
      <div className="page-content">
        <header className="page-header">
          <h2>Law & Justice — What the Law Is and Is Not</h2>
        </header>

        <figure className="page-image">
          <img
            src="/images/law-context.jpg"
            alt="Law context"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>

        <section className="page-text">
          <p>
            From your <em>Legal Matters</em> document: The law is not morality, nor is it
            mere common sense. It is a system of rules created by legitimate authority,
            interpreted by courts, and enforced through evidence.  Judges do not decide
            based on emotion but on verifiable fact.
          </p>

          <p>
            The South African Constitution remains the supreme law, setting principles
            for equality, fairness, and due process.  Commercial law governs trade and
            contracts — the domain where most creators operate.  Understanding how
            these rules interact with intellectual property gives artists and
            entrepreneurs a shield before disputes arise.
          </p>

          <p>
            Remember: in business law, documentation beats declaration.  A written
            clause outweighs a handshake, and an email trail can prove ownership
            long after memory fades.
          </p>
        </section>

        <footer className="page-footer">
          Page 2 — Understanding the Rule of Law for Creators
        </footer>
      </div>
    </div>
    </article>
  );
}
