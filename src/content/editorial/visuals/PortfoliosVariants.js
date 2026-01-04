import React from "react";
import PortfolioCard from "./PortfolioComponent";

const cloudfrontBase = "https://d1zrm2iszdbieq.cloudfront.net/";

// Portrait-only portfolio
export function PortraitPortfolio() {
    const images = [
    `${cloudfrontBase}articles/models/Alex/588212942_1491891708530949_1820565203027167313_n.jpg`,
    `${cloudfrontBase}articles/models/Alex/588368821_1125058359796949_6930297484511444639_n.jpg`,
    `${cloudfrontBase}articles/models/Alex/589912712_1680723502905537_8456216366489532862_n.jpg`,
    `${cloudfrontBase}articles/models/Alex/591705776_866181062533320_3094779934071122464_n.jpg`,
  ];
  
  const reels = [
    "https://www.youtube.com/embed/SHORT_URL1", // YouTube Shorts
    "https://www.instagram.com/p/SHORT_URL2/embed",
  ];

  return <PortfolioCard name="Alex" subtitle="Portrait Portfolio" images={images} reels={reels} />;
}

// Portrait + Landscape portfolio
export function MixedPortfolio() {
    const images = [
    `${cloudfrontBase}articles/models/Mallory/597899247_751767104602044_1716361585274432677_n.jpg`,
    `${cloudfrontBase}articles/models/Mallory/597770489_828545100170354_8079124651364415548_n.jpg`,
    `${cloudfrontBase}articles/models/Mallory/597691611_33189645833982700_8225491170054498505_n.jpg`,
  ];
  
  const reels = ["https://www.youtube.com/embed/VIDEO_URL"];

  return <PortfolioCard name="Mallory" subtitle="Portrait + Landscape Portfolio" images={images} reels={reels} />;
}

// Landscape-only portfolio
export function LandscapePortfolio() {
  const images = [
    `${cloudfrontBase}articles/models/Sagery/📸/204A5143.JPG`,
    `${cloudfrontBase}articles/models/Sagery/📸/204A5143.JPG`,
    `${cloudfrontBase}articles/models/Sagery/📸/204A5143.JPG`,
  ];
  const reels = ["https://www.youtube.com/embed/VIDEO_URL2"];

  return <PortfolioCard name="Sagery" subtitle="Landscape Portfolio" images={images} reels={reels} />;
}
