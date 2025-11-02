import ResultsCard from "./ResultsCard.jsx";
import { useEffect, useState } from "react";
import ScrollHook from "../../ScrollHook.jsx";

const SocialProof = ({ cardData, scroll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleResult, setVisibleResult] = useState(false);
  const [visibleCard, setVisibleCard] = useState(false);
  const [resultDark, setResultDark] = useState(false);
  const scrollY = ScrollHook().scrollY;

  useEffect(() => {
    setVisibleResult(true);

    setTimeout(() => {
      setIsVisible(true);
    }, 650);

    if (scroll > 450) setVisibleCard(true);
    else setVisibleCard(false);
    if (scroll > 400) setResultDark(true);
    else setResultDark(false);
  });

  return (
    <div
      className={`${resultDark ? `pb-[10rem] bg-p_black text-p_lightgrey` : "bg-lightgrey text-p_black"} ${visibleResult ? "translate-y-[0rem]" : "translate-y-[25rem]"} transition-all duration-900 ease-in-out  p-4 flex flex-col items-center w-full pb-[5rem] h-fit`}
    >
      <div
        className={`${isVisible ? "scale-100 " : "scale-0"} transition-transform duration-500 ease-in-out text-center`}
      >
        <h1 className={` p-2 text-[2.5rem] font-semibold tracking-wide`}>
          RP: Real Results
        </h1>

        <h2 className={`p-2 text-m_lightGrey font-light tracking-wide`}>
          Tens of thousands of people have used the RP Diet App to reach their
          individual goals
        </h2>
      </div>

      {/*card container*/}
      <div
        className={`${visibleCard ? "scale-[1] opacity-100" : "scale-[0] opacity-0"} mt-8 transition-transform duration-700 ease-in-out  w-fit h-fit flex gap-25 items-center justify-center desktop:w-full laptop:w-[40rem] tablet:w-[30rem] tablet:flex-wrap tablet:flex-row mobile:flex-col`}
      >
        {cardData?.map((item, index) => (
          <ResultsCard
            visibleCard={visibleCard}
            key={index}
            cardData={item}
          ></ResultsCard>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;

// laptop:justify-evenly tablet:flex-wrap mobile:flex-col  mobile:items-center
