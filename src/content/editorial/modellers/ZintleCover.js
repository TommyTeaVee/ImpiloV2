import React from "react";


export default function AboutZintle() {
  return (
    <article
      className="uk-article zintle-page"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header
        className="uk-text-center uk-margin-large-bottom"
        uk-scrollspy="cls: uk-animation-slide-top-medium"
      >
        <div className="zintle-meta">
          <span>MODEL</span>
          <span>STYLIST</span>
        </div>

        <h4 className="zintle-name">LA'NIYA</h4>
        <h1 className="zintle-title">About me</h1>
      </header>

      {/* Hero Image */}
      <div
        className="uk-flex uk-flex-center uk-margin-large-bottom"
        uk-scrollspy="cls: uk-animation-fade"
      >
        <img
          src="https://i.pinimg.com/736x/62/05/95/62059538042295c603b306e8690f9722.jpg"
          alt="Zintle Kelepu"
          className="zintle-hero"
        />
      </div>

      {/* Content Grid */}
      <div
        className="uk-grid-large uk-child-width-1-2@m"
        uk-grid="true"
      >
        {/* Left Column */}
        <div>
          <img
            src="https://i.pinimg.com/736x/fb/99/94/fb99940b25f2613ad108abdea565348b.jpg"
            alt="Zintle Portrait"
            className="zintle-portrait"
          />

          <blockquote className="zintle-quote">
            My name is <strong>La’Niya</strong>, and I’m an aspiring <strong>model and professional
             hairstylist </strong>based in the vibrant heart of New York City. 
             I specialize in commercial and print modeling, bringing energy, 
             creativity, and professionalism to every shoot I participate in. 
            <strong> TRY AND FAIL BUT NEVER FAIL TO TRY</strong>”
          </blockquote>

          <div className="zintle-text">
            <p>
              In addition to modeling, I am a trained <strong>hairstylist</strong>, and I have a deep passion for hair, beauty, and personal styling. 
              Combining my experience in modeling and hairstyling allows me to bring a unique perspective to every creative project,
               whether it’s fashion shoots, editorial spreads, or commercial campaigns.
            </p>

            <p>
              I am also a <strong>police officer</strong> who holds a
              <strong> National Diploma in Human Resource Management</strong>{" "}
              and a Certificate in Health and Safety.
            </p>

            <p>
              I am a philanthropic woman who believes in making a difference in
              the community. I must lead and make a difference.
            </p>

            <p>
              I am a model with <strong>10+ titles</strong>, a photogenic and
              fashion model, coach, judge, motivational speaker, and
              <strong> Ambassador of Impilo Magazine</strong>.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="uk-flex uk-flex-top uk-flex-center"
          uk-scrollspy="cls: uk-animation-slide-right-medium"
        >
          <img
            src="https://d1zrm2iszdbieq.cloudfront.net/articles/models/Mallory/597577569_1609019990462459_9155969753040145459_n.jpg"
            alt="Zintle Full Body"
            className="zintle-full"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="zintle-footer uk-text-center uk-margin-large-top">
        IMPILO MAGAZINE
      </footer>
    </article>
  );
}
