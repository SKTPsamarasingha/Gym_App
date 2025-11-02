import FooterLinks from "./FooterLinks.jsx";
import Socials from "./Socials.jsx";

const Footer = ({ data }) => {
  return (
    <div
      className={`mobile:flex-col mobile:pl-15 laptop:flex-row laptop:justify-evenly flex w-full h-fit  bg-p_black`}
    >
      {data.map((data, index) => (
        <FooterLinks key={index} data={data}></FooterLinks>
      ))}
      <Socials></Socials>
    </div>
  );
};

export default Footer;
