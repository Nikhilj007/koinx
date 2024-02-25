import Image from 'next/image';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar: React.FC = () => {
    return <div className='flex flex-row justify-between shadow-lg items-center w-full p-3 px-8'>
        <div>
            <Image src={'/logo.svg'} width={96} height={24} alt="" />
        </div>
        <div className='sm:hidden'>
            <GiHamburgerMenu size={24} />
        </div>
        <div className=' gap-8 hidden sm:flex font-semibold items-center'>
            <div>Crypto Taxes</div>
            <div>Free Tools</div>
            <div>Resource Center</div>
            <div className='p-2 rounded-lg text-white bg-gradient-to-br from-blue-500 to-blue-900'>Get Started</div>
        </div>
    </div>
}
export default Navbar;