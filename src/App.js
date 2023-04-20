import React from "react";
import HTMLFlipBook from "react-pageflip";
import ReactPlayer from "react-player";
import { Article } from "./Article";
import "./app.scss";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
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
          style={{ backgroundImage: `url("background.jpg")`}}>
            
            
            
          {pages.map((page, index) => (
            <Page key={index} className="page" number={index}>
              <img src={page} alt="" className="page-image" />
            </Page>
          ))}
            
            <div className="page" >
<Article></Article>
</div>
<div className="page">

{/* <video
  controls autoplay loop muted playsinline uk-cover video-port
  src="https://drive.google.com/uc?id=1y6C9PEP0o5L5V4PR3r6JIcFUfoHY-6lX"

/> */}
</div>
<div className="page" >
<h1>Salizwa Maranqwana</h1>
<p>My Intro

I am thrilled to welcome you to our magazine, where we strive to bring you engaging, informative, and thought-provoking content on a wide range of topics.

Our team of writers, editors, and contributors are passionate about delivering high-quality content that both informs and entertains. From current events and politics to health and wellness, technology, culture, and more, we cover it all.

We believe in fostering a sense of community through our magazine and we invite you to join us in this endeavor. We welcome your feedback, ideas, and suggestions on how we can continue to improve and deliver the best possible content for you.

Thank you for your continued support and for choosing to be a part of our magazine community.

Sincerely,
Impilo Digital Media</p>
<video style={{float: 'right'}}
  controls
  src="https://drive.google.com/uc?id=1emqacHB3Ab9gw0g63xf2dqNWhdlpIDRX"
 
  width="500"
/>
</div>

<PageCover>
</PageCover>
  </HTMLFlipBook >
      </div>
    
    );
  }
}

const pages = [
  "cover.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "zintle_intro.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "boutique.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "catalogue.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
 "dna.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "dna_cov.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "fashion.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "nako.png?auto=compress&cs=tinysrgb&dpr=1&w=100",
  "catalogue.png?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3M3MS1tY2tpbnNleS0xNDkxLWZvbi5qcGc.jpg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
];

export default function App() {
  return <DemoBook />;
}
