import Hero from "../../components/landingPage/Hero.jsx";
import Video from "../../components/landingPage/Video.jsx";
import SocialProof from "../../components/landingPage/SocialProof.jsx";
import {
  about,
  cardData,
  plansData,
  quickLinks,
  reviews,
  support,
} from "../../service/data.js";
import video from "/src/assets/video/mikeVideo.mp4";
import Reviews from "../../components/landingPage/Reviews.jsx";
import ScrollMain from "../../components/common/ScrollMain.jsx";
import { useState } from "react";
import Plans from "../../components/landingPage/Plans.jsx";
import Footer from "../../components/main/footer/Footer.jsx";

const LandingPage = () => {
  const [scroll, setScroll] = useState(0);
  const components = [
    <Hero key="hero" scroll={scroll} />,
    <SocialProof key="social" cardData={cardData} scroll={scroll} />,

    <Video key="video" video={video} scroll={scroll} />,
    <Reviews key="reviews" reviews={reviews} scroll={scroll} />,
    <Plans plansData={plansData} scroll={scroll}></Plans>,
    <Footer data={[quickLinks, about, support]}></Footer>,
  ];

  return <ScrollMain setScroll={setScroll} components={components} />;
};

export default LandingPage;
