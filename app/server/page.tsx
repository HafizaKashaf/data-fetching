import Navbar from "@/app/component/Navbar";

type Data = {
    id: number,
    name: string,
    type: string,
    available: boolean
}

const Page = async () => {
    const url = await fetch("https://simple-books-api.glitch.me/books/")
    const data: Data[] = await url.json()
    return (
        <div>
        <Navbar />
            <div className="py-[50px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
                <h1 className="mb-[40px] text-gray-700 text-center text-[20px] sm:text-[28px] md:text-[30px] border-b font-bold ">SERVER SIDE DATA FETCHING</h1>
                <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((todo, index) => (
                        <div key={index} className="w-full bg-white border-2 bg- shadow-lg p-[20px] rounded-[8px] hover:shadow-xl hover:scale-[1.05] transition flex flex-col items-center justify-center">
                            <p className="text-[22px] font-bold text-gray-800 mb-[10px]">{todo.name}</p>
                            <p className="text-gray-500 mb-[8px]"><strong>ID:</strong> {todo.id}</p>
                            <p className="text-gray-500 mb-[8px]"><strong>Type:</strong> {todo.type}</p>
                           <p className="text-gray-700 mb-[8px]">{todo.available === true ? "Available" : "unavailabe"}</p>
                           <button className=' p-[5px] rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-black relative hover:bg-gradient-to-r hover:from-black hover:to-gray-900 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 transition-all duration-300 ease-out mt-[10px]'>
                           <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease'></span>Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page