import React from "react";
import HTMLFlipBook from "react-pageflip";
import ReactPlayer from "react-player";
import "@fontsource/gfs-didot"; // Defaults to weight 400
import "./app.scss";
import { pages } from "./pages";
import Articles from "./content/articles/Articles";
import { LandscapeHero } from "./content/dynamic/intros/LandscapeHero";

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
          height={980}
          minWidth={315}
          max-width={'800vh'}
          minHeight={'100vh'}
          maxHeight={'100vh'}
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
              <div class="container">
    <div>
        <button type="button" className="btn-prev">Previous page</button>
        [<span class="page-current">1</span> of <span class="page-total">-</span>]
        <button type="button" className="btn-next">Next page</button>
    </div>

    <div>
        State: <i class="page-state">read</i>, orientation: <i class="page-orientation">landscape</i>
    </div>
</div>
            </Page>
          ))}
<div className="page">
</div>
  </HTMLFlipBook >
      </div>
    
    );
  }
}



export default function App() {
  return <DemoBook />;
}
