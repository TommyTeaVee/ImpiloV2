// App.jsx
import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Article } from "./Article";
import articles from "./contents";
import { Editor } from "./content/dynamic/intros/Editor";
import {
  RunwayModel,
  PartsModel,
  EditorialModel,
  FitnessModel,
  AdModel,
} from "./content/fashionrunway/modellers/Models";
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
import InnovativeMindset from "./components/articles/brandpower/InnovativeMindset";
import BalenciagaIntro from "./components/articles/brandpower/balenciaga/Balenciaga";
import BalenciagaSpread from "./components/articles/brandpower/balenciaga/BalenciagaSpread";
import MomentumReturn from "./components/articles/economy/Momentum";
import { Sample } from "./content/articles/Sample";
import InfluencersAreNotModels from "./content/fashionrunway/InfluencersAreNotModels";
import AdHoc from "./components/articles/justice_guards/AdHoc";
import MadlangaCommission from "./components/articles/justice_guards/MadlangaCommision";
import CatMatlala from "./components/articles/justice_guards/CatMatlala";
import ProceedingsSoFar from "./components/articles/justice_guards/ProceedingsSoFar";
import Mkhwanazi from "./components/articles/justice_guards/Mkhwanazi";
import Penicillin from "./components/articles/brandpower/Penicilin";
import ImpiloCover from "./content/fashionrunway/modellers/ImpiloCover";
import AboutZintle from "./content/fashionrunway/modellers/ZintleCover";
import TimnaNzunzo from "./content/fashionrunway/modellers/Timna";
import SiyamthandaProfile from "./content/fashionrunway/modellers/SiyamthandaProfile";
import ZintleProfile from "./content/fashionrunway/modellers/ZintleProfile";
import ModelProfileRich, { ModelProfile } from "./components/articles/ModelProfile";
import BreakingNewsRich, { BreakingNews } from "./components/articles/BreakingNews";
import FeatureArticleRich, { FeatureArticle } from "./components/articles/FeatureArticle";
import MainArticle from "./components/articles/MainArticle";
import { CreativityArticle } from "./content/articles/CreativeArticle";
import { DigitalMediaArticle } from "./content/articles/DigitalMediaArticle";

import { ModellingArticle } from "./content/articles/ModelingArticle";
import { PerformanceArticle } from "./content/articles/PerformanceArticle";
import { FashionArticle } from "./content/articles/FashionArticle";
import { BreakingFeatureArticle } from "./content/articles/BreakingFeatureArticle";
import ModelAgency from "./content/articles/ModelAgency";
import VFXAdArticle from "./content/VFXArticle";
import LeratoEditorial, { LeratoEditorial2 } from "./content/fashionrunway/modellers/LeratoEditorial";
import { RapoleEditorial } from "./content/fashionrunway/modellers/RapoleEditorial";
import { GallerySix } from "./content/fashionrunway/gallery/GallerySix";
import { GalleryEight } from "./content/fashionrunway/gallery/GalleryEight";
import { GalleryTen } from "./content/fashionrunway/gallery/GalleryTen";
import { GalleryTwelve } from "./content/fashionrunway/gallery/Gallery12";
import { Gallery8 } from "./content/fashionrunway/gallery/Galleries";
import AlexGallery from "./content/fashionrunway/gallery/AlexGallery";
import AlexArticle2 from "./content/fashionrunway/gallery/AlexGallery2";
import LaNiyaProfile, { LaNiyaArticle2 } from "./content/fashionrunway/modellers/NiyaArticle";
import SageryProfile from "./content/fashionrunway/modellers/SageryEditorial";
import NiyaGallery from "./content/fashionrunway/gallery/NiyaGallery";
import MaloryGallery from "./content/fashionrunway/gallery/MalloryGaller";
import MalloryEditorial from "./content/fashionrunway/modellers/MalloryEditorial";
import MomoEditorial from "./content/fashionrunway/modellers/MomoEditorial";
import AlexEditorial from "./content/fashionrunway/modellers/AlexEditorial";
import KlarissaEditorial from "./content/fashionrunway/modellers/KlarisaEditorial";
import KgothatsoEditorial from "./content/fashionrunway/modellers/KgothatsoEditorial";
import TshiamoNkadimengLead from "./content/fashionrunway/modellers/Tshiamo";
import MasegoEditorial from "./content/fashionrunway/modellers/MasegoEditorial";
import KaylleEditorial from "./content/fashionrunway/modellers/KayleEditorial";
import AbenathiEditorial, { AbenathiLeadFeature } from "./content/fashionrunway/modellers/NathiEditorial";
import BrandonMazulaEditorial from "./content/fashionrunway/modellers/BrandonEditorial";

