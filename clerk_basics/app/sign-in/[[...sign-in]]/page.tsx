import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Custom Sign In Page</h1>
            <div className='flex justify-center items-center my-5'>
                <SignIn />
            </div>
        </div>
    )
}

export default SignInPage