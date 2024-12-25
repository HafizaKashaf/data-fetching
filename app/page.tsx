import React from 'react';
import Link from "next/link";

const page = () => {
  return (
    <div>
     
       <div className="h-screen flex flex-col justify-center items-center  px-[20px]">
       <div className='flex flex-col items-center justify-center pb-16'>
        <h1 className='font-bold text-[20px] md:text-[24px] lg:xl:text-[36px]'>Data Fetching</h1>
        <p className='text-gray-600 text-[16px] md:text-[20px] lg:xl:text-[26px] mt-[8px] text-center px-5 lg:xl:px-10'>Data fetching is the process of retrieving data from a server or API to use in an application. It can happen on the client side (in the browser after page load) or server side (before sending the response to the client).</p>

      </div>
      <div className="hover:scale-[1.05] transition bg-transparent border-2 border-white p-[20px] rounded-lg shadow-lg hover:shadow-xl">
        <h1 className="font-bold text-[20px] md:text-[24px] lg:xl:text-[36px] text-center capitalize">Explore <span className='text-gray-700'>Data Fetching</span>  Methods</h1>
        <p className="text-gray-00 text-center  text-[16px] md:text-[20px] lg:xl:text-[26px] mt-[8px]"><strong>Select</strong> the best method for your needs</p>
        <div className="flex flex-col items-center sm:justify-end sm:flex-row justify-center gap-[10px] mt-[20px]">
        <button className='w-full p-[5px] rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-black relative hover:bg-gradient-to-r hover:from-black hover:to-gray-900 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 transition-all duration-300 ease-out'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease'></span><Link href={"/client"}>CLIENT SIDE</Link></button>
        <button className='w-full p-[5px] rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-black relative hover:bg-gradient-to-r hover:from-black hover:to-gray-900 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 transition-all duration-300 ease-out'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease'></span><Link href={"/server"}>SERVER SIDE</Link></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
