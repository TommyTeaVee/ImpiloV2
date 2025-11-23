import React from "react";

/**
 * Chapter 1: Mkhwanazi Allegations
 * Core question: Who will guard the guards?
 */
const  Mkhwanazi = () => {
  return (
    <article className="uk-article"  style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">
        {/* Title */}
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>Who Will Guard the Guards? — The Mkhwanazi Allegations</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            A provincial police commissioner breaks ranks, alleging that crime didn’t infiltrate the justice system from the outside — it grew from within.
          </p>
        </div>

        {/* Intro */}
        <p>
          On an otherwise ordinary winter day in July 2025, KwaZulu-Natal Provincial Police Commissioner{" "}
          <strong>Lieutenant General Nhlanhla Mkhwanazi</strong> stepped in front of microphones and did something
          South African police chiefs almost never do in public: he turned his sights on the political and policing
          establishments themselves.
        </p>

        <p>
          In a press conference that now anchors this unfolding saga, he alleged that senior political leaders and top
          police officials had <strong>interfered in sensitive investigations</strong>, shut down key units probing
          political killings, and effectively opened the door to organised crime.
        </p>

        {/* Allegations list */}
        <h3 className="uk-heading-bullet uk-margin-large-top">The Core Allegations</h3>
        <p>
          At the centre of Mkhwanazi’s claims is a blunt thesis: <em>criminal syndicates have infiltrated the very
          institutions meant to stop them</em>. According to his statements to the media, Parliament and later the
          <strong>Madlanga Commission of Inquiry</strong>, he alleges:
        </p>

        <ul className="uk-list uk-list-bullet">
          <li>
            The <strong>Political Killings Task Team</strong> in KwaZulu-Natal — set up to probe assassinations linked
            to intra-party and local political conflicts — was improperly disbanded under political pressure.
          </li>
          <li>
            A sitting <strong>Minister of Police</strong> and senior national police figures interfered in live
            investigations, undermining work on high-profile crime and political murders.
          </li>
          <li>
            Elements of the police, prosecutors, intelligence community and even parts of the judiciary were
            <strong>“under the control” of powerful criminal networks</strong>, including drug cartels and tender-linked
            syndicates.
          </li>
        </ul>

        <p>
          These claims are not coming from an outsider or activist; they come from a sitting provincial commissioner, a
          career cop deeply embedded in the system. That is what makes them explosive. If the commissioner is right,
          the question shifts from <em>“Are our institutions corrupt?”</em> to <em>“How deep does the capture go?”</em>
        </p>

        {/* Human angle */}
        <h3 className="uk-heading-bullet uk-margin-large-top">A Commissioner at War with His Own System</h3>
        <p>
          In testimony and media interviews, Mkhwanazi paints the picture of a man increasingly isolated: a police
          leader trying to investigate assassinations, only to find that the obstacles were not the suspects on the
          street — but the instructions coming from above.
        </p>

        <p>
          When he refused to quietly accept these constraints, he went public, filed criminal complaints, and ultimately
          forced the President’s hand. The result was the establishment of a full{" "}
          <strong>Judicial Commission of Inquiry</strong> — the <strong>Madlanga Commission</strong> — and a separate{" "}
          <strong>Ad Hoc Committee of Parliament</strong> to examine his allegations and the institutional quake they
          triggered.
        </p>

        <blockquote className="uk-margin-large-top">
          <p>
            “Who will guard the guards?” is no longer a philosophical question. In South Africa’s policing crisis, it is
            the opening line of an affidavit.
          </p>
        </blockquote>
      </div>
    </article>
  );
};

export default Mkhwanazi







