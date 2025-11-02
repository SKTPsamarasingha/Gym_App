import { CheckIcon } from "@heroicons/react/20/solid/index.js";
import { useEffect, useState } from "react";

const Plans = ({ plansData, scroll }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (scroll > 2400) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  });

  return (
    <div className="flex flex-col items-center w-full min-h-[44rem] bg-p_black">
      <h1
        className={`${showText ? "scale-100 " : "scale-0"} transition-transform duration-500 ease-in-out text-white pt-2 pb-8 text-[clamp(1rem,5vw,2.5rem)] font-semibold tracking-wide`}
      >
        Our Memberships Plans
      </h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {plansData.map((plan, index) => (
          //   card
          <div
            key={plan.id}
            className={`bg-m_darkgrey2 rounded-[1rem] mobile:w-[18rem] mobile:h-[26rem] w-80 h-[28rem] border-t-5 ${plan.borderColor} 
              hover:-rotate-z-2 hover:scale-105 transform transition-all duration-500 
              relative ${plan.popular ? "ring-2 ring-green-500" : ""}`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
            )}

            {/* Price Section */}
            <div className="relative">
              <p className="pl-4 mb-2 pt-6 text-[18px] text-p_red font-semibold tracking-wide">
                {plan.name}
              </p>
              <h1 className="pl-4 text-p_lightgrey text-[2.5rem] font-mono flex items-center">
                {plan.currency}
                {plan.price}
                <span className="text-[18px] text-grey-100 ml-4 tracking-wide">
                  / {plan.period}
                </span>
              </h1>
              <div className="absolute left-3 bg-white w-[13rem] h-[1px] mt-3"></div>
            </div>

            {/* Features List */}
            <ul className="w-full h-fit mt-8 flex flex-col gap-4">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="ml-7 h-fit w-fit flex gap-2 text-white"
                >
                  <CheckIcon className="w-4 h-4 text-white" />
                  <h6 className="text-[14px]">{feature}</h6>
                </li>
              ))}
            </ul>

            {/* Select Button */}
            <button
              className={`ml-5 w-[12rem] h-[2.5rem] bg-p_red mt-8 tracking-wide font-semibold text-m_darkgrey2 rounded-[10rem] 
              hover:bg-red-600 transition-colors duration-300 ${plan.popular ? "bg-green-500 hover:bg-green-600" : ""}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center mt-8 text-white">
        <p className="text-lg mb-4">All plans include:</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-green-500" />
            Free fitness assessment
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-green-500" />
            Access to mobile app
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-green-500" />
            No contract required
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-green-500" />
            30-day money back guarantee
          </span>
        </div>
      </div>
    </div>
  );
};

export default Plans;
