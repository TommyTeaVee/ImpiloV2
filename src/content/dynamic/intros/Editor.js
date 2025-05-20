import React from 'react';
//import editorImage from 'public/tommytv.jpeg'; // Optional usage for full layout

export function Editor() {
 return (
     <article className="uk-article" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom uk-padding">
      <div className="uk-child-width-1-1@m uk-grid-large" data-uk-grid>
        {/* Left Column */}
         <h1>Editor’s Note</h1>
        <div>
          <img
            src="/tommytv.jpeg" width={500} height={700} // Replace with actual headshot
            alt="Tommy Fihla"
            className="uk-border-rounded uk-box-shadow-medium"
          />
          <p className="uk-text-lead uk-margin-top uk-text-justify uk-dropcap">
            Will never stop providing the best content related to fashion in a magazine. It is my commitment 
            and the entire <strong>Impilo Magazine</strong> team to always provide the latest and most substantive 
            content on the local and international fashion scene because we believe our readers deserve the best.
          </p>

          <p className="uk-margin-large-top">
            <span style={{ fontFamily: 'cursive', fontSize: '1.5rem' }}>Tommy Fihla</span><br />
            <strong>Editor-in-Chief</strong>
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="uk-text-uppercase uk-text-bold uk-margin-remove-top">Impilo Magazine</h4>

          <img
            src="https://scontent.fjnb9-1.fna.fbcdn.net/v/t39.30808-6/473824450_1124038172781195_627145179324653894_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGJ0sk2llc4XWCyXnmy9FdcJ2OLFF2mPr8nY4sUXaY-vwbv8oeh81dFxSdfOOHDJsZny0IAaEGVekgpAH0TcmOa&_nc_ohc=8VXnzRwRHf4Q7kNvwFOzp9l&_nc_oc=AdmEuO7uIIjkZ9MbB_2XyLoU1VwIUjaAZ028CZwCmmo7tozBhNoQtjIeNHUKwwfmFps&_nc_zt=23&_nc_ht=scontent.fjnb9-1.fna&_nc_gid=vwDBshl36OPk8ETXKsLG6g&oh=00_AfISGo6qN7W3rWPlxvhvKntCgah2ewKTYMVkuU4wciPENQ&oe=68318FEB"
            alt="Pageant Winners"
            className="uk-margin-medium-top uk-border-rounded"
          />

          <div
            className="uk-card uk-card-default uk-card-body uk-margin-medium-top"
            style={{ backgroundColor: '#D6E84E' }}
          >
            <h4 className="uk-margin-small-bottom">Exclusive Coverage</h4>
            <p className="uk-text-justify">
              Let’s follow how a nonprofit organization in Queenstown, Eastern Cape has come to prominence in the 
              last five years. Not only in daily life but in important moments such as women empowerment, confidence 
              building, and inspiring young people.
            </p>
          </div>
        </div>
      </div>
    </div>
    </article>
  );
}
