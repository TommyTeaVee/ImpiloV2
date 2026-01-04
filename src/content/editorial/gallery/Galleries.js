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

export function Gallery6() {
  return <Gallery images={[...Array(6)].map(() => "https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg")} />;
}

export function Gallery8() {
  return <Gallery images={[...Array(8)].map(() => "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg")} />;
}

export function Gallery10() {
  return <Gallery images={[...Array(10)].map(() => "https://images.pexels.com/photos/7581180/pexels-photo-7581180.jpeg")} />;
}

export function Gallery12() {
  return <Gallery images={[...Array(12)].map(() => "https://images.pexels.com/photos/7988215/pexels-photo-7988215.jpeg")} />;
}