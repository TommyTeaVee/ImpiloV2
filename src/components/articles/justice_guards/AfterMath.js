/**
 * Chapter 8: Aftermath — Khumalo & Thepa
 */
export const Aftermath = () => {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>Aftermath: Return of the General, Return of the Spokesperson</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            Reinstatements that look, to some, like renewal — and to others, like a system circling the wagons.
          </p>
        </div>

        {/* Khumalo */}
        <h3 className="uk-heading-bullet">General Khumalo’s Second Act</h3>
        <p>
          In late 2025, news breaks that{" "}
          <strong>Lieutenant-General Dumisani Khumalo</strong> has been{" "}
          <strong>reinstated as head of SAPS Crime Intelligence</strong>. This comes after a turbulent period that
          included his high-profile testimony at the Madlanga Commission, a sudden illness that interrupted his evidence,
          reported criminal investigations, and public concern about his role in the very networks he was describing.
        </p>

        <p>
          Supporters argue that his deep knowledge of the “Big Five” cartel and other networks makes him indispensable.
          Critics counter that reinstating a figure under such scrutiny risks sending the message that accountability is
          negotiable.
        </p>

        {/* Thepa */}
        <h3 className="uk-heading-bullet uk-margin-large-top">The Return of Kelebogile Thepa</h3>
        <p>
          Around the same time, <strong>Lt-Col Kelebogile Thepa</strong> is{" "}
          <strong>reinstated as the spokesperson of the Ekurhuleni Metro Police Department (EMPD)</strong>. The city
          explicitly links her return to the need to restore public confidence, following her testimony at the Madlanga
          Commission where she described corruption, intimidation and irregular dealings in the EMPD leadership.
        </p>

        <p>
          In Thepa’s case, the symbolism is almost the mirror image of Khumalo’s: a whistle-aligned voice returning to
          the podium, apparently rewarded — not punished — for speaking out. For some, her reinstatement suggests that
          the city is siding with transparency. For others, it raises the question of whether a single personnel move can
          cleanse a department clouded by far deeper allegations.
        </p>

        {/* Bigger meaning */}
        <h3 className="uk-heading-bullet uk-margin-large-top">What These Reinstatements Signal</h3>
        <p>
          Taken together, the re-emergence of Khumalo and Thepa illustrates the messy, contradictory nature of reform in
          a captured system:
        </p>

        <ul className="uk-list uk-list-bullet">
          <li>
            <strong>Continuity vs Change:</strong> Are we witnessing a genuine attempt to stabilise institutions using
            experienced insiders, or the re-entrenchment of a compromised status quo?
          </li>
          <li>
            <strong>Rewarding Witnesses:</strong> Thepa’s case may encourage other insiders to testify — if the system
            signals that telling the truth will not end careers.
          </li>
          <li>
            <strong>Trust Deficit:</strong> For many citizens, every reinstatement, suspension and reshuffle is just
            another move on a chessboard they did not design and do not trust.
          </li>
        </ul>

        <p>
          As the Madlanga Commission and Ad Hoc Committee inch towards their conclusions, these personnel decisions
          become more than HR matters. They are early indicators of what kind of justice system South Africa is trying to
          build after staring into the mirror of its own capture.
        </p>

        <blockquote className="uk-margin-large-top">
          <p>
            In the end, “Who will guard the guards?” will be answered not only in final reports — but in who is allowed
            to wear the uniform when the cameras move on.
          </p>
        </blockquote>
      </div>
    </article>
  );
};
export default Aftermath