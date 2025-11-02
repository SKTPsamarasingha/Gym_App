import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Socials = ({}) => {
  return (
    <div className=" w-fit h-[20rem]">
      <h2 className={`text-p_red text-[17px] font-semibold tracking-wide p-3`}>
        Follow Us
      </h2>

      <div className={`flex `}>
        <div className={`group flex flex-col items-center cursor-pointer`}>
          <p
            className={`group-hover:translate-y-[0rem] group-hover:opacity-100 group-hover:scale-100 translate-y-[1rem] scale-0 opacity-0 transition-all duration-500 ease-in-out text-white text-[12px] tracking-widest font-semibold`}
          >
            FaceBook
          </p>
          <FaFacebook
            className={`group-hover:text-blue-700 group-hover:translate-y-[0.5rem] transition-all duration-500 ease-in-out  text-[2rem] text-p_grey `}
          ></FaFacebook>
        </div>

        <div className={`group flex flex-col items-center cursor-pointer`}>
          <p
            className={`group-hover:translate-y-[0rem] group-hover:opacity-100 group-hover:scale-100 translate-y-[1rem] scale-0 opacity-0 transition-all duration-500 ease-in-out text-white text-[12px] tracking-widest font-semibold`}
          >
            Twitter
          </p>
          <FaTwitter
            className={`group-hover:text-blue-400 group-hover:translate-y-[0.5rem] transition-all duration-500 ease-in-out text-[2rem] text-p_grey `}
          ></FaTwitter>
        </div>

        <div className={`group flex flex-col items-center cursor-pointer`}>
          <p
            className={`group-hover:translate-y-[0rem] group-hover:opacity-100 group-hover:scale-100 translate-y-[1rem] scale-0 opacity-0 transition-all duration-500 ease-in-out text-white text-[12px] tracking-widest font-semibold`}
          >
            Instagram
          </p>
          <FaInstagram
            className={` group-hover:text-black group-hover:bg-gradient-to-br from-pink via-blue to-yellow group-hover:translate-y-[0.5rem]  transition-all duration-500 ease-in-out text-p_grey  text-[2rem] rounded`}
          ></FaInstagram>
        </div>

        <div className={`group flex flex-col items-center cursor-pointer`}>
          <p
            className={`group-hover:translate-y-[0rem] group-hover:opacity-100 group-hover:scale-100 translate-y-[1rem] scale-0 opacity-0 transition-all duration-500 ease-in-out text-white text-[12px] tracking-widest font-semibold`}
          >
            YouTube
          </p>
          <FaYoutube
            className={`group-hover:text-red-700 group-hover:translate-y-[0.5rem] transition-all duration-500 ease-in-out text-[2rem] text-p_grey `}
          ></FaYoutube>
        </div>
      </div>
    </div>
  );
};

export default Socials;
