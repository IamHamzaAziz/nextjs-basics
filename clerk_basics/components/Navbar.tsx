import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4">
            <Link href={'/'}>NextClerkDemo</Link>

            <SignedIn>
                <div className='flex items-center space-x-4'>
                    <Link href={'/about'} className='ml-5'>About</Link>
                    <UserButton />
                </div>
            </SignedIn>

            <SignedOut>
                <span>
                    {/* <SignInButton /> */}

                    {/* Below SignInButton gives signin component in modal and not redirecting to other pages */}
                    {/* <SignInButton mode="modal" /> */}

                    {/* For this below SignInButton to redirect to out custom made pages sign-in and sign-up following have been included in the .env file
                NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
                NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up */}
                    <SignInButton />

                    <Link href="/sign-in" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5">Sign In</Link>
                </span>
            </SignedOut>
        </nav>
    )
}

export default Navbar