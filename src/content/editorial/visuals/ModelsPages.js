import React from "react";
import PosterPage from "../covers/PosterPage";
import ModelPage from "../covers/ModelPage";

const cloudfrontBase = "https://d1zrm2iszdbieq.cloudfront.net/assets/model_covers/";

export function ModelAlbums() {
  return (
    <div>
      {/* Full-page posters */}
      <PosterPage imageUrl={`${cloudfrontBase}Alex.jpg`} />
      <PosterPage imageUrl={`${cloudfrontBase}Mallory.jpg`} />
      <PosterPage imageUrl={`${cloudfrontBase}Sagery.jpg`} />

      {/* Portfolio pages */}
      <ModelPage
        name="Alex"
        subtitle="Portrait Portfolio"
        images={[`${cloudfrontBase}portrait1.jpg`, `${cloudfrontBase}portrait2.jpg`]}
        videos={[`${cloudfrontBase}portrait1.mp4`]}
      />

      <ModelPage
        name="Mallory"
        subtitle="Mixed Portfolio"
        images={[`${cloudfrontBase}portrait1.jpg`, `${cloudfrontBase}landscape1.jpg`]}
        videos={[`${cloudfrontBase}mixed1.mp4`]}
      />
    </div>
  );
}
