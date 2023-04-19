import React from "react";
import HTMLFlipBook from "react-pageflip";
import ReactPlayer from "react-player";
import "./app.scss";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard" style={{ backgroundImage: `url("leather.jpeg")`}}>
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class DemoBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
      screeHt: 1
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data
    });
  };

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount()
    });
    this.setState({
      screeHt: window.innerHeight
    });
  }

  render() {
    return (
      <div>
        <HTMLFlipBook
          width={550}
          height={733}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
          style={{ backgroundImage: `url("background.jpeg")`}}>
            
            
            
          {pages.map((page, index) => (
            <Page key={index} className="page" number={index}>
              <img src={page} alt="" className="page-image" />
            </Page>
          ))}
           <div className="page">
              <h1>My excellent third article</h1>
              
              <video
              style={{float: 'right'}}
                controls
                src="https://drive.google.com/uc?id=1pT2TSapA6L3LuBETn_Om6KhDogmXfjqH"
              
                width="620"
              /> 
            {/*   <ReactPlayer
          className='react-player' className='player-wrapper' 
          url='https://drive.google.com/uc?id=1pT2TSapA6L3LuBETn_Om6KhDogmXfjqH'
          muted={true}
          width='100%'
          height='100%'
          
        /> */}

            </div>
            <div className="page">
<h1>My excellent third article</h1>
<p>My excellent third content</p>
<video style={{float: 'right'}}
  controls
  src="https://drive.google.com/uc?id=18Rx3vhwwe2NsHa6Zx-amdXr-pjtJ2umu/"
  width="620"
/>
</div>
<div className="page">
<h1>My excellent third article</h1>
<p>My excellent third content</p>
<video style={{float: 'right'}}
  controls
  src="https://drive.google.com/uc?id=1y6C9PEP0o5L5V4PR3r6JIcFUfoHY-6lX"
  width="620"
/>
</div>
<div className="page">
<h1>My excellent third article</h1>
<p>Dear Readers,

I am thrilled to welcome you to our magazine, where we strive to bring you engaging, informative, and thought-provoking content on a wide range of topics.

Our team of writers, editors, and contributors are passionate about delivering high-quality content that both informs and entertains. From current events and politics to health and wellness, technology, culture, and more, we cover it all.

We believe in fostering a sense of community through our magazine and we invite you to join us in this endeavor. We welcome your feedback, ideas, and suggestions on how we can continue to improve and deliver the best possible content for you.

Thank you for your continued support and for choosing to be a part of our magazine community.

Sincerely,
Impilo Digital Media</p>
<video style={{float: 'right'}}
  controls
  src="https://drive.google.com/uc?id=1JMo7_X2x_-Vnt0sVNgYk-jZEhiSb89ng"
  width="620"
/>
</div>
<PageCover>
  
</PageCover>
        </HTMLFlipBook>
      </div>
    
    );
  }
}

const pages = [
  "1.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "https://storage.googleapis.com/studio-design-asset-files/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_e336f940-149e-46eb-8a4b-9fc06b3fdaaf.webp",
  "https://storage.googleapis.com/studio-design-asset-files/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_fa3f2151-85a1-443d-a15d-7914f0205713.webp",
  "https://storage.googleapis.com/studio-design-asset-files/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_bf51ae35-e11f-4c4b-b21e-531250ea44d9.webp",
  "https://storage.googleapis.com/studio-design-asset-files/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_9d99aa45-cffc-42e3-b236-f9a5c625f895.webp",
  "https://storage.googleapis.com/studio-design-assets/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_1291d6ab-762c-4aa7-9ef9-060fb62e877c.webp",
  "https://storage.googleapis.com/studio-design-assets/projects/BXax1BQgW7/s-1000x1300_v-fms_webp_fa5dea81-842a-4900-b904-1c5311ce1545.webp",

  "71.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "12.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "70.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "35.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "19.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "Upcoming.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "9.png?auto=compress&cs=tinysrgb&dpr=1&w=1000"
];

export default function App() {
  return <DemoBook />;
}
