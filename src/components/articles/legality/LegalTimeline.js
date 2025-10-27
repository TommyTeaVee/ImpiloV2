export default function LegalTimeline() {
  return (
    <div className="article-container">
      <h3 className="article-title">Makate vs Vodacom: Legal Timeline</h3>
      <svg width="100%" height="200">
        {/* Timeline line */}
        <line x1="50" y1="100" x2="950" y2="100" stroke="#333" strokeWidth="2" />

        {/* Milestones */}
        <circle cx="100" cy="100" r="12" fill="#007BFF" />
        <text x="100" y="80" textAnchor="middle" fontSize="12">2001 Idea</text>

        <circle cx="300" cy="100" r="12" fill="#007BFF" />
        <text x="300" y="80" textAnchor="middle" fontSize="12">Court Case</text>

        <circle cx="600" cy="100" r="12" fill="#007BFF" />
        <text x="600" y="80" textAnchor="middle" fontSize="12">Constitutional Court</text>

        <circle cx="850" cy="100" r="12" fill="#007BFF" />
        <text x="850" y="80" textAnchor="middle" fontSize="12">Compensation</text>
      </svg>
      <p>This timeline illustrates the decades-long struggle to assert intellectual property rights in the corporate world.</p>
    </div>
  );
}
