import React from 'react';
import 'uikit/dist/css/uikit.min.css';

export function NewsletterLayout() {
  return (
    <div className="uk-container uk-container-small uk-margin-top" style={{ width: '210mm', margin: '0 auto', padding: '20mm' }}>
      {/* Newsletter Header */}
      <div className="uk-text-center uk-margin-bottom">
        <h1 className="uk-heading-primary">Monthly Newsletter</h1>
        <p className="uk-text-lead">Your source for the latest stories, insights, and updates.</p>
      </div>

      {/* Main Content Section */}
      <div className="uk-grid uk-child-width-1-2@m" data-uk-grid>
        {/* Left Side: Text Content */}
        <div className="uk-padding-right">
          <h2>Featured Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Audio Player */}
          <div className="uk-margin-top">
            <audio controls className="uk-width-1-1">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Right Side: Portrait Image */}
        <div>
          <img src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Portrait" className="uk-width-1-1" />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="uk-text-center uk-margin-large-top">
        <h3>Stay Tuned for More Stories</h3>
        <p>Subscribe to our newsletter for monthly updates and exclusive content.</p>
        <button className="uk-button uk-button-primary">Subscribe Now</button>
      </div>
    </div>
  );
}