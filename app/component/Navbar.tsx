import Link from 'next/link'
import React  from 'react'


const Navbar = () => {
    return (
        <div className='h-[13vh] bg-[#181a1d]'>
    <div className='flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto gap-2'>
        {/* Logo */}
        <div className='text-[20px] md:text-[28px] lg:xl:text-[36px] font-semibold text-white '>
            Data<span className='text-gray-700 font-semibold'>FETCHING</span>
        </div>
        {/* Nav Links */}
        <ul className='lg:flex flex flex-row text-white  items-center space-x-2 md:space-x-6 xl:space-x-10'>
            <li className='navlink '>
                <Link href="/">Home</Link>
            </li>
            <li className='navlink'>
                <Link href="client">ClientSide</Link>
            </li>

            <li className='navlink'>
                <Link href="server">ServerSide</Link>
            </li>

          
        </ul>
       


    </div>
    </div>
    )
}

export default Navbar