import React from 'react';
import contents from './contents';

export function Article() {
  const [language, setLanguage] = React.useState(contents[0]);

  function handleLanguage(locale) {
    const filtered = contents.filter((item) => item.locale === locale);
    const object = filtered.length >= 1 ? filtered[0] : contents[0];

    document.documentElement.lang = object.locale;
    document.documentElement.style.fontFamily = object.fontFamily;
    document.title = object.title;

    setLanguage(object);
  }

  React.useEffect(() => {
    handleLanguage();
  }, []);

  return (
    <div className="uk-container uk-margin-large-top" style={{overflowY: 'auto', maxHeight: '180vh'}}>
      {/* Header */}
      <div className="uk-flex uk-flex-between uk-flex-middle uk-margin-medium-bottom">
        <h2
          className="uk-heading-line uk-text-bold"
          style={{
            fontFamily: language.fontFamily,
            fontSize: '1.8rem',
            letterSpacing: '0.5px',
          }}
        >
          <span>{language.head_line}</span>
        </h2>
        <select
          className="uk-select uk-width-small"
          value={language.locale}
          onChange={(e) => handleLanguage(e.currentTarget.value)}
        >
          {contents.map((item) => (
            <option key={item.locale} value={item.locale}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Body */}
      <div className="uk-grid-large uk-child-width-1-2@m uk-flex-middle" data-uk-grid>
        {/* Left column */}
        <div>
          <p
            className="uk-text-lead uk-margin-small-bottom"
            style={{ lineHeight: '1.6' }}
          >
            {language.whats_it}
          </p>
          <div className="uk-text-center uk-margin">
            <video
              src="https://d16o5gtkyqkgf2.cloudfront.net/Pellesi.mp4"
              width="100%"
              controls
              loop
              playsInline
              uk-video="autoplay: inview"
              className="uk-border-rounded uk-box-shadow-medium"
            />
          </div>
        </div>

        {/* Right column */}
        <div>
          <p className="uk-dropcap uk-text-justify uk-margin-medium-bottom">
            {language.other_text_1}
          </p>
          <p className="uk-dropcap uk-text-justify uk-margin-medium-bottom">
            {language.other_text_2}
          </p>
          <hr />
          <p className="uk-dropcap uk-text-justify">{language.other_text_3}</p>
        </div>
      </div>
    </div>
  );
}
