export default function AiInfographic() {
  return (
   <div className="uk-container uk-margin-large-top">
      <h3 className="article-title">AI Content Workflow</h3>
      <svg width="100%" height="200">
        {/* Input */}
        <rect x="20" y="40" width="120" height="60" fill="#007BFF" rx="8" />
        <text x="80" y="75" textAnchor="middle" fill="#fff" fontSize="14">Books & Content</text>

        {/* Arrow */}
        <line x1="140" y1="70" x2="200" y2="70" stroke="#333" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Process */}
        <rect x="200" y="40" width="120" height="60" fill="#00BFFF" rx="8" />
        <text x="260" y="75" textAnchor="middle" fill="#fff" fontSize="14">AI Processing</text>

        {/* Arrow */}
        <line x1="320" y1="70" x2="380" y2="70" stroke="#333" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Output */}
        <rect x="380" y="40" width="120" height="60" fill="#FF8C00" rx="8" />
        <text x="440" y="75" textAnchor="middle" fill="#fff" fontSize="14">Generated Content</text>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#333" />
          </marker>
        </defs>
      </svg>
      <p>AI models consume existing content to generate new works. Creators must monitor usage and protect IP.</p>
    </div>
  );
}
