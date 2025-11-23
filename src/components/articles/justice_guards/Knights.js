
/**
 * Chapter 5: The White Knight and the Dark Knight (expanded)
 */
 const WhiteAndDarkKnight = () => {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>The White Knight and the Dark Knight</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            Two men named Mkhwanazi. One becomes the face of resistance. The other stands accused of opening the back door.
          </p>
        </div>

        {/* Setup */}
        <p>
          South Africa’s policing crisis has produced unlikely symbols. None more so than two men who share a surname:
          <strong> Lt Gen Nhlanhla Mkhwanazi</strong>, the whistle-blower at the centre of the storm, and{" "}
          <strong>Deputy Chief Julius Mkhwanazi</strong> of the Ekurhuleni Metro Police Department, whose name surfaces
          in testimony, leaked chats and now disciplinary processes.
        </p>

        <h3 className="uk-heading-bullet uk-margin-large-top">The White Knight</h3>
        <p>
          In public narrative, <strong>Nhlanhla Mkhwanazi</strong> has emerged as the reluctant hero — a career officer
          who chose to expose his own system. His decision to go public with allegations of political interference and
          cartel infiltration broke a long-standing culture of internal silence.
        </p>

        <p>
          His “white knight” status is not about purity — no senior cop survives decades in South African policing
          without scars. It is about the choice he made: to put his rank and career on the line to force a conversation
          the country could no longer avoid.
        </p>

        <h3 className="uk-heading-bullet uk-margin-large-top">The Dark Knight</h3>
        <p>
          <strong>Julius Mkhwanazi</strong>, by contrast, appears in the story through allegations and commission
          exhibits. Testimony at the Madlanga Commission describes him as a key contact for{" "}
          <strong>Vusimuzi “Cat” Matlala</strong>, with WhatsApp messages allegedly showing him intervening in traffic
          incidents involving Matlala’s driver and leveraging his authority for private benefit.
        </p>

        <p>
          Separate media reporting and official city statements indicate that the City of Ekurhuleni has{" "}
          <strong>suspended Julius</strong> and launched a broader probe into alleged misconduct inside the EMPD. Among
          the claims circulating publicly: involvement in a “rogue” unit and improper acceptance of donations from
          private security interests — all matters now under investigation, not yet proven in court.
        </p>

        <p>
          The “dark knight” analogy captures this ambiguity: a senior officer whose public mandate is law and order, but
          who is now accused of working in the shadows where favours, influence and private interests blur the badge.
        </p>

        <h3 className="uk-heading-bullet uk-margin-large-top">Two Knights, One Question</h3>
        <p>
          The haunting symmetry of the story is hard to miss. One Mkhwanazi tells the country that criminal networks
          have penetrated the state. Another is alleged to be part of that penetration — a bridge between syndicate money
          and blue-light authority.
        </p>

        <p>
          Their fates will not be decided in headlines, but in commissions, courts and internal processes. What they
          already reveal, however, is the central paradox of South Africa’s policing crisis:
        </p>

        <blockquote className="uk-margin-large-top">
          <p>
            The same institutions that produce heroes capable of exposing the rot are the ones that allowed that rot to
            grow in the first place.
          </p>
        </blockquote>
      </div>
    </article>
  );
};
export default WhiteAndDarkKnight