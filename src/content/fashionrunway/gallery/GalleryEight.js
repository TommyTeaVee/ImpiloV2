export function GalleryEight() {
  return (
    <article className="gallery-article theme-blue">
      <h2>BACKSTAGE MOMENTS</h2>
      <div className="gallery-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <img key={i} src={`https://picsum.photos/600/800?random=${i + 10}`} />
        ))}
      </div>
    </article>
  );
}
