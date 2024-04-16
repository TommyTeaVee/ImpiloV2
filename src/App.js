import React from "react";
import HTMLFlipBook from "react-pageflip";
import ReactPlayer from "react-player";
import { Article } from "./Article";
import { Salizwa } from "./content/dynamic/intros/Saliswa";
import { SalizwaBG } from "./content/dynamic/intros/SalizwaBG";
import { Lulu } from "./content/dynamic/modelers/Lulu";
import { Nako } from "./content/dynamic/modelers/Nako";
import { Ano } from "./content/dynamic/modelers/Ano";
import { Sibongile } from "./content/dynamic/modelers/Sibongile";
import { Sihle } from "./content/dynamic/modelers/Sihle";
import { SihleCwa } from "./content/dynamic/modelers/Sihlecwa";
import { Siyamthanda } from "./content/dynamic/modelers/Siyamthanda";
import { Tandile }from "./content/dynamic/modelers//Tandile";
import { Thandiwe } from "././content/dynamic/modelers/Thandiwe";
import { Timna } from "./content/dynamic/modelers/Timna";
import { Yona } from "././content/dynamic/modelers/Yona"
import { Sample } from "./content/articles/Sample";
import { Formats } from "./content/articles/Formats"


import "./app.scss";
import { pages } from "./pages";

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
          height={970}
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
          
<PageCover className="page-cover">
</PageCover>
  </HTMLFlipBook >
      </div>
    
    );
  }
}



export default function App() {
  return <DemoBook />;
}
