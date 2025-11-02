import { Link } from "react-router-dom";

const FooterLinks = ({ data }) => {
  const { title, links } = data[0];

  return (
    <div className={`w-fit h-fit font-semibold tracking-wide `}>
      <h2 className={`text-p_red text-[17px]  p-3`}>{title}</h2>
      <ul
        className={`text-p_grey text-[13px] pl-3 pt-3 flex flex-col gap-3 cursor-pointer`}
      >
        {links.map((link, i) => (
          <li
            key={i}
            className={`hover:text-white hover:scale-105 text-shadow-lg transition-all duration-500 ease`}
          >
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
