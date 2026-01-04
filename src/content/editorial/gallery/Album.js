function Gallery({ images }) {
  return (
    <section className="section glass">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            style={{ width: "100%", borderRadius: "12px" }}
          />
        ))}
      </div>
    </section>
  );
}
