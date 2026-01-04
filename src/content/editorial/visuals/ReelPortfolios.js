import React from "react";
import PortfolioCard from "./PortfolioCard";

const cloudfrontBase = "https://d1zrm2iszdbieq.cloudfront.net/assets/portfolio/";

// Portrait-only portfolio
export function PortraitPort() {
  const images = [
    `${cloudfrontBase}portrait1.jpg`,
    `${cloudfrontBase}portrait2.jpg`,
    `${cloudfrontBase}portrait3.jpg`,
  ];
  const videos = [
    `${cloudfrontBase}portrait1.mp4`,
    `${cloudfrontBase}portrait2.mp4`,
  ];

  return <PortfolioCard name="Alex" subtitle="Portrait Portfolio" images={images} videos={videos} />;
}

// Portrait + Landscape portfolio
export function MixedPort() {
  const images = [
    `${cloudfrontBase}portrait1.jpg`,
    `${cloudfrontBase}landscape1.jpg`,
    `${cloudfrontBase}portrait2.jpg`,
    `${cloudfrontBase}landscape2.jpg`,
  ];
  const videos = [`${cloudfrontBase}mixed1.mp4`];

  return <PortfolioCard name="Mallory" subtitle="Portrait + Landscape Portfolio" images={images} videos={videos} />;
}

// Landscape-only portfolio
export function LandscapePort() {
  const images = [
    `${cloudfrontBase}landscape1.jpg`,
    `${cloudfrontBase}landscape2.jpg`,
    `${cloudfrontBase}landscape3.jpg`,
  ];
  const videos = [`${cloudfrontBase}landscape1.mp4`];

  return <PortfolioCard name="Sagery" subtitle="Landscape Portfolio" images={images} videos={videos} />;
}
