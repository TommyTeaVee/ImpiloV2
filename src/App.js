import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Article } from "./Article";
import articles from "./contents";
import { Editor } from "./content/dynamic/intros/Editor";
import { RunwayModel, PartsModel, EditorialModel, FitnessModel, AdModel } from "./content/fashionrunway/modellers/Models";
import { ModelFeature } from "./content/dynamic/modelers/ModelFeature";
import { Tommy } from "./content/dynamic/modelers/Tommy";
import { PodcastShowcase } from "./content/articles/PodcastShowcase";
import "./app.scss";
import { pages } from "./pages";
import Page1Intros from "./components/articles/iplaw/Page1Intros";
import Page2LawContext from "./components/articles/iplaw/Page2LawContext";
import Page3MakateCase from "./components/articles/iplaw/Page3MakateCase";
import Page4Lessons from "./components/articles/iplaw/Page4Lessons";
import Page5Conclusion from "./components/articles/iplaw/Page5Conclusion";
import BrandPower from "./components/articles/brandpower/BrandPower";
import DigitalInnovation from "./components/articles/brandpower/DigitalInnovation";
import InnovativeMindset from "./content/articles/InnovativeMindset";
import BalenciagaIntro from "./components/articles/brandpower/balenciaga/Balenciaga";
import BalenciagaSpread from "./components/articles/brandpower/balenciaga/BalenciagaSpread";
import MomentumReturn from "./components/economy/Momentum";

const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover" ref={ref} data-density="hard">
    <div className="page-content">
      <h2>{props.children}</h2>
    </div>
  </div>
));

const Page = React.forwardRef(({ children, number }, ref) => (
  <div className="page" ref={ref}>
    <div className="page-content">
      <div className="page-text">{children}</div>
      <div className="page-footer">{number + 1}</div>
    </div>
  </div>
));

class DemoBook extends React.Component {
  constructor(props) {
    super(props);
    this.flipBook = React.createRef();
    this.state = {
      page: 0,
      totalPage: 0,
       canFlip: true, 
    };
  }
  onPage = (e) => {
    this.setState({ page: e.data });
     this.hideSwipeTemporarily();

  };


  componentDidMount() {
    const total = this.flipBook.current.getPageFlip().getPageCount();
    this.setState({ totalPage: total });
    this.hideSwipeTemporarily(); 
  }

 sleepSwipe = () => {
  this.setState({ showSwipe: false });
  setTimeout(() => {
    this.setState({ showSwipe: true });
  }, 300000); // 30 sec
}
hideSwipeTemporarily = () => {
  this.setState({ showSwipe: false });
  setTimeout(() => {
    this.setState({ showSwipe: true });
  }, 3000); // 3 seconds
}
nextPage = () => {
  this.flipBook.current.getPageFlip().flipNext();
  this.sleepSwipe(); // hide swipe indicator
}

prevPage = () => {
  this.flipBook.current.getPageFlip().flipPrev();
  this.sleepSwipe(); // hide swipe indicator
}
  onPage = (e) => this.setState({ page: e.data });

  render() {
    const { page, totalPage } = this.state;
    const progress = ((page + 1) / totalPage) * 100;

    <div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${((page + 1) / totalPage) * 100}%` }}
  />
</div>
    return (
  
        <div className="app-container">
        {/* 🔹 GOLD PROGRESS BAR */}
        <div
  className="progress-bar"
  onClick={(e) => {
    if (!this.flipBook.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clickX / rect.width;
    const targetPage = Math.floor(ratio * this.state.totalPage);
    this.flipBook.current.getPageFlip().flip(targetPage); 
  }}
>
          <div
            className="progress-fill"
            style={{
              width: this.state.totalPage
                ? `${((this.state.page + 1) / this.state.totalPage) * 100}%`
                : "0%",
            }}
          />
        </div>
        <div className="page-counter">
        <span>📖 Page {page + 1} of {totalPage}</span>
      </div>

{/* Swipe indicator for mobile */}
{this.state.showSwipe && (
  <div className="swipe-indicator">
    <div className="swipe-track">
      <div className="swipe-thumb">
        <span className="hand">🤚</span>
        <span className="arrow">➡️</span>
      </div>
    </div>
    <p className="swipe-text">Swipe to flip</p>
  </div>
)}
        <HTMLFlipBook
          width={550}
          height={1000}
          minWidth={315}
          minHeight={400}
          maxWidth={800}
          maxHeight={10000}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          flipOnTouch={false}
          flipOnClick={false}
          onFlip={this.onPage}
          className="demo-book"
          ref={this.flipBook}
        >
          {/* Cover pages 
          <PageCover>Impilo Magazine</PageCover>*/}

          {/* Preloaded pages */}
          {pages.slice(0, 10).map((p, i) => (
            <Page key={i} number={i}>
              <img src={p} alt={`Page ${i + 1}`} className="page-image" />
            </Page>
          ))}


          {/* <Page number={10} ><WelcomeArticle /></Page> 
          
          <Page number={10}><IPArticleMagazine /></Page>*/}
          <Page number={8.1}><MomentumReturn /></Page>
          <Page number={8}><BrandPower /></Page>
          <Page number={9}><BalenciagaIntro/></Page>
           <Page number={9.1}><BalenciagaSpread /></Page>
           <Page number={10}><InnovativeMindset /></Page>
          <Page number={11}><RunwayModel /></Page>
          <Page number={12}><Page1Intros /></Page>
          <Page number={13}><Page2LawContext /></Page>
          <Page number={14}><Page3MakateCase/></Page>
          <Page number={15}><Page4Lessons/></Page>
          <Page number={16}><Page5Conclusion/></Page>
          <Page number={17}><PartsModel /></Page>
          <Page number={18}><FitnessModel /></Page>
          <Page number={19}><ModelFeature /></Page>
          <Page number={20}><EditorialModel /></Page>
          <Page number={21}><AdModel /></Page>
          <Page number={22}><Editor /></Page>
          <Page number={23}><Tommy /></Page>
          <Page number={24}><PodcastShowcase /></Page>
          <Page number={25}><Article /></Page>

          {/* Remaining static pages */}
          {pages.slice(17).map((p, i) => (
            <Page key={i + 21} number={i + 21}>
              <img src={p} alt={`Page ${i + 18}`} className="page-image" />
            </Page>
          ))}
        </HTMLFlipBook>
          
        {/* Navigation buttons */}
        <div className="flip-controls uk-flex uk-flex-center uk-margin-top button-wrapper">
  <button className="bubble-button" onClick={this.prevPage}>⬅ Prev</button>
  <button className="bubble-button" onClick={this.nextPage}>Next ➡</button>
</div>
      </div>
    );
  }
}

export default function App() {
  return <DemoBook />;
}
