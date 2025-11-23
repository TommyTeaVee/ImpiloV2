/**
 * Chapter 7: Proceedings So Far — What We Know (and Don’t)
 */
const ProceedingsSoFar = () => {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>What We Know So Far: Inside the Proceedings</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            A living snapshot, part fact, part allegation, of a justice system on the stand.
          </p>
        </div>

        <p>
          By late November 2025, the story has outgrown any one room. It lives in three main arenas: the{" "}
          <strong>Madlanga Commission</strong>, the <strong>Ad Hoc Committee</strong>, and the{" "}
          <strong>criminal courts</strong>. Each is dealing with overlapping sets of names, documents and accusations.
        </p>

        <h3 className="uk-heading-bullet uk-margin-large-top">Established Facts</h3>
        <ul className="uk-list uk-list-bullet">
          <li>
            <strong>The Commission exists, with a clear mandate.</strong> It was established by presidential proclamation
            to investigate criminality, political interference and corruption in the criminal justice system.
          </li>
          <li>
            <strong>The Ad Hoc Committee exists.</strong> Parliament has confirmed its work examining Lt Gen
            Mkhwanazi’s allegations and engaging senior police leadership.
          </li>
          <li>
            <strong>Crime Intelligence head Lt-Gen Dumisani Khumalo</strong> has publicly testified about a “Big Five”
            cartel and was, after suspension and illness, <strong>reinstated</strong> as head of Crime Intelligence.
          </li>
          <li>
            <strong>Vusimuzi “Cat” Matlala</strong> is facing criminal charges including attempted murder and firearms-related
            offences, with a High Court trial date set.
          </li>
          <li>
            <strong>EMPD Deputy Chief Julius Mkhwanazi</strong> has been suspended by the City of Ekurhuleni pending a
            broader probe into alleged misconduct.
          </li>
          <li>
            <strong>Lt-Col Kelebogile Thepa</strong> has been reinstated as EMPD spokesperson, shortly after testifying
            at the Madlanga Commission about internal corruption and intimidation.
          </li>
        </ul>

        <h3 className="uk-heading-bullet uk-margin-large-top">Contested Allegations</h3>
        <p>
          Beyond the hard facts are the allegations that still have to survive cross-examination, criminal trials and
          final reports:
        </p>

        <ul className="uk-list uk-list-bullet">
          <li>
            That senior political figures <strong>deliberately disbanded</strong> units investigating politically
            connected killings to protect allies and donors.
          </li>
          <li>
            That criminal cartels such as the <strong>“Big Five”</strong> have direct influence over parts of the police,
            prosecution and intelligence services.
          </li>
          <li>
            That <strong>Cat Matlala</strong> used his relationships with officials like <strong>Julius Mkhwanazi</strong>
            to secure favours and protection, including interference in policing operations.
          </li>
          <li>
            That some senior officers now cast as reformers may themselves have, at earlier stages, benefited from or
            tolerated the very structures they are denouncing.
          </li>
        </ul>

        <p>
          These allegations are serious — and still being tested. Some may be confirmed, some disproved, and some may
          never be resolved beyond reasonable doubt.
        </p>

        <h3 className="uk-heading-bullet uk-margin-large-top">The Bigger Picture</h3>
        <p>
          Even at this interim stage, one conclusion is hard to avoid: the crisis is not about a few “bad apples”. It is
          about <strong>systems</strong> — how appointments were made, how oversight failed, how intelligence was
          weaponised, and how money flowed through tenders, cartels and political networks.
        </p>

        <p>
          The final reports of the Madlanga Commission and the Ad Hoc Committee will try to give that system a name and
          a shape. For now, we are watching a story mid-sentence.
        </p>
      </div>
    </article>
  );
};
export default ProceedingsSoFar
  

