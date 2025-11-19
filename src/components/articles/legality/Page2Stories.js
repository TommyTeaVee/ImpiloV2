export default function Page2Stories() {
  return (
    <div className="article-container" style={{overflowY: 'auto', maxHeight: '180vh'}}>
      <h2 className="article-title">City One & City Two: Divergent Paths to Innovation</h2>
      <div className="divider"></div>

      <p><strong>City One: Zakes Mda and the AI Revolution</strong></p>
      <p>
        Zakes Mda’s case highlights the emerging battleground of IP in the AI era. Creators must protect works against misuse.
      </p>
      <p>
        Vigilance is essential: document drafts, timestamp submissions, and use plagiarism tools to assert ownership.
      </p>
    
      <div className="callout">Lesson: Monitor AI usage and protect your digital works proactively.</div>

      <p><strong>City Two: Nkosana Makate and the Telecom Dilemma</strong></p>
      <p>
        Makate’s experience shows the importance of documenting ideas and using formal agreements when pitching.
      </p>
      <p>
        Persistence pays off. Decades-long legal battles illustrate that creators sometimes endure to secure recognition.
      </p>
<svg width="80%" height="200">
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
      <div className="callout">Lesson: Always document ideas, use NDAs, and maintain clear records.</div>
    </div>
  );
}
