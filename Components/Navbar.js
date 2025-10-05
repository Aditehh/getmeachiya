"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'


const Navbar = () => {
  const { data: session } = useSession();

  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>
  //       Signout
  //     </button>

  //   </>
  // }
  return (
    <div className='flex gap-90'>
      I am the Navbar

      <div>

        {session && <Link href={"/dashboard"}> Welcome, {session.user.email} </Link>}
        {session && <button onClick={() => signOut()}>logout</button>}

        {!session &&
          <Link href={"/login"}>
            LOGIN
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