const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover hard" ref={ref} data-density="hard">
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
      showSwipe: true,
    };
  }

  componentDidMount() {
    if (!this.flipBook.current) return;
    const total = this.flipBook.current.getPageFlip().getPageCount();
    this.setState({ totalPage: total });
    this.hideSwipeTemporarily();
  }

  hideSwipeTemporarily = () => {
    this.setState({ showSwipe: false });
    setTimeout(() => {
      this.setState({ showSwipe: true });
    }, 3000); // 3 seconds
  };

  sleepSwipe = () => {
    this.setState({ showSwipe: false });
    setTimeout(() => {
      this.setState({ showSwipe: true });
    }, 30000); // 30 sec
  };

  nextPage = () => {
    if (!this.flipBook.current) return;
    this.flipBook.current.getPageFlip().flipNext();
    this.sleepSwipe();
  };

  prevPage = () => {
    if (!this.flipBook.current) return;
    this.flipBook.current.getPageFlip().flipPrev();
    this.sleepSwipe();
  };

  onPage = (e) => {
    this.setState({ page: e.data });
    this.hideSwipeTemporarily();
  };

  render() {
    const { page, totalPage, showSwipe } = this.state;

    return (
      <div className="app-container">
        {/* TOP GOLD PROGRESS BAR */}
        <div
          className="progress-bar"
          onClick={(e) => {
            if (!this.flipBook.current || !totalPage) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const ratio = clickX / rect.width;
            const targetPage = Math.floor(ratio * totalPage);
            this.flipBook.current.getPageFlip().flip(targetPage);
          }}
        >
          <div
            className="progress-fill"
            style={{
              width: totalPage
                ? `${((page + 1) / totalPage) * 100}%`
                : "0%",
            }}
          />
        </div>

        {/* PAGE COUNTER PILL */}
        <div className="page-counter">
          <span>📖 Page {page + 1} of {totalPage || "…"}</span>
        </div>
  {/* NAV BUTTONS (pointer-events none on wrapper so swipe still works) */}
        <div className="flip-controls uk-flex uk-flex-center uk-margin-top button-wrapper">
          <button className="bubble-button" onClick={this.prevPage}>
            ⬅ Prev
          </button>
          <button className="bubble-button" onClick={this.nextPage}>
            Next ➡
          </button>
        </div>
        {/* FLIP BOOK */}
        <HTMLFlipBook
          width={400}
          height={800}
          minWidth={315}
          minHeight={400}
          maxWidth={900}
          maxHeight={1000}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}   // ✅ allow vertical scroll on mobile
          flipOnTouch={false}           // ✅ keep swipe-to-flip
          flipOnClick={true}
          onFlip={this.onPage}
          className="demo-book"
          ref={this.flipBook}
           
        >
          {/* Example cover if you want */}
          <PageCover>Impilo Magazine</PageCover> 

          {/* Preloaded static image pages 
          {pages.slice(0, 10).map((p, i) => (
            <Page key={i} number={i}>
              <img src={p} alt={`Page ${i + 1}`} className="page-image" />
            </Page>
          ))}*/}

          {/* Dynamic pages */}
           <Page number={22}><Editor /></Page>
          <Page number={23}><Tommy /></Page>
           <Page number={24}><AbenathiEditorial /></Page>
           
             <Page number={24}><BrandonMazulaEditorial/></Page>
          <Page number={24}><LaNiyaProfile/></Page>
          <Page number={24}><KgothatsoEditorial/></Page>
            <Page number={24}><NiyaGallery/></Page>
          <Page number={24}><SageryProfile/></Page>
           <Page number={24}><KlarissaEditorial/></Page>
           <Page number={24}><TshiamoNkadimengLead/></Page>
           <Page number={24}><MasegoEditorial/></Page>
           <Page number={24}><KaylleEditorial/></Page>
           <Page number={24}><MalloryEditorial /></Page>
           <Page number={24}><MomoEditorial /></Page>
            <Page number={24}><AlexEditorial /></Page>
          <Page number={24}><CreativityArticle /></Page>
           <Page number={8.0}><VFXAdArticle/></Page>
          <Page number={8.0}><ModelAgency /></Page>
          <Page number={8.0}><ImpiloCover /></Page>
          <Page number={8.0}><AboutZintle /></Page>
           <Page number={8.0}><AlexGallery /></Page>
            <Page number={8.0}><AlexArticle2 /></Page>
            <Page number={8.0}><TimnaNzunzo /></Page>
             <Page number={8.0}><Gallery8/></Page>
             <Page number={8.0}><LeratoEditorial /></Page>
              <Page number={8.0}><LeratoEditorial2 /></Page>
             <Page number={8.0}><RapoleEditorial /></Page>
              <Page number={8.0}><GalleryTen /></Page>
              <Page number={8.0}><ZintleProfile /></Page>
               <Page number={8.0}><GalleryTwelve/></Page>
              <Page number={8.0}><ModelProfileRich /></Page>
                <Page number={8.0}><FeatureArticleRich /></Page>
              <Page number={8.0}><BreakingFeatureArticle/></Page>
              <Page number={8.0}><MainArticle /></Page>
              <Page number={8.0}><CreativityArticle /></Page>
              <Page number={8.0}><DigitalMediaArticle/></Page>
              <Page number={8.0}><FashionArticle /></Page>
       <Page number={8.0}><MainArticle /></Page>
              <Page number={8.0}><ModellingArticle/></Page>
              <Page number={8.0}><PerformanceArticle /></Page>
          <Page number={8.2}><Mkhwanazi/></Page>
          <Page number={8.3}><CatMatlala/></Page>
          <Page number={8.4}><AdHoc/></Page>
          <Page number={8.5}><MadlangaCommission/></Page>
          <Page number={8.6}><InnovativeMindset /></Page>
          <Page number={8.7}><Penicillin/></Page>
           <Page number={11}><InfluencersAreNotModels /></Page>
          <Page number={8.1}><MomentumReturn /></Page>
          <Page number={8}><BrandPower /></Page>
          <Page number={9}><BalenciagaIntro /></Page>
          <Page number={9.1}><BalenciagaSpread /></Page>
          <Page number={10}><InnovativeMindset /></Page>
          <Page number={11}><RunwayModel /></Page>
          <Page number={12}><Page1Intros /></Page>
          <Page number={13}><Page2LawContext /></Page>
          <Page number={14}><Page3MakateCase /></Page>
          <Page number={15}><Page4Lessons /></Page>
          <Page number={16}><Page5Conclusion /></Page>
          <Page number={17}><PartsModel /></Page>
          <Page number={18}><FitnessModel /></Page>
          <Page number={19}><ModelFeature /></Page>
          <Page number={20}><EditorialModel /></Page>
          <Page number={21}><AdModel /></Page>
          <Page number={25}><Article /></Page>

          {/* Remaining static pages 
          {pages.slice(17).map((p, i) => (
            <Page key={i + 21} number={i + 21}>
              <img src={p} alt={`Page ${i + 18}`} className="page-image" />
            </Page>
          ))}*/}
       

      
 </HTMLFlipBook>
        {/* SWIPE HINT (mobile) */}
       
      </div>
    );
  }
}

export default function App() {
  return <DemoBook />;
}
