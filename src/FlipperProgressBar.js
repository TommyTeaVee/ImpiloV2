export function FlipperProgressBar({ totalPages, activePage, onClickPage }) {
  const percentage = ((activePage + 1) / totalPages) * 100;

  return (
    <div className="flipper-progress">
      <div className="flipper-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
}