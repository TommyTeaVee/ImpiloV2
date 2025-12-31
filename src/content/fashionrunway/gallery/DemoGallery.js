import CloudfrontGallery from "./MasterGallery";

export default function DemoGallery() {
  return (
    <CloudfrontGallery
      landscapesTop={[
        "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Sagery/landscape1.jpg"
      ]}
      portraits={[
        "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Sagery/portrait1.jpg",
        "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Sagery/portrait2.jpg",
        "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Sagery/portrait3.jpg"
      ]}
      embeds={[
        { type: "youtube", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { type: "instagram", url: "https://www.instagram.com/p/CsXQHjJLGzR/embed" }
      ]}
      landscapesBottom={[
        "https://d1zrm2iszdbieq.cloudfront.net/articles/models/Sagery/landscape2.jpg"
      ]}
    />
  );
}
