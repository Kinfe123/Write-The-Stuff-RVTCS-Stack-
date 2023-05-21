import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom";

const Write = () => {
    const navigate = useNavigate()

    const user = useUser();
    if(!user.isSignedIn){
        navigate('/signin')
        
    } 
    return (
        <div>

        <div className="flex flex-col justify-center items-center my-10">
            <h1 className="text-xl font-bold">Just Write SomeThing.</h1>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 w-20 mx-3 my-1 self-center"></div>


        </div>


            <div className="mb-6">
            <label
                htmlFor="large-input"
                className="mx-2 mb-2 text-lg font-medium text-gray-900 flex flex-col justify-center items-start"
            >
                Title
            </label>
            <input
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            </div>


        <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
            Write The Blog Here
        </label>
        <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            defaultValue={""}
        />
         <button type="submit" className= "px-12 py-4 font-bold  my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


        
    
    </div>
       
    )
}
export default Write 