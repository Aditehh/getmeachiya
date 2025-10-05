"use client"
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {



    const { data: session, status } = useSession();
    const router = useRouter();


    useEffect(() => {
        if (session) {
            if (status === "authenticated") {
                router.push('/dashboard')
            }
        }
    }, [status, router])


    // if (session) {
    //     const router = useRouter();
    //     router.push('/dashboard')
    // }


    return (
        <>

            {
                status === "loading" && <p>Loading...</p>
            }

            {
                status === "unauthenticated" && <p>Please sign up</p>
            }




            {!session &&

                <div>
                    <Link href={"/"}>
                        HOME
                    </Link>


                    <div className='flex flex-col gap-10 justify-center items-center pt-20'>
                        <button
                            onClick={
                                () => { signIn("github") }
                            }
                            className=' hover:bg-purple-300 hover:text-cyan-950 bg-black w-140 height-14 text-white'>continue with github</button>
                        <button className='hover:bg-purple-300 hover:text-cyan-950 bg-black w-140 height-14  text-white'>continue with apple</button>
                        <button className='hover:bg-purple-300 hover:text-cyan-950 bg-black w-140 height-14  text-white'>continue with google</button>
                        <button className='hover:bg-purple-300 hover:text-cyan-950 bg-black w-140 height-14 text-white'>continue with microsoft</button>

                    </div>


                </div>
            }


        </>
    )
}

export default page
