// ModelPoster.jsx
import React from "react";

export default function ModelPoster({ image }) {
  return (
    <section
      className="model-poster uk-flex uk-flex-center uk-flex-middle"
      style={{
        width: "100%",
        height: "180vh",       // fills viewport / flipbook page
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <img
        src={image}
        alt="Model poster"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </section>
  );
}
