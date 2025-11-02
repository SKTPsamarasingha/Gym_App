import { Link } from "react-router-dom";

const RedLink = ({ to, text }) => {
  return (
    <div
      className={`group hover:cursor-pointer relative flex items-center justify-center h-[3.0rem] w-[13rem] border-3 border-p_red rounded-[0.8rem]`}
    >
      <span
        className={`group-hover:w-full transition-all duration-700 ease-in-out absolute left-0 w-[0rem] h-full bg-p_red  rounded-[0.5rem]`}
      ></span>
      <Link className={`z-20 text-white`} to={to}>
        {text}
      </Link>
    </div>
  );
};

export default RedLink;
