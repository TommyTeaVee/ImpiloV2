import React from "react";

export const PageContent = ({ children, activePage, index }) => (
  <div className="page">
    <div className={`page-content ${activePage === index ? "active" : ""}`}>
      {children}
      <div className="page-footer">{index + 1}</div>
    </div>
  </div>
);
