"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { signOut } from 'next-auth/react'

const Navbar = () => {
  return (
    <div className='flex gap-90'>
      I am the Navbar

      <div>

      <Link href={"/login"}>
        LOGIN
      </Link>

      </div>
    </div>
  )
}

export default Navbar
