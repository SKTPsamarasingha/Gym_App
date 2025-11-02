import small from "/src/assets/images/hero/front_s.webp";
import large from "/src/assets/images/hero/front_l.webp";
import { useEffect, useState } from "react";
import RedLink from "../common/RedLink.jsx";

const Hero = ({ scroll }) => {
  const width = window.innerWidth;
  const image = width >= 768 ? large : small;

  const [visibleImage, setVisibleImage] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);

  useEffect(() => {
    setVisibleImage(true);
    setTimeout(() => {
      setVisibleContent(true);
    }, 450);
  }, []);

  return (
    <div className=" relative  flex w-full h-[30rem]">
      <img
        className={`h-full w-full object-cover transition-all duration-900 ease-in-out  ${visibleImage ? `-translate-y-[0rem]` : "-translate-y-[100rem]"}`}
        src={image}
        alt={"frontPose"}
      />

      {/*text and link div*/}
      <div
        className={`${visibleContent ? `-translate-x-[0rem] opacity-100` : "-translate-x-[10rem] opacity-0"} transition-all duration-1000 ease-in-out  p-4 absolute bottom-20 left-1 laptop:left-50 z-1`}
      >
        <div
          className={` uppercase text-m_lightgrey  mobile:text-[2.9rem] tablet:text-[4rem] `}
        >
          <h1 className={`tracking-[0.4rem]`}>Ready to </h1>
          <h1>
            get{" "}
            <span className={`tracking-[0.4rem] font-medium text-p_red `}>
              ripped
            </span>
          </h1>
        </div>
        <p
          className={`text-m_lightgrey text-[2rem] mb-2 mobile:text-[0.9rem] tablet:text-[1.5rem] mt-2`}
        >
          Start building your dream physique today
        </p>

        {/*    link*/}
        <div
          className={`flex mobile:flex-col tablet:flex-row gap-5 text-white`}
        >
          <RedLink to={"/"} text={"Hypertrophy App"}></RedLink>
          <RedLink to={"/"} text={"Diet Coach App"}></RedLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
