import {
    Bars3Icon,
    XMarkIcon,
    ShoppingBagIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';
import logo from '/src/assets/images/RP-Logo.svg'
import Menu from "./Menu.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import NavDropdown from "./NavDropdown.jsx";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const searchBarClickHandle = () => {
        setShowSearch(!showSearch);
    }
    const menuBtnClickHandle = () => {
        setMenuOpen(!menuOpen);
    }

    const storeArray = ['Template', 'Books', 'Apparel', 'versa grips', 'Gift cards']
    const contentArray = ['articles', 'videos', 'video guid', 'podcast', 'free guids']
    const aboutUsArray = ['our story', 'our team', 'our pros', 'our athletes', 'rp transformations', 'RP research grants']


    return (<>
        <nav
            className={`sticky top-0 z-50 uppercase bg-p_black w-full max tracking-[2px] `}>
            <SearchBar
                searchBarClickHandle={searchBarClickHandle}
                showSearch={showSearch}
            ></SearchBar>

            <div className='flex items-center justify-between  h-full'>

                <div className={`flex justify-evenly w-full`}>
                    {/*logo*/}
                    <div className='m-6 '>
                        <img className='h-6 w-auto'
                             src={logo} alt={"apex logo"}/>
                    </div>

                    <ul className={`text-[12px] hidden laptop:flex items-center  m-3 h-[100%] w-fit`}>
                        <li>
                            <Link
                                className=' transition duration-300 ease-in-out text-p_lightgrey p-1 border-b-2 border-p_black hover:border-p_red hover:bg-m_darkgrey2  rounded p-3'
                                to={"/"}>Coaching</Link>
                        </li>

                        <li>
                            <Link
                                className='transition duration-300 ease-in-out text-p_lightgrey p-1 border-b-2 border-p_black hover:border-p_red hover:bg-m_darkgrey2  rounded p-3'
                                to={"/"}>Diet Coaching</Link>
                        </li>

                        <li className='group'>
                            <Link
                                className='flex gap-1 items-1 transition duration-300 ease-in-out text-p_lightgrey p-1 border-b-2 border-p_black hover:border-p_red hover:bg-m_darkgrey2  rounded p-3'
                                to={"/"}>Store <ChevronDownIcon className={`size-4`}></ChevronDownIcon></Link>

                            <NavDropdown
                                list={storeArray}/>
                        </li>

                        <li className='group'>
                            <Link
                                className='flex gap-1 items-1 transition duration-300 ease-in-out text-p_lightgrey p-1 border-b-2 border-p_black hover:border-p_red hover:bg-m_darkgrey2  rounded p-3'
                                to={"/"}>Free Content <ChevronDownIcon className={`size-4`}></ChevronDownIcon></Link>

                            <NavDropdown
                                list={contentArray}/>
                        </li>


                        <li className='group'>
                            <Link
                                className='flex gap-1 items-1 transition duration-300 ease-in-out text-p_lightgrey p-1 border-b-2 border-p_black hover:border-p_red hover:bg-m_darkgrey2  rounded p-3'
                                to={"/"}>About us <ChevronDownIcon className={`size-4`}></ChevronDownIcon></Link>

                            <NavDropdown
                                list={aboutUsArray}/>
                        </li>


                        <li className='flex gap-1 '>
                            <Link
                                className='transition duration-300 ease-in-out text-p_lightgrey p-1 border-b-2 border-p_black hover:border-p_red hover:bg-m_darkgrey2  rounded p-3'
                                to={"/"}>Sign In</Link>
                        </li>
                    </ul>

                    {/*search bar and cart container*/}
                    <div className=' flex items-center justify-center gap-5'>

                        <MagnifyingGlassIcon onClick={searchBarClickHandle}
                                             className={`size-6 text-p_lightgrey `}/>
                        {/*cart link*/}
                        <Link className='text-p_lightgrey' to={"/home"}> <ShoppingBagIcon
                            className='size-6 text-p_lightgrey'/>
                        </Link>

                    </div>
                </div>


                {/*aside menu toggle btn*/}
                <button onClick={menuBtnClickHandle}
                        className="block laptop:hidden desktop:hidden m-3 relative w-8 h-8">

                    <Bars3Icon className={`absolute inset-0  - size-8 text-p_red transition-all duration-300 ease-in-out 
                            ${menuOpen ? `opacity-0 rotate-90 scale-75` : `opacity-100 rotate-0 scale-100`}`}/>
                    <XMarkIcon className={`absolute inset-0  size-8 text-p_red transition-all duration-300 ease-in-out 
                            ${menuOpen ? `opacity-100 rotate-0 scale-100` : `opacity-0 rotate-90 scale-75`}`}/>
                </button>
                {/*menu component*/}

                <Menu
                    menuOpen={menuOpen}
                />
            </div>
        </nav>
    </>)
}

export default NavBar