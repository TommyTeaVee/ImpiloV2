export function GalleryTwelve() {
  return (
    <article className="gallery-article theme-purple">
      <h2>SIGNATURE ARCHIVE</h2>
      <div className="gallery-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <img key={i} src={`https://picsum.photos/600/800?random=${i + 60}`} />
        ))}
      </div>

      <div className="tip-jar glass-card">
        Support the Artist · Digital Tip Jar
      </div>
    </article>
  );
}
