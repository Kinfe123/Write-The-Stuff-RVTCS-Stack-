import { useClerk } from "@clerk/clerk-react"

const SignInPage = () => {
    const clerk = useClerk()
    return (
        <div className="flex flex-col justify-center items-center">

            <h1 className="text-2xl font-bold my-4 ">Please Click Sign In to Continue</h1>
            <button className="px-5 py-2 bg-blue-700 text-white rounded-md" onClick={() => clerk.openSignIn()}>Sign In</button>

        </div>

    )
}
export default SignInPage