import {useRef} from "react";

const NavDropdown = ({list}) => {
    const refs = useRef({});

    const handleMouseEnter = (index) => {
        const element = refs.current[index]

        if (element) {
            const textWidth = element.innerHTML.length
            const containerWidth = element.parentElement.offsetWidth;
            const x = (containerWidth - textWidth) / 2 - 50
            
            element.style.transform = `translateX(${x}px)`;
        }
    }

    const handleMouseLeave = (index) => {
        const element = refs.current[index];
        if (element) {
            element.style.transform = 'translateX(0)';
        }
    };

    const setRef = (index) => (el) => {
        refs.current[index] = el
    }
    return (
        <ul className={`z-2 rounded-b-lg  bg-p_lightgrey bt-none border-p_red transition-all duration-300 ease-in-out  group-hover:max-h-96 max-h-0 absolute top-16 w-[20rem] overflow-hidden`}>
            {list.map((item, index) => (

                <li
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    key={index}
                    className={`tracking-[2px]  m-1 hover:bg-p_black hover:text-p_lightgrey rounded-tl-lg rounded-br-lg`}>
                    <p
                        ref={setRef(index)}
                        className={`transition-all p-2 duration-700 ease-in-out  hover:translate-xa-[${item.length}]`}>
                        {item}
                    </p>
                </li>))}
        </ul>)
}

export default NavDropdown