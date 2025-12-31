const React = require("react");

/* -------------------------------
   Page Cover Component
-------------------------------- */
export const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover hard" ref={ref} data-density="hard">
    <div className="page-content">
      <h2>{props.children}</h2>
    </div>
  </div>
));

/* -------------------------------
   Standard Page Component
-------------------------------- */
export const Page = React.forwardRef((props, ref) => (
  <div className="page" ref={ref}>
    <div className="page-content">
      <div className="page-text">{props.children}</div>
    </div>
  </div>
));


