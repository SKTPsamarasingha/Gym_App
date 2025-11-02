import { useEffect, useRef } from "react";

const ScrollMain = ({ components, setScroll }) => {
  const mainRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = mainRef.current.scrollTop;
      setScroll(scrollPoint);
    };
    const element = mainRef.current;

    if (element) element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      ref={mainRef}
      className="p-0 m-0 h-screen snap-y snap-mandatory overflow-y-scroll [&::-webkit-scrollbar]:hidden"
    >
      {components.map((component, index) => (
        <section key={index} className="bg_red snap-start h-fit">
          {component}
        </section>
      ))}
    </main>
  );
};

export default ScrollMain;
