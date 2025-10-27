export default function Page1Intro() {
  return (
     <article className="uk-article" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
    <div className="uk-container uk-margin-large-top">
      <h1 className="article-title">A Tale of Two Cities: Justice for Creators in Two Worlds</h1>
      <p className="article-subtitle">Lessons on Intellectual Property, Safe Practice, and the Power of a Well-Protected Idea</p>

      <p className="lead">“It was the best of times, it was the worst of times…” — Charles Dickens</p>

      <p>
        Across the globe, creators struggle to have their ideas recognized, protected, and fairly rewarded.
        Zakes Mda wins against AI misuse, while Nkosana Makate fights Vodacom over the revolutionary "Please Call Me" service.
      </p>

      <p>
        These battles share common themes: the value of ideas, challenges of IP enforcement, and ethical frameworks
        for creators. Together, they form a modern “Tale of Two Cities”.
      </p>

      <div className="grid-two">
        <img src="/images/zakes-mda.jpg" alt="Zakes Mda" className="article-img" />
        <img src="/images/makate.jpg" alt="Nkosana Makate" className="article-img" />
      </div>
    </div>
    </article>
  );
}
