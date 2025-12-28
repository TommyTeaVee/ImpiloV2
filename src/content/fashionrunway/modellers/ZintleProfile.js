import React from 'react';
import 'uikit/dist/css/uikit.min.css';

function ZintleProfile() {
  return (
    <article
      className="uk-article"
      style={{ 
        overflowY: "auto", 
        maxHeight: "180vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}
    >
      {/* Hero Section */}
      <div className="uk-section uk-section-default uk-light" 
           style={{ background: "rgba(0,0,0,0.7)" }}>
        <div className="uk-container">
          <div className="uk-grid uk-grid-large uk-flex-middle" data-uk-grid>
            {/* Profile Image */}
            <div className="uk-width-1-3 uk-width-1-4@m">
              <div className="uk-border-circle uk-overflow-hidden uk-box-shadow-xlarge" 
                   style={{ 
                     width: "200px", 
                     height: "200px", 
                     border: "5px solid #fff",
                     backgroundColor: "#e6e6e6"
                   }}>
                {/* Image Placeholder */}
                <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                  <span className="uk-text-muted">Profile Image</span>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <div className="uk-width-2-3 uk-width-3-4@m">
              <h1 className="uk-heading-xlarge uk-text-bold uk-text-uppercase uk-margin-remove-bottom" 
                  style={{ 
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    letterSpacing: "3px"
                  }}>
                MY VALUES & OBJECTIVES
              </h1>
              <div className="uk-margin-top">
                <span className="uk-label uk-label-warning uk-text-large uk-padding-small">
                  Founder & Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="uk-container uk-container-expand uk-margin-large-top">
        <div className="uk-grid uk-grid-large" data-uk-grid>
          {/* Left Column - Gender Equality */}
          <div className="uk-width-3-5@m">
            <section className="uk-card uk-card-default uk-card-body uk-box-shadow-xlarge uk-margin-bottom">
              {/* Icon/Image for Gender Equality */}
              <div className="uk-flex uk-flex-center uk-margin-bottom">
                <div className="uk-border-circle uk-background-primary uk-padding-large" 
                     style={{ width: "120px", height: "120px" }}>
                  <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                    <span className="uk-text-light" style={{ fontSize: "3rem" }}>⚖️</span>
                  </div>
                </div>
              </div>
              
              <h2 className="uk-heading-medium uk-text-center uk-text-primary uk-text-uppercase uk-margin-remove-top">
                I Advocate for Gender Equality
              </h2>
              
              <div className="uk-text-large uk-margin-large">
                <p className="uk-text-justify">
                  I believe that gender equality can be a big part of each person's personality 
                  as it is a necessary foundation for a peaceful, prosperous and sustainable world. 
                </p>
                
                <div className="uk-margin-medium-top uk-padding-large uk-background-secondary uk-light uk-border-rounded">
                  <p className="uk-text-center uk-text-bold uk-h4">
                    Women and men should enjoy the same opportunities, rights and obligations 
                    in all spheres of life.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Right Column - Magazine Logo */}
          <div className="uk-width-2-5@m">
            <section className="uk-card uk-card-body uk-text-center uk-height-large" 
                     style={{ 
                       backgroundColor: "#1a1a1a",
                       display: "flex",
                       flexDirection: "column",
                       justifyContent: "center"
                     }}>
              {/* Magazine Logo Placeholder */}
              <div className="uk-margin-bottom">
                <div className="uk-border-rounded uk-background-muted uk-margin-auto" 
                     style={{ width: "150px", height: "150px" }}>
                  <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                    <span className="uk-text-bold">IM</span>
                  </div>
                </div>
              </div>
              
              <h3 className="uk-heading-large uk-text-bold uk-text-uppercase" 
                  style={{ 
                    color: "#fff",
                    letterSpacing: "5px",
                    textShadow: "0 2px 5px rgba(0,0,0,0.5)"
                  }}>
                IMPILO
              </h3>
              <p className="uk-text-uppercase uk-text-muted" style={{ letterSpacing: "2px" }}>
                MAGAZINE
              </p>
            </section>
          </div>
        </div>
        
        {/* Founder & Director Section */}
        <section className="uk-section uk-section-muted uk-margin-xlarge-top">
          <div className="uk-container">
            <h2 className="uk-heading-medium uk-text-center uk-text-primary uk-text-uppercase uk-margin-large-bottom">
              I am a founder and director of:
            </h2>
            
            {/* Foundation Card */}
            <div className="uk-card uk-card-body uk-box-shadow-large uk-margin-large-bottom" 
                 style={{ 
                   backgroundColor: "#fff",
                   borderTop: "5px solid #4CAF50"
                 }}>
              <div className="uk-grid uk-grid-medium uk-flex-middle" data-uk-grid>
                <div className="uk-width-auto">
                  <div className="uk-label uk-label-success uk-padding" 
                       style={{ fontSize: "1.5rem" }}>
                    Foundation
                  </div>
                </div>
                <div className="uk-width-expand">
                  <h3 className="uk-heading-small uk-text-bold uk-margin-remove-top">
                    Masizame Kukhanye Foundation
                  </h3>
                  <p className="uk-text-large uk-margin-remove">
                    Which aims to uplift not only my community but the world at large.
                  </p>
                </div>
              </div>
              
              {/* Foundation Image Placeholder */}
              <div className="uk-margin-top uk-text-center">
                <div className="uk-inline uk-width-1-1">
                  <div className="uk-background-muted uk-height-medium uk-border-rounded uk-overflow-hidden">
                    <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                      <span className="uk-text-large">Foundation Activities Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pageants Section */}
            <h3 className="uk-heading-small uk-text-center uk-text-uppercase uk-margin-xlarge-top">
              Exclusive Pageants
            </h3>
            
            <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-margin-large-top" data-uk-grid>
              {/* Pageant 1 */}
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-medium uk-text-center uk-height-medium">
                  <div className="uk-margin-bottom">
                    <div className="uk-border-circle uk-background-primary uk-margin-auto" 
                         style={{ width: "80px", height: "80px" }}>
                      <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                        <span className="uk-text-light">👑</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="uk-heading-small uk-text-bold uk-margin-remove-top">
                    Miss & Mr. Black Diamond Ambassador
                  </h4>
                  <div className="uk-label uk-label-primary uk-margin-small-top">
                    National Pageant
                  </div>
                </div>
              </div>
              
              {/* Pageant 2 */}
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-medium uk-text-center uk-height-medium">
                  <div className="uk-margin-bottom">
                    <div className="uk-border-circle uk-background-secondary uk-margin-auto" 
                         style={{ width: "80px", height: "80px" }}>
                      <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                        <span className="uk-text-light">🌟</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="uk-heading-small uk-text-bold uk-margin-remove-top">
                    Miss Intelligence E.C
                  </h4>
                  <div className="uk-label uk-label-secondary uk-margin-small-top">
                    Provincial Pageant
                  </div>
                </div>
              </div>
              
              {/* Pageant 3 */}
              <div>
                <div className="uk-card uk-card-default uk-card-body uk-box-shadow-medium uk-text-center uk-height-medium">
                  <div className="uk-margin-bottom">
                    <div className="uk-border-circle uk-background-warning uk-margin-auto" 
                         style={{ width: "80px", height: "80px" }}>
                      <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                        <span className="uk-text-light">💫</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="uk-heading-small uk-text-bold uk-margin-remove-top">
                    Mr & Miss Mlungisi
                  </h4>
                  <div className="uk-label uk-label-warning uk-margin-small-top">
                    Local Pageant
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="uk-card uk-card-body uk-box-shadow-medium uk-margin-xlarge-top" 
                 style={{ 
                   backgroundColor: "#ffebee",
                   borderLeft: "5px solid #f44336"
                 }}>
              <h4 className="uk-heading-small uk-text-center uk-text-bold uk-text-uppercase">
                Our Mission
              </h4>
              <p className="uk-text-large uk-text-center uk-text-italic uk-margin-medium-top">
                "Building sisterhood and brotherhood amongst our young girls 
                and boys in the community and also empowering them."
              </p>
            </div>
          </div>
        </section>
        
        {/* Legacy Section */}
        <section className="uk-section uk-section-primary uk-light uk-margin-xlarge-top">
          <div className="uk-container">
            <div className="uk-text-center">
              <h2 className="uk-heading-xlarge uk-text-bold uk-text-uppercase" 
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
                MY LEGACY
              </h2>
              
              <div className="uk-margin-large-top">
                {/* Legacy Image Placeholder */}
                <div className="uk-inline uk-width-1-1 uk-margin-bottom">
                  <div className="uk-background-secondary uk-height-medium uk-border-rounded uk-overflow-hidden">
                    <div className="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                      <span className="uk-text-large">Legacy Impact Image</span>
                    </div>
                  </div>
                </div>
                
                <div className="uk-grid uk-child-width-1-2@m uk-margin-large-top" data-uk-grid>
                  <div>
                    <div className="uk-card uk-card-body uk-background-secondary uk-border-rounded">
                      <h4 className="uk-heading-small">Community Impact</h4>
                      <p>Building sustainable platforms for youth empowerment and development.</p>
                    </div>
                  </div>
                  <div>
                    <div className="uk-card uk-card-body uk-background-secondary uk-border-rounded">
                      <h4 className="uk-heading-small">Future Vision</h4>
                      <p>Creating lasting change through education, opportunity, and representation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default ZintleProfile;