import React from 'react';


export function MainStoryArticle () {
  return (
    <div className="uk-container uk-container-large uk-margin-top">
      {/* Hero Section */}
      <div className="uk-height-large uk-flex uk-flex-middle uk-background-cover uk-dark" data-src="https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" data-uk-img>
        <div className="uk-width-1-2@m uk-padding-large">
          <h1 className="uk-heading-primary">The Main Story Headline</h1>
          <p className="uk-text-lead">
            A captivating introduction to the main story. This section draws the reader in with a bold headline and a brief summary.
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="uk-section">
        <div className="uk-container">
          {/* Section 1: Text and Portrait Image */}
          <div className="uk-grid uk-child-width-1-2@m" data-uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <img src="https://via.placeholder.com/400x600" alt="Portrait" className="uk-width-1-1" />
            </div>
          </div>

          {/* Section 2: Audio Player and Text */}
          <div className="uk-grid uk-child-width-1-2@m uk-margin-large-top" data-uk-grid>
            <div>
              <div className="uk-margin">
                <audio controls className="uk-width-1-1">
                  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <p>
                Listen to the audio version of this story. The audio player is embedded here for convenience, allowing readers to enjoy the content in a different format.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Section 3: Full-Width Image */}
          <div className="uk-margin-large-top">
            <img src="https://via.placeholder.com/1200x400" alt="Full-width image" className="uk-width-1-1" />
          </div>

          {/* Section 4: Final Text Section */}
          <div className="uk-margin-large-top">
            <h2>Conclusion</h2>
            <p>
              In conclusion, this main story highlights the importance of storytelling in modern media. By combining text, images, and audio, we create a rich and engaging experience for the reader.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

