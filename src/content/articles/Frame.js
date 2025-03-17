import React from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';

export function Frame() {
    return (
        <article className="uk-article">
    
          <h1 className="uk-article-title uk-text-center">Sthembele Mathebula</h1>
    
          <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid>
            <div>
              <div className="uk-grid-small uk-child-width-1-2@s" data-uk-grid>
                <div>
                  <img src="https://plus.unsplash.com/premium_photo-1664868839978-8fba95c0cdc1?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Image+1" alt="Sthembele Mathebula posing" className="uk-border-rounded" />
                </div>
                <div>
                  <img src="https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Image+2" alt="Sthembele Mathebula smiling" className="uk-border-rounded" />
                </div>
              </div>
              <img src="https://plus.unsplash.com/premium_photo-1664868839978-8fba95c0cdc1?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Image+3" alt="Sthembele Mathebula in a photoshoot" className="uk-border-rounded uk-margin-top" />
            </div>
            <div className="uk-flex uk-flex-column">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/JFXmIh4P2dM" 
                title="Fake Luxury Shoe Store Prank proves Luxury is just Perception - Payless" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                className="uk-margin-auto-vertical"
              ></iframe>
              <div className="uk-grid-small uk-child-width-1-2@s uk-margin-top" data-uk-grid>
                <div>
                  <img src="https://images.unsplash.com/photo-1530777780045-c11965d8f4c7?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Image+4" alt="Sthembele Mathebula working" className="uk-border-rounded" />
                </div>
                <div>
                  <img src="https://plus.unsplash.com/premium_photo-1669703777657-41f5adb14e9b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Image+5" alt="Sthembele Mathebula posing" className="uk-border-rounded" />
                </div>
              </div>
            </div>
          </div>
    
          <div className="uk-section uk-section-muted uk-margin-top">
            <div className="uk-container">
    
              <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid>
                <div>
                  <h2>About Sthembele</h2>
                  <p>
                    I am Sthembele Mathebula, a model, stylist and creative from Johannesburg Soweto. I love and enjoy being in front of the camera. 
                    I have worked in the industry for over three years, and I have done shoots with big and small brands like Foxstar casting agency, Impilo Magazine, BruceVega and Spotlight photography.
                  </p>
                  <p>
                    <strong>Motto:</strong> To succeed is to give yourself a fair chance to try again and again. Never stop trying.
                  </p>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-card-body">
                    <h3>Connect with Sthembele</h3>
                    <ul className="uk-list uk-list-divider">
                      <li><a href="https://www.instagram.com/Sthe_liveact/" target="_blank" rel="noopener noreferrer" className="uk-link-reset">@Sthe_liveact (Instagram)</a></li>
                      <li><a href="https://www.tiktok.com/@Sthe_liveact" target="_blank" rel="noopener noreferrer" className="uk-link-reset">@Sthe_liveact (TikTok)</a></li>
                      <li><a href="#" className="uk-link-reset">Sthembele maestro (Facebook)</a></li> {/* Replace with actual Facebook link */}
                    </ul>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
    
        </article>
      );
    };
    

export default Frame;