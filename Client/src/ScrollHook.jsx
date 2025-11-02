import {useEffect, useState} from "react";
const ScrollHook = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setScrollX(window.scrollX);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return {scrollY, scrollX}
}

export default ScrollHook;