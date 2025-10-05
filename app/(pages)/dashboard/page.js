"use client"
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();


    useEffect(() => {

        if (status === "unauthenticated") {
            alert("signinfist")
            router.push('/')

        }

    }, [status, router])


    return (
        <div>

            {
                status === "authenticated" && <p>
                    welcome , {session.user.email}
                </p>
            }


        </div>
    )
}

export default dashboard
