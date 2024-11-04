import React from 'react'
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';

const About = async () => {
    const user = await currentUser()

    // if user is not signed in, redirect to sign-in page
    if (!user) {
        redirect('/sign-in')
    }

    return (
        <div>About</div>
    )
}

export default About