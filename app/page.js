"use client"
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();
  return (
    <>

      {session &&
        <div>
          you are logged in
        </div>
      }

      {!session &&
        <div>
          you aint logged in
        </div>
      }











    </>
  );
}
