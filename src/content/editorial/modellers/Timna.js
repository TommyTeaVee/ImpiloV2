import React from "react";


export default function TimnaNzunzo() {
  return (
    <article
      className="uk-article timna-page"
      style={{ overflowY: "auto", maxHeight: "180vh" }}
    >
      {/* Header */}
      <header className="timna-header">
        <h1>TIMNA NZUNZO</h1>
      </header>

      {/* Main Grid */}
      <div className="uk-grid-large" uk-grid="true">
        {/* Left Text Column */}
        <div className="uk-width-1-1 uk-width-3-5@m">
          <div className="timna-text">
            <p>
              I advocate for mental health. October is a mental health awareness
              month, so we as the nation have to acknowledge first what mental
              health is and the importance of mental health since it plays a
              huge role in our academics, occupations, relationships, and
              basics in our everyday lives.
            </p>

            <p>
              Mental health is a state of well-being being which an individual
              releases his or her own abilities, can work productively and
              fruitful and can make a contribution to his or her community.
            </p>

            <p>
              Ignoring one's mental health may lead to mental breakdowns,
              suicide attempts, domestic abuse, and bullying. Nevertheless,
              prioritizing one's mental health may lead to one making rational
              decisions, appropriate having compassion and being considerate
              for the person next to them.
            </p>

            <p>
              I hope this piece starts to bring about the necessary
              conversation that leads to healing. I hope it reminds you to be
              soft with the world but mostly with yourself. I pray that your
              mental health is met with kindness and it doesn't limit you in
              any way.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="uk-width-1-1 uk-width-2-5@m">
          <img
            src="https://d1zrm2iszdbieq.cloudfront.net/articles/models/Alex/597723630_2243718366128208_8143169235445074438_n.jpg"
            alt="Timna Nzunzo"
            className="timna-hero"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="uk-grid-large uk-margin-large-top" uk-grid="true">
        {/* Portrait */}
        <div className="uk-width-1-1 uk-width-2-5@m">
          <img
            src="/images/timna_portrait.jpeg"
            alt="Timna Portrait"
            className="timna-portrait"
          />
        </div>

        {/* Achievements */}
        <div className="uk-width-1-1 uk-width-3-5@m">
          <div className="timna-achievements">
            <h2>ACHIEVEMENTS</h2>
            <ul>
              <li>Miss Beauty and Confidence 2020</li>
              <li>Miss Teen Queenstown 1st Princess 2021</li>
              <li>Miss Teen Queenstown Social Butterfly 2021</li>
              <li>Miss Mlungisi 2021</li>
              <li>Miss Teen Ndluvukazi 1st Princess 2021</li>
              <li>Miss Teen Ndluvukazi Viewers’ Choice 2021</li>
              <li>Miss Intelligence 2022</li>
              <li>Miss St Theresa 2022</li>
              <li>Miss International Supermodel South Africa Finalist 2024</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="timna-footer">
        IMPILO MAGAZINE
      </footer>
    </article>
  );
}
