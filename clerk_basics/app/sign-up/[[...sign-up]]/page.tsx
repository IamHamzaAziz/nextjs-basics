import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Custom Sign Up Page</h1>
            <div className='flex justify-center items-center my-5'>
                <SignUp />
            </div>
        </div>
    )
}

export default SignUpPage