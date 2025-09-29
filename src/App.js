import React from "react";
import HTMLFlipBook from "react-pageflip";
import ReactPlayer from "react-player";
import { Article } from "./Article";
import  articles from  "./contents";
import {Editor} from "./content/dynamic/intros/Editor"

import {Formats} from "./content/articles/Formats"
import { Salizwa} from "./content/dynamic/intros/Saliswa";
import { SalizwaBG } from "./content/dynamic/intros/SalizwaBG";
import { ModelFeature } from "./content/dynamic/modelers/ModelFeature";
import { Lulu } from "./content/dynamic/modelers/Lulu";
import { Tommy } from "./content/dynamic/modelers/Tommy";
import {Sibongile} from "./content/dynamic/modelers/Sibongile"
import "./app.scss";
import { pages } from "./pages";
import { WelcomeArticle } from "./content/dynamic/intros/WelcomeArticle";


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
    
      <div className="app-container">
        <HTMLFlipBook
          width={550}
          height={970}
          minWidth={315}
          max-width={'800vh'}
          minHeight={'100vh'}
          maxHeight={'150vh'}
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
            
            
            
         {/*  {pages.map((page, index) => (
            <Page key={index} className="page" number={index}>
              <img src={page} alt="" className="page-image" />
        
            </Page>
          ))} */}
     <div className="page">
    <Formats></Formats>
  </div>  
  <div className="page"><Sample></Sample></div>
  <div className="page">
    <WelcomeArticle/>
  </div>   
   <div className="page">
    <ModelFeature></ModelFeature>
  </div>
  <div className="page">
    <Editor></Editor>
  </div>
  <div className="page">
    <Tommy></Tommy>
  </div> 
<div className="page">
  <PodcastShowcase/>
</div>

<div className="page">
    <Article></Article>
</div>
<div className="page">
{articles.map((articles, index) => (
            <Page key={index} className="page" number={index}>
              <img src={articles} alt="" className="page-image" />
        
            </Page>
          ))}
</div>

  </HTMLFlipBook >
      </div>

    );
  }
}



export default function App() {
  return <DemoBook />;
}
