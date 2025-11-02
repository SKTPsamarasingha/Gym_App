const ResultsCard = ({ cardData }) => {
  return (
    <div
      className={`group mobile:w-[13rem] mobile:h-[20rem] laptop:w-[16rem]  laptop:h-[25rem] `}
    >
      <h1 className={`p-2 text-[1rem]  tracking-wide font-semibold`}>
        {cardData.name}
      </h1>
      <div
        className={`rounded-xl  group-hover:rotate-y-180 transform-3d relative w-full h-full transition-all duration-1000 ease-in-out  `}
      >
        {/*/front*/}
        <div
          className={`rounded-xl backface-hidden backface-hidden  absolute w-full h-full`}
        >
          <img
            className={`rounded-xl  w-full h-full object-cover`}
            src={cardData.before}
            alt={"before rp"}
          />
        </div>
        {/* back*/}
        <div
          className={`rounded-xl rotate-y-180 backface-hidden absolute w-full h-full`}
        >
          <img
            className={`rounded-xl w-full h-full object-cover`}
            src={cardData.after}
            alt={"before rp"}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
