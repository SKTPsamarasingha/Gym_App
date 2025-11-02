import {Link} from "react-router-dom";
import {
    HomeIcon, ShoppingBagIcon, UsersIcon, CakeIcon, FilmIcon, InformationCircleIcon, UserIcon
} from '@heroicons/react/24/outline';

const Menu = ({menuOpen}) => {
    return (<>
        {/* Backdrop */}
        <div
            className={`bg-p_black h-screen w-[100%] absolute top-16  z-1 transition-all duration-500 ease-in-out ${
                menuOpen ? 'opacity-70 visible' : 'opacity-0 invisible'
            }`}
            aria-hidden="true"
        />


        <div className={`overflow-hidden z-2 flex flex-col items-start  laptop:hidden desktop:hidden bg-p_black mt-15 absolute top-0.5 right-0 h-fit 
     ${menuOpen ? 'w-full' : 'w-0'} 
     transition-all duration-500 ease-in-out`}>

            <ul className={`whitespace-nowrap p-10  flex flex-col gap-8 ${menuOpen ? 'w-64 opacity-1000' : 'w-0 opacity-0'} nowrap`}>
                <li className='flex gap-1 hover:text-p_red'>
                    <HomeIcon className='text-m_red size-5'></HomeIcon>
                    <Link className='text-p_lightgrey' to={"/"}>Home</Link>
                </li>

                <li className='flex gap-1'>
                    <UsersIcon className='text-m_red size-5'></UsersIcon>
                    <Link className='text-p_lightgrey' to={"/"}>Coaching</Link>
                </li>

                <li className='flex gap-1'>
                    <CakeIcon className='text-m_red size-5'></CakeIcon>
                    <Link className='text-p_lightgrey' to={"/"}>Diet Coaching</Link>
                </li>

                <li className='flex gap-1 '>
                    <ShoppingBagIcon className='text-m_red size-5'></ShoppingBagIcon>
                    <Link className='text-p_lightgrey' to={"/"}>Store</Link>
                </li>

                <li className='flex gap-1'>
                    <FilmIcon className='text-m_red size-5'></FilmIcon>
                    <Link className='text-p_lightgrey' to={"/"}>Free Content</Link>
                </li>

                <li className='flex gap-1'>
                    <UserIcon className='text-m_red size-5'></UserIcon>
                    <Link className='text-p_lightgrey' to={"/"}>Sign In</Link>
                </li>

                <li className='flex gap-1'>
                    <InformationCircleIcon className='text-m_red size-5'></InformationCircleIcon>
                    <Link className='text-p_lightgrey' to={"/"}>About us</Link>
                </li>
            </ul>
        </div>
    </>)
}


export default Menu;