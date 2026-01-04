import React from "react";
import ModelPoster from "./CoverPages";
import { models_covers } from "./ModelsLoader";

export default function ModelPosters() {
  return (
    <>
      {models_covers.map((model_covers) => (
        <ModelPoster
          key={model_covers.id}
          image={model_covers.image}
        />
      ))}
    </>
  );
}
