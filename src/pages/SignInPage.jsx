import { useClerk } from "@clerk/clerk-react"

const SignInPage = () => {
    const clerk = useClerk()
    return (
        <div className="flex flex-col justify-center items-center">
            <button className="px-5 py-4 bg-blue-700 text-white rounded-md">Sign In</button>

        </div>

    )
}
export default SignInPage