import RedLink from "../common/RedLink.jsx";

const Video = ({video,scroll}) => {
    return <div className={`pb-[1.5rem] flex relative w-full mobile:h-[15rem] laptop:h-[40rem] bg-p_black`}>
        <video className={`w-full h-full object-cover`} autoPlay
               muted
               loop
               playsInline>
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>

        <div
            className={`text-white flex flex-col mobile:gap-2 laptop:gap-5 items-center absolute self-center  w-full h-fit`}>
            <h2 className={`mobile:text-[2rem] laptop:text-[3rem] tracking-wide font-semibold`}>RP Youtube</h2>
            <h3 className={`mobile:text-[1rem] laptop:text-[2.5rem]`}>Learn from Dr. Mike Israetel</h3>
            <RedLink to={'/'} text={'Watch Now'}></RedLink>

        </div>
    </div>
}

export default Video