export function FashionVFXEditorial() {
  return (
    <article className="article-page">
      <header className="section glass" style={{ background: "#ea3490" }}>
        <h1>Digital Couture</h1>
        <p>When fashion design transcends physical reality.</p>
      </header>

      <section className="section">
        <p>
          Fashion films now live between cinema and performance art. VFX allows
          garments to morph, dissolve, and reassemble — turning clothes into
          emotion.
        </p>

        <img
          className="story-image"
          src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg"
        />

        <p>
          Designers collaborate with digital artists to prototype garments
          without fabric waste, redefining sustainability.
        </p>
      </section>

      <section className="section glass">
        <iframe
          src="https://www.youtube.com/embed/9No-FiEInLA"
          allowFullScreen
        />
      </section>
    </article>
  );
}
