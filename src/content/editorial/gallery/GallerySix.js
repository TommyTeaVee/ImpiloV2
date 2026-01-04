export function GallerySix() {
  return (
    <article className="gallery-article theme-gold">
      <h2>RUNWAY SELECTION</h2>
      <div className="gallery-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <img key={i} src={`https://picsum.photos/600/800?random=${i}`} />
        ))}
      </div>
    </article>
  );
}
