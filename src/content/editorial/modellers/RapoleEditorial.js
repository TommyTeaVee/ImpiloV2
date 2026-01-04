export function RapoleEditorial() {
  return (
    <article className="fashion-editorial theme-gold">
      <header className="fashion-header">
        <span>Fashion Model · Issue 09</span>
        <h1>LERATO DISEKO</h1>
        <p className="quote">“Your dreams are valid”</p>
      </header>

      <img src="/mnt/data/Lerato.png" className="hero" />

      <section className="content">
        <div className="glass-card">
          <p>
            Lerato Diseko’s runway presence is not just fashion — it is identity
            in motion. Every walk carries intention, discipline, and quiet power.
          </p>
          <p>
            From Top Model SA to the Exclusive Jozi Fashion Runway, Lerato’s
            journey reflects consistency, faith, and resilience.
          </p>
        </div>

        <aside className="glass-card sidebar">
          <h3>Highlights</h3>
          <ul>
            <li>Top Model SA · 2014</li>
            <li>Free State Fashion Week</li>
            <li>Impilo Exclusive Jozi Runway 2024</li>
          </ul>

          <div className="sponsor-slot">Sponsored by · Fashion Brand</div>
        </aside>
      </section>
    </article>
  );
}
