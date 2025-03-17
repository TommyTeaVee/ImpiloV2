import React from 'react';
import languages from './models'; // Assuming languages.js is in the same directory

const Sthe = () => {
  const currentLanguage = languages[0]; // Select the first language

  return (
    <article className="uk-article" style={{ fontFamily: currentLanguage.fontFamily }}>

      {/* Title */}
      <h1 className="uk-article-title uk-text-center">{currentLanguage.title}</h1>

      {/* Image */}
      <img src={currentLanguage.src} alt={currentLanguage.alt} className={currentLanguage.className} />

      {/* Head Line */}
      <h2>{currentLanguage.head_line}</h2>

      {/* Translate by */}
      <p>{currentLanguage.translate_by}</p>

      {/* Whats it */}
      <p>{currentLanguage.whats_it}</p>

      {/* Other Text 1 */}
      <p>{currentLanguage.other_text_1}</p>

      {/* Other Text 2 */}
      <p>{currentLanguage.other_text_2}</p>

      {/* Other Text 3 */}
      <p>{currentLanguage.other_text_3}</p>

      {/* Made by */}
      <p>{currentLanguage.made_by}</p>

    </article>
  );
};

export default Sthe;