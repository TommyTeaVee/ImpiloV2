import React from "react";
import { ModelArticle } from "./ModelArticle";

// Sample Unsplash images
const runwayImgs = [
  "https://images.unsplash.com/photo-1534777402477-75e2a7a08aa0?w=1080",
  "https://images.unsplash.com/photo-1533681614853-fb2629290b18?w=1080"
];

export function RunwayModel() {
  return (
    <ModelArticle
      name="Sibongile Khumalo"
      type="Runway"
      images={runwayImgs}
      video="https://d16o5gtkyqkgf2.cloudfront.net/fashion.mp4"
      description="Hi! I'm Sibongile Khumalo, a professional runway model from Johannesburg. I love bringing clothes to life and walking the runway with confidence and grace."
      insta="https://www.instagram.com/sibongilekhumalo"
      tiktok="https://www.tiktok.com/@sibongilekhumalo"
    />
  );
}

const editorialImgs = [
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1080",
  "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1080"
];

export function EditorialModel() {
  return (
    <ModelArticle
      name="Thabo Mokoena"
      type="Editorial"
      images={editorialImgs}
      description="Hello! I'm Thabo, an editorial model specializing in magazine shoots and creative campaigns. I enjoy interpreting artistic visions and telling stories through images."
      insta="https://www.instagram.com/thabomokoena"
      tiktok="https://www.tiktok.com/@thabomokoena"
    />
  );
}

const partsImgs = [
  "https://images.unsplash.com/photo-1588422333077-4ebc06c8a420?w=1080",
  "https://images.unsplash.com/photo-1590487985250-9624d95ff0b3?w=1080"
];

export function PartsModel() {
  return (
    <ModelArticle
      name="Naledi Dlamini"
      type="Parts"
      images={partsImgs}
      description="I'm Naledi, a parts model working on hands, legs, and product modeling. I enjoy the precision and attention to detail required for this niche in the industry."
      insta="https://www.instagram.com/naledi_dlamini"
      tiktok="https://www.tiktok.com/@naledi_dlamini"
    />
  );
}

// Fitness Model
const fitnessImgs = [
  "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=1080",
  "https://images.unsplash.com/photo-1594737625785-1c4eae998fa6?w=1080"
];

export function FitnessModel() {
  return (
    <ModelArticle 
      name="Lerato Maseko"
      type="Fitness"
      images={fitnessImgs}
      description="I'm Lerato, a fitness model passionate about health, wellness, and inspiring others to stay active and strong. I love high-energy shoots that show motion and power."
      insta="https://www.instagram.com/lerato_maseko"
      tiktok="https://www.tiktok.com/@lerato_maseko"
    />
  );
}

// Ad Model
const adImgs = [
  "https://images.unsplash.com/photo-1581091215368-8ef0ef32a3d6?w=1080",
  "https://images.unsplash.com/photo-1591012911206-6e12131a56b6?w=1080"
];

export function AdModel() {
  return (
    <ModelArticle 
      name="Sipho Nkosi"
      type="Advertising"
      images={adImgs}
      description="Hello! I'm Sipho, an ad model creating visual campaigns for brands. I love translating marketing ideas into expressive visuals that capture attention."
      insta="https://www.instagram.com/sipho_nkosi"
      tiktok="https://www.tiktok.com/@sipho_nkosi"
    />
  );
}

// Commercial Model
const commercialImgs = [
  "https://images.unsplash.com/photo-1600185368658-8f1e87b0c2f7?w=1080",
  "https://images.unsplash.com/photo-1612353894644-3a0c3fa1b0db?w=1080"
];

export function CommercialModel() {
  return ( 
    <ModelArticle 
      name="Zanele Motsepe"
      type="Commercial"
      images={commercialImgs}
      description="Hi! I'm Zanele, a commercial model working in TV, print, and online campaigns. I thrive on diverse projects that connect brands to audiences."
      insta="https://www.instagram.com/zanele_motsepe"
      tiktok="https://www.tiktok.com/@zanele_motsepe"
    />
  );
}

// Product Model
const productImgs = [
  "https://images.unsplash.com/photo-1590608897129-79b1f8a6efb2?w=1080",
  "https://images.unsplash.com/photo-1585059892290-9c7db2f3a1d6?w=1080"
];

export function ProductModel() {
  return (
    <ModelArticle 
      name="Kgothatso Molefe"
      type="Product"
      images={productImgs}
      description="I'm Kgothatso, a product model specializing in lifestyle and commercial product shoots. I enjoy making products look appealing and desirable through my poses."
      insta="https://www.instagram.com/kgothatso_molefe"
      tiktok="https://www.tiktok.com/@kgothatso_molefe"
    />
  );
}
 