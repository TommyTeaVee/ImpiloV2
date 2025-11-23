
/**
 * Chapter 4: Timeline
 */
 const Timeline = () => {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>Connecting the Dots — A Timeline of Capture and Counter-Attack</span>
          </h1>
        </div>

        <p>
          To understand how we got here — commissions, committees, suspensions and reinstatements — it helps to lay the
          story out chronologically.
        </p>

        <ul className="uk-list uk-list-divider uk-margin-large-top">
          <li>
            <strong>6 July 2025</strong> — Lt Gen Nhlanhla Mkhwanazi holds a press briefing in Durban, publicly accusing
            the Police Minister and senior officials of interfering in investigations and colluding with syndicates.
          </li>
          <li>
            <strong>July 2025</strong> — President Ramaphosa announces a{" "}
            <strong>Judicial Commission of Inquiry</strong> into the allegations, later known as the{" "}
            <strong>Madlanga Commission</strong>.
          </li>
          <li>
            <strong>September 2025</strong> — Public hearings at the Madlanga Commission begin, with Mkhwanazi as the
            first witness, followed by National Commissioner Fannie Masemola.
          </li>
          <li>
            <strong>Late September 2025</strong> — Crime Intelligence head Lt-Gen Dumisani Khumalo testifies about the{" "}
            <strong>“Big Five” cartel</strong>, describing a sophisticated criminal syndicate embedded in various
            sectors, including politics and policing.
          </li>
          <li>
            <strong>September–October 2025</strong> — Parliament’s{" "}
            <strong>Ad Hoc Committee on Gen Mkhwanazi’s Allegations</strong> holds hearings with police leadership,
            including Masemola, examining oversight failures and the disbanding of specialised units.
          </li>
          <li>
            <strong>October 2025</strong> — The Madlanga Commission hears evidence involving WhatsApp chats between{" "}
            <strong>Vusimuzi “Cat” Matlala</strong> and several officials, including EMPD deputy chief{" "}
            <strong>Julius Mkhwanazi</strong>, apparently showing interventions in traffic stops and other favours.
          </li>
          <li>
            <strong>11 November 2025</strong> — The City of Ekurhuleni suspends Deputy Chief of Police{" "}
            <strong>Julius Mkhwanazi</strong> and announces a broader probe into the EMPD.
          </li>
          <li>
            <strong>11 November 2025</strong> — A High Court trial date is confirmed for{" "}
            <strong>Vusimuzi “Cat” Matlala</strong> and co-accused in an attempted-murder and arms-related case, moving
            his story from allegation and rumours formally into the dock.
          </li>
          <li>
            <strong>Mid November 2025</strong> — Lt-Col <strong>Kelebogile Thepa</strong>, who had testified at the
            Madlanga Commission about corruption within the EMPD leadership, is{" "}
            <strong>reinstated as EMPD spokesperson</strong>, with the city framing it as a step towards transparency
            and rebuilding trust.
          </li>
          <li>
            <strong>Late November 2025</strong> — <strong>General Dumisani Khumalo</strong> is reinstated as head of{" "}
            <strong>Crime Intelligence</strong>, despite ongoing controversy and scrutiny of his role and testimony —
            adding yet another twist to an already tangled story.
          </li>
        </ul>

        <p className="uk-margin-large-top">
          Seen in sequence, the pattern is clear: whistle-blowing leads to formal inquiries; inquiries expose deeper
          networks; networks trigger suspensions, trials and — sometimes controversially — reinstatements. The system is
          moving, but whether it is healing or simply rearranging its scars remains an open question.
        </p>
      </div>
    </article>
  );
};
export default Timeline

