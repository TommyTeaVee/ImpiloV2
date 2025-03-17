import React from 'react';


export function Layouts () {
  return (
    <div className="uk-container uk-margin-top">
      {/* Page 1 */}
      <div className="uk-grid uk-child-width-1-2@m" data-uk-grid>
        <div>
          <img src="https://via.placeholder.com/400x600" alt="Portrait" className="uk-width-1-1" />
        </div>
        <div>
          <h2>Article Title 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="uk-margin">
            <audio controls>
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="uk-grid uk-child-width-1-2@m uk-margin-large-top" data-uk-grid>
        <div>
          <h2>Article Title 2</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="uk-margin">
            <audio controls>
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/400x600" alt="Portrait" className="uk-width-1-1" />
        </div>
      </div>

      {/* Page 3 */}
      <div className="uk-grid uk-child-width-1-2@m uk-margin-large-top" data-uk-grid>
        <div>
          <img src="https://via.placeholder.com/400x600" alt="Portrait" className="uk-width-1-1" />
        </div>
        <div>
          <h2>Article Title 3</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="uk-margin">
            <audio controls>
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

