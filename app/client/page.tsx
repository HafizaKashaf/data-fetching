"use client"

import Navbar from "@/app/components/Navbar";
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { IoIosStar } from "react-icons/io";

type Data = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}
const Page = () => {
    const [data, setData] = useState<Data[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        const fetchData = async () => {
            const url = await fetch("https://fakestoreapi.com/products")
            const parsedData: Data[] = await url.json()
            setData(parsedData)
        }
        fetchData()
    }, [])

    return (
        <div>
           <Navbar />
            {loading ? (
                <div className="h-screen flex flex-col items-center justify-center px-[20px] sm:px-[0px]">
                    <div className="w-[80px] h-[80px]   border-[10px] border-black mt-[15px] animate-pulse rounded-[50%]"></div>
                    <h1 className="text-[25px] font-semibold mt-[15px] ">Loading...</h1>
                </div>
            ) : (
                <div className="py-[50px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
                    <h1 className="mb-[40px]  text-gray-700 text-center text-[20px] sm:text-[28px] md:text-[30px] border-b font-bold">CLIENT SIDE DATA FETCHING</h1>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((products, index) => (
                            <div key={index} className="w-full bg-gradient-to-b from-white from-[50%] to-slate-300 shadow-xl shadow-gray-500 p-[20px] rounded-[8px] hover:shadow-xl hover:scale-[1.05] transition-all">
                                <div className="h-[180px]">
                                    <Image src={products.image} alt={products.title} width={100} height={100} className="size-[180px] mx-auto"></Image>
                                </div>
                                <p className="mt-[50px] mb-[8px] text-[gray] capitalize">{products.category}</p>
                                <p className="font-bold text-[20px] mb-[8px]">{products.title}</p>
                                <p className="line-clamp-2 text-[gray] mb-[8px]">{products.description}</p>
                                <p className="text-[20px] font-semibold mb-[8px]">${products.price}</p>
                                <div className="text-yellow-600 justify-between text-[18px] flex items-center mb-[10px]"><p className="flex flex-row items-center"><IoIosStar className="text-[23px] mr-[5px]" /><span className="mr-[5px]">{products.rating.rate}</span></p>({products.rating.count} reviews)</div>
                                <div className="flex items-center justify-center">
                                <button className=' w-full p-[5px] font-semibold rounded-md px-4 py-1 text-[15px] md:text-[20px] lg:xl:text-[22px] md:px-8 md:py-2.5 overflow-hidden group bg-black relative hover:bg-gradient-to-r hover:from-black hover:to-gray-900 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 transition-all duration-300 ease-out mt-[10px]'>
                                <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease'></span>Add To Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Page