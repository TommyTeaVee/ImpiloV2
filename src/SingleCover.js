 import { pages } from "./pages";
export default function SinglePage() {
    
  const pageIndex = 10; // index of the image you want

  return (
    <Page number={pageIndex}>
      <img
        src={pages[pageIndex]}
        alt={`Page ${pageIndex + 1}`}
        className="page-image"
      />
    </Page>
  );
}