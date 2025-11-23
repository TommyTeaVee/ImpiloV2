/**
 * Chapter 6: Cat Matlala Deep Dive (Standalone Investigative Chapter)
 */
 const CatMatlala = () => {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>Cat in the System — The Vusimuzi “Cat” Matlala Story</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            Businessman. Tenderpreneur. Criminal suspect. And, according to investigators, one of the clearest windows
            into how private power penetrated public policing.
          </p>
        </div>

        {/* Who is he? */}
        <h3 className="uk-heading-bullet">Who Is “Cat” Matlala?</h3>
        <p>
          <strong>Vusimuzi “Cat” Matlala</strong> is not a politician, judge or senior cop. On paper, he is a{" "}
          <strong>businessman</strong> and <strong>director of multiple companies</strong>, including security and
          medical-services firms. Among the entities linked to him in public records are{" "}
          <em>Cat VIP Protection</em>, <em>Falcon Cat Trading and Suppliers</em>, and <em>Medicare 24 Tshwane District</em>,
          among others.
        </p>

        <p>
          But over time, his name has drifted from tender notices and CIPC documents into much darker territory:
          commission testimony, high-profile court dockets and media investigations into organised crime.
        </p>

        {/* Business & arms angle */}
        <h3 className="uk-heading-bullet uk-margin-large-top">Business, Guns and the State</h3>
        <p>
          According to reporting and charge sheets, Matlala stands accused in cases involving{" "}
          <strong>attempted murder, illegal firearms, fraud and related offences</strong>.
          His security companies allegedly operated in a space where private protection, debt collection, muscle and
          access to weapons intersect.
        </p>

        <p>
          The arms angle is critical. Allegations at the Madlanga Commission and in court filings describe a network in
          which weapons, official uniforms, blue lights and police information flow between state structures and private
          operators — blurring the line between law enforcement and armed enforcement for hire.
        </p>

        {/* Relationship with officials */}
        <h3 className="uk-heading-bullet uk-margin-large-top">Flying Below the Radar — Until the Chats Leaked</h3>
        <p>
          For years, Matlala moved largely under the public radar: known to insiders, but not a household villain. That
          changed when evidence presented to the Madlanga Commission — including{" "}
          <strong>WhatsApp conversations</strong> — allegedly showed him in regular contact with senior police and metro
          police figures.
        </p>

        <p>
          One example described in testimony: when one of his drivers was stopped for speeding in Ekurhuleni, Matlala
          allegedly messaged <strong>EMPD Deputy Chief Julius Mkhwanazi</strong> asking for “assistance” and
          “intervention”. The driver was reportedly released.
        </p>

        <p>
          Other evidence presented at the commission links him to high-level Crime Intelligence interactions and ongoing
          investigations into organised crime — including the “Big Five” cartel network that Lt-Gen Khumalo described as
          penetrating political and criminal markets across multiple provinces.
        </p>

        {/* Why he matters */}
        <h3 className="uk-heading-bullet uk-margin-large-top">Why Matlala Matters</h3>
        <p>
          Matlala is not just another accused person waiting for his day in court. He is, in many ways, a{" "}
          <strong>connector figure</strong>: between tenders and guns, between blue lights and private business, between
          local politics and national security.
        </p>

        <p>
          If the state can prove the allegations against him — and, critically, against any officials who allegedly
          enabled his rise — it will go a long way towards mapping how <em>criminal capital</em> embedded itself into the
          criminal justice system.
        </p>

        <p>
          If it cannot, then “Cat” will remain what he has long been able to be: a symbol of how easily powerful private
          actors can operate in the grey zone between legality and impunity.
        </p>

        <blockquote className="uk-margin-large-top">
          <p>
            The “Cat” in the story is not just a nickname. It’s a metaphor for how quietly, and how high, a single
            operator can climb when nobody is really guarding the guards.
          </p>
        </blockquote>
      </div>
    </article>
  );
};
export default CatMatlala