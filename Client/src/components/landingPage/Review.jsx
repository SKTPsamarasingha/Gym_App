import { StarIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const Review = ({ review, currentIndex, showCards, index }) => {
  const rating = review.rating;
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!showCards) return;
    const timer = setTimeout(() => {
      setIsVisible(!!showCards);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [showCards, index]);

  return (
    <div
      style={{
        transform: `translateX(${-currentIndex * 106}%)`,
      }}
      className={` hover:shadow-md shadow-red-500/50
      transition-all duration-500 ease-out
        mobile:transform-none
        mobile:min-w-[17rem] mobile:h-[20rem] 
        laptop:min-w-[20rem] laptop:h-[14rem] 
        grid items-stretch p-3 rounded-[1rem]
        border-2 border-m_darkgrey1
        ${isVisible ? "translate-y-0 opacity-100 " : "translate-y-130 opacity-0"}
         hover:scale-105
      `}
    >
      {/* rating */}
      <div className="flex gap-2 justify-self-end">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-p_red" />
        ))}
      </div>

      <p className="justify-self-center laptop:w-[20rem] mobile:w-[15rem] tracking-wide text-center text-p_lightgrey text-[14px]">
        {review.text}
      </p>

      <h3 className="text-p_grey flex gap-2">{review.username}</h3>
    </div>
  );
};

export default Review;
