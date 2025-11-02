import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Review from "./Review.jsx";
import { useEffect, useState } from "react";

const Reviews = ({ reviews, scroll }) => {
  const mid = window.innerWidth < 1024 ? Math.floor(reviews.length / 2) : 0;
  const [currentIndex, setCurrentIndex] = useState(mid);
  const [showText, setShowText] = useState(false);
  const [showCards, setShowCards] = useState(false);
  useEffect(() => {
    if (scroll > 1400) {
      setShowText(true);
      setShowCards(true);
    } else {
      setShowText(false);
      setShowCards(false);
    }
  });

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative flex flex-col items-center w-full h-fit bg-p_black transtion-all duration-300 ease-out">
      <h1
        className={`${showText ? "scale-100 " : "scale-0"} transition-transform duration-500 ease-in-out  text-white pt-2 pb-2  text-[clamp(1rem,5vw,2.5rem)] text-[2.5rem]font-semibold tracking-wide`}
      >
        RP App User Reviews{" "}
      </h1>

      {/* Carousel Container */}
      <div
        className={`${scroll} overflow-hidden relative w-fit h-fit pt-3 pb-3 flex flex-col items-center justify-center`}
      >
        <div
          className={`laptop:hidden w-fit h-fit bg-red flex gap-5 items-center justify-center`}
        >
          {reviews.map((_, index) => (
            <div
              key={index}
              className={` ${currentIndex === index ? "bg-p_red scale-125" : "bg-white"}
                         w-[5px] h-[2px]`}
            ></div>
          ))}
        </div>

        {/* Reviews Wrapper */}
        <div
          className={`mobile:w-[18rem] laptop:w-[75rem] h-fit pt-3 pb-3 flex laptop:justify-center laptop:flex-wrap gap-4 flex-row pl-2 items-center relative`}
        >
          {reviews.map((review, index) => (
            <Review
              class={`bg-p_red`}
              key={index}
              review={review}
              currentIndex={currentIndex}
              showCards={showCards}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className={`w-fit h-fit laptop:hidden `}>
        <button
          onClick={() => handlePrevious("left")}
          className={`text-white `}
        >
          <ChevronLeftIcon
            className={`w-6 h-6 text-white rounded-[50%]`}
          ></ChevronLeftIcon>
        </button>

        <button onClick={() => handleNext("right")} className={`text-white`}>
          <ChevronRightIcon
            className={`w-6 h-6 text-white rounded-[50%]`}
          ></ChevronRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
