import Link from 'next/link'
import React from 'react'

const page = () => {
    return (

        <div>
            <Link href={"/"}>
                HOME
            </Link>


            <div className='flex flex-col gap-10 justify-center items-center pt-20'>
                <button className=' hover:bg-purple-300 hover:text-cyan-950 bg-black w-140 height-14 text-white'>continue with github</button>
                <button className='hover:bg-purple-300 hover:text-cyan-950 bg-black w-140 height-14  text-white'>continue with apple</button>
                <button className='hover:bg-purple-300 hover:text-cyan-950 bg-black w-140 height-14  text-white'>continue with google</button>
                <button className='hover:bg-purple-300 hover:text-cyan-950 bg-black w-140 height-14 text-white'>continue with microsoft</button>

            </div>


        </div>
    )
}

export default page
