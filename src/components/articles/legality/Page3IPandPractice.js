export default function Page3IPandPractice() {
  return (
    <div className="article-container">
      <h2 className="article-title">Intellectual Property & Safe Practice</h2>
      <div className="divider"></div>

      <p><strong>Types of Intellectual Property</strong></p>
      <table className="article-table">
        <thead>
          <tr>
            <th>IP Type</th>
            <th>Protects</th>
            <th>Duration</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Copyright</td><td>Original expressions</td><td>Life +50 yrs</td><td>Books, music</td></tr>
          <tr><td>Patent</td><td>Novel inventions</td><td>20 yrs</td><td>AI algorithms, devices</td></tr>
          <tr><td>Trademark</td><td>Brand, logo, slogan</td><td>Renewable 10 yrs</td><td>Vodacom logo</td></tr>
          <tr><td>Trade Secret</td><td>Confidential info</td><td>As long as secret maintained</td><td>Secret formula</td></tr>
        </tbody>
      </table>

      <p><strong>Safe Creative Practices</strong></p>
      <ul className="article-list">
        <li>Watermark assets before publishing</li>
        <li>Read platform terms carefully</li>
        <li>Use NDAs when sharing ideas</li>
        <li>Track all communications and pitch documentation</li>
      </ul>
    </div>
  );
}
