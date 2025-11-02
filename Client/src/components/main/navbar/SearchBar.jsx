import {MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useState} from "react";

const SearchBar = ({showSearch, searchBarClickHandle}) => {
    return (<>

        <div
            className={`flex items-center justify-center bg-p_black z-10 overflow-hidden  transition-all duration-100 ease absolute w-[100%] ${showSearch ? 'h-[4rem]' : ' h-0'}`}>

            <div className={`p-1.5 flex justify-between border-white border-1 w-[60%] rounded`}>
                <input className={`border-none focus:outline-none p-2  text-p_lightgrey w-[90%]`}/>
                <MagnifyingGlassIcon
                    className={`transtion-all duration-300 hover:text-p_lightgrey mt-2 size-6 text-m_darkgrey1 `}/>
            </div>

            <button onClick={searchBarClickHandle}
                    className='transtion-all duration-300 ease ml-3 mt-1 size-8 text-m_darkgrey1 hover:text-p_red'>
                <XMarkIcon></XMarkIcon>
            </button>
        </div>

        <div
            className={`absolute top-15 w-full h-[55rem]  bg-black z-1 transition-all duration-500 ease-in-out ${
                showSearch ? 'opacity-70 visible' : 'opacity-0 invisible'
            }`} aria-hidden="true"
        ></div>

    </>)
}

export default SearchBar

