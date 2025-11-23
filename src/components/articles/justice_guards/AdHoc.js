/**
 * Chapter 3: Ad Hoc Committee
 */
const AdHoc = () => {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">
        {/* Title */}
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>The Ad Hoc Committee: Parliament Steps into the Crossfire</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            While judges probe the evidence, MPs grapple with accountability, oversight — and their own political baggage.
          </p>
        </div>

        {/* Background */}
        <p>
          Almost in parallel with the Madlanga Commission, Parliament established an{" "}
          <strong>Ad Hoc Committee to Investigate Allegations made by Lt Gen Nhlanhla Mkhwanazi</strong>. If the
          commission is the forensic lab, the Ad Hoc Committee is the political theatre — and sometimes, the confessional
        </p>

        <p>
          Mandated to examine his allegations, hear from key state actors and make recommendations on legislative and
          oversight reforms, the committee has heard evidence from the police leadership, intelligence bosses and
          officials implicated in the broader network of allegations
        </p>

        {/* Nature of hearings */}
        <h3 className="uk-heading-bullet uk-margin-large-top">A Different Room, Same Questions</h3>
        <p>
          Unlike the judicial formality of the Madlanga Commission, the Ad Hoc Committee’s hearings are political by
          design. Members of Parliament question witnesses, argue among themselves and often try to score points while
          the cameras roll.
        </p>

        <p>
          Yet beneath the theatrics lies a serious task: determining whether Parliament — through legislation and
          oversight — has allowed the erosion of the criminal justice system, and what must be done to rebuild it.
        </p>

        <p>
          When <strong>National Commissioner Fannie Masemola</strong> appeared before the committee, MPs pressed him on
          why he complied with controversial instructions, what he knew about political interference, and how he viewed
          the disbandment of critical units.
        </p>

        {/* Link to commissions */}
        <h3 className="uk-heading-bullet uk-margin-large-top">Parallel Tracks, Shared Stakes</h3>
        <p>
          The Ad Hoc Committee does not replace the Madlanga Commission — it runs alongside it. Evidence and themes
          echo between the two: political interference, capture of Crime Intelligence, the rise of criminal cartels, and
          the internal battles among senior officers.
        </p>

        <p>
          Where the commission will eventually issue a <strong>legal and factual report</strong>, the Ad Hoc Committee is
          expected to deliver a <strong>political and policy roadmap</strong>: what must change in law, in police
          oversight and in parliamentary scrutiny to ensure that South Africa never again finds itself with a justice
          system that cannot be trusted to guard itself.
        </p>
      </div>
    </article>
  );
};
export default AdHoc;