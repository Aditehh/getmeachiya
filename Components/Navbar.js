import React from 'react'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { signOut } from 'next-auth/react'

const Navbar = () => {
  return (
    <div>
      I am the Navbar
    </div>
  )
}

export default Navbar
