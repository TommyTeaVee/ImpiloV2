import React from 'react';
import contents from '../../../contents';

export function  ModelFeature() {
  const content = contents[0];

  return (
         <article className="uk-article" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
      {/* Header Section */}
      <header className="uk-text-center uk-margin-large-bottom">
        <h1 className="uk-heading-meduim" style={{ fontFamily: content.fontFamily }}>
          The Creative Lens of Tommy V. Fihla
        </h1>
        <p className="uk-text-lead uk-text-muted">
          Founder & Chief Editor of Impilo Digital Magazine
        </p>
      </header>

      {/* Main Article Content */}
      <article className="uk-article uk-grid-large uk-child-width-1-2@m" data-uk-grid>
        <div>
          <h3 className="uk-heading-line"><span>Behind the Vision</span></h3>
          <p className="uk-text-lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet, purus id volutpat 
            pulvinar, nunc elit malesuada lorem, nec volutpat nisi purus id lorem. Cras sodales nisi vitae 
            nibh porta convallis.
          </p>
          <p>
            Quisque fermentum, odio sed scelerisque posuere, metus ligula tincidunt turpis, vel volutpat 
            magna neque sed risus. Maecenas efficitur sapien id quam consequat, ac malesuada nisl dignissim.
          </p>

          {/* Landscape Image */}
          <img 
            src="https://via.placeholder.com/800x400" 
            alt="Landscape 1" 
            className="uk-margin-medium-top uk-border-rounded"
          />
        </div>

        {/* Video Section */}
        <div>
          <video width="100%" controls playsInline loop uk-video="autoplay: inview">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="uk-text-meta uk-margin-top">Behind-the-scenes: Creating with passion</p>

          {/* Portrait Image */}
          <img 
            src="https://via.placeholder.com/400x600" 
            alt="Portrait 1" 
            className="uk-margin-medium-top uk-border-rounded"
          />
        </div>

        {/* Second Half of the Story */}
        <div>
          <h3 className="uk-heading-line"><span>A Journey of Innovation</span></h3>
          <p>
            In his role as editor, Tommy merges storytelling and visual design to produce immersive narratives. 
            His work transcends borders and speaks to young creatives around the world.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ipsum eu lorem lacinia finibus. 
            Nullam ut diam nec arcu volutpat dictum.
          </p>

          {/* Landscape Image */}
          <img 
            src="https://via.placeholder.com/800x400" 
            alt="Landscape 2" 
            className="uk-margin-medium-top uk-border-rounded"
          />
        </div>

        <div>
          {/* Portrait Image */}
          <img 
            src="https://via.placeholder.com/400x600" 
            alt="Portrait 2" 
            className="uk-border-rounded"
          />

          <h4 className="uk-margin-top">“Creativity is not just talent — it’s soul expression.”</h4>
          <p className="uk-text-muted uk-margin-top">
            — Tommy V. Fihla
          </p>
        </div>
      </article>

      {/* Social Media Icons */}
      <footer className="uk-text-center uk-margin-xlarge-top">
        <h4>Follow Tommy</h4>
        <div className="uk-flex-center uk-grid-small" data-uk-grid>
          <div>
            <a href="#" className="uk-icon-button" data-uk-icon="icon: facebook"></a>
          </div>
          <div>
            <a href="#" className="uk-icon-button" data-uk-icon="icon: twitter"></a>
          </div>
          <div>
            <a href="#" className="uk-icon-button" data-uk-icon="icon: instagram"></a>
          </div>
          <div>
            <a href="#" className="uk-icon-button" data-uk-icon="icon: youtube"></a>
          </div>
        </div>
      </footer>
    </div>
    </article>
  );
}
