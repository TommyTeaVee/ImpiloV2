import React from 'react';


export function Salizwa (){

return (


<>
<div uk-grid-small uk-grid-divide uk-align-center >
<h1 class="uk-heading-large">Large</h1>
<div class="uk-h3">Salizwa Album</div>


<div class="uk-position-relative uk-visible-toggle uk-light"  tabindex="-1" uk-slideshow="pause-on-hover: true animation: pull autoplay: true autoplay-interval: 6000">

    <ul class="uk-slideshow-items">
        <li>
            <img src="https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/310904900_870827637630591_5775964583824485744_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHdqkEbp58Ok4hmxrl3q5pVlEOiHGOkoRiUQ6IcY6ShGAn2RbbWRzWw_-puqf85tJ9CClclzHAK6umx2h18k6ho&_nc_ohc=yUJEd_4jBsgAX_Lexn9&_nc_ht=scontent-jnb1-1.xx&oh=00_AfCmXa5xwvDtYhhdpVHj1zCu3H1lBmWJgjGH9QyVamfPdA&oe=6449D62B" alt="" uk-cover/>
        </li>
        <li>
            <img src="1.png" alt="" uk-cover/>
        </li>
        <li>
            <img src="catalogue.png" alt="" uk-cover/>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

</div>
<div>
<div>
<h1>Salizwa  Marwanqa</h1>



 <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex"
  style={{backgroundImage: `url('https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/310904900_870827637630591_5775964583824485744_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHdqkEbp58Ok4hmxrl3q5pVlEOiHGOkoRiUQ6IcY6ShGAn2RbbWRzWw_-puqf85tJ9CClclzHAK6umx2h18k6ho&_nc_ohc=yUJEd_4jBsgAX_Lexn9&_nc_ht=scontent-jnb1-1.xx&oh=00_AfCmXa5xwvDtYhhdpVHj1zCu3H1lBmWJgjGH9QyVamfPdA&oe=6449D62B')`}}>
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 50vh + 50%;">Salizwa Marwanqana</h1>
        <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
<div>
<video controls src="https://drive.google.com/uc?id=1emqacHB3Ab9gw0g63xf2dqNWhdlpIDRX"
 width="500"  loop muted playsinline uk-video="autoplay: inview">
	
 </video>

</div>
<div class="audio-player">
														<audio id="audio-player"  controls="controls">
														<source src="http://localhost/impilo-webs/mosaic/media/Blue Browne.ogg" type="audio/ogg"></source>
																<source src="/http://localhost/impilo-webs/mosaicmedia/Blue Browne.mp3" type="audio/mpeg"></source>
																<source src="http://localhost/impilo-webs/mosaic/media/Georgia.ogg" type="audio/ogg"></source>
															<source src="http://localhost/impilo-webs/mosaic/media/Georgia.mp3" type="audio/mpeg">
                                </source></audio>
														</div>
</div>
</div>
</>
)
}