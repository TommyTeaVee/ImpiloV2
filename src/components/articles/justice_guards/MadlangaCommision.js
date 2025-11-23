/**
 * Chapter 2: Madlanga Commission
 */
const MadlangaCommission = () => {
  return (
    <article className="uk-article" style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}>
      <div className="uk-container uk-margin-large-top">
        {/* Title */}
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>The Madlanga Commission: X-Ray of a Captured System</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            A judicial commission steps into the shadows of South Africa’s criminal justice system, following a trail left by a whistle-blowing general.
          </p>
        </div>

        {/* Background */}
        <p>
          In July 2025, under mounting public and political pressure, President Cyril Ramaphosa announced the{" "}
          <strong>Judicial Commission of Inquiry into Criminality, Political Interference, and Corruption in the
          Criminal Justice System</strong> — quickly dubbed the{" "}
          <strong>Madlanga Commission</strong> after its chair, retired Constitutional Court Justice Mbuyiseli
          Madlanga.
        </p>

        <p>
          Its mandate is stark: investigate whether politicians, senior police, prosecutors, intelligence operatives and
          even members of the judiciary have colluded with criminal syndicates, undermined investigations, and distorted
          the rule of law for private gain.
        </p>

        {/* Key testimonies */}
        <h3 className="uk-heading-bullet uk-margin-large-top">Inside the Hearing Room</h3>
        <p>
          Public hearings began in September 2025. The first witness? The man who set this chain of events in motion —
          <strong>Lt Gen Nhlanhla Mkhwanazi</strong>. Over days of testimony, he walked the commission through his
          allegations, tabled documents, communications and reports, and explained why he believed the justice system
          had been infiltrated at the highest levels.

        </p>

        <p>
          He was followed by <strong>National Police Commissioner Fannie Masemola</strong>, who testified about the
          decision-making around the disbanding of the KZN Political Killings Task Team and the broader politics of
          policing. Later,{" "}
          <strong>Crime Intelligence chief Lt-Gen Dumisani Khumalo</strong> described a sophisticated criminal network
          known as the <strong>“Big Five”</strong> cartel, allegedly operating inside and alongside state structures.
        </p>

        {/* Cat & Julius in commission */}
        <p>
          As the weeks progressed, the focus narrowed onto the nexus between organised crime figures and law enforcement
          insiders. WhatsApp logs and testimony brought names like{" "}
          <strong>Vusimuzi “Cat” Matlala</strong> and <strong>EMPD Deputy Chief Julius Mkhwanazi</strong> into the
          public record — painting a picture of favours, interventions and blurred lines between state power and private
          business interests.
        </p>

        {/* Public vs in-camera */}
        <h3 className="uk-heading-bullet uk-margin-large-top">Open Justice vs Necessary Secrecy</h3>
        <p>
          The commission has faced a constant balancing act: how to expose the rot without endangering witnesses or
          sabotaging ongoing operations. Some testimony has been heard in public; other parts moved{" "}
          <strong>in camera</strong>, off-camera or via remote connections due to serious security concerns. Media
          houses have fought to keep as much evidence as possible on the public record, warning that secrecy could
          “imperil” the integrity and impact of the process.
        </p>

        <p>
          In the end, the Madlanga Commission is more than just another inquiry. It is an X-ray of a justice system that
          has been accused not just of failing, but of <em>actively serving</em> the interests of the very syndicates it
          claims to fight.
        </p>

        <blockquote className="uk-margin-large-top">
          <p>
            South Africa has had commissions before. The difference this time is that the accused are not just corrupt
            politicians — they are the people in charge of handcuffs, subpoenas and wiretaps.
          </p>
        </blockquote>
      </div>
    </article>
  );
};
export default MadlangaCommission
