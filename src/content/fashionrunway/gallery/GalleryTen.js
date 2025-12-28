export function GalleryTen() {
  return (
    <article className="gallery-article theme-pink">
      <h2>EDITORIAL SERIES</h2>
      <div className="gallery-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <img key={i} src={`https://picsum.photos/600/800?random=${i + 30}`} />
        ))}
      </div>
    </article>
  );
}
