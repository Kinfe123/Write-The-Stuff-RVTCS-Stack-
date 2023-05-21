import { useNavigate, useParams, useRoutes } from "react-router-dom"
import { supabase } from "../configs/supabaseClient"
import { useEffect, useState } from "react"
import { Audio } from "react-loader-spinner"
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from "dayjs"
import DOMPurify from "dompurify"

dayjs.extend(relativeTime)
const Blogs = () => {
   const navigate = useNavigate()
   const [loading,setLoading]= useState()

   const [result , setResult] = useState({})
   const router = useParams()
 
   
  

   useEffect(() => {
    const fetchSingle = async () => {
        setLoading(true)
        const { data, error } = await supabase
        .from('posts')
        .select()
        .eq('id' , router.id)
        .single()
        if(data) {
            console.log(data)
            setLoading(false)
            setResult(data)
        }if(error) {
            setLoading(false)
            console.log('The error; ' , error)
            console.log(error)
            setResult(null)
        }

        



   }
    fetchSingle()

    } , [router.id])
    const createMarkup = (html) => {
        return {
          __html: DOMPurify.sanitize(html)
        };
      };
     const text_ =  createMarkup(result.content)
    if(!result){
        return <div className="flex flex-col justify-center items-center self-center h-96">
            <h1 className=" text-2xl font-bold">❌ The Blog is not Found</h1>
            <button className="px-12 py-4 font-bold  my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => navigate('/')}>Return Back</button>
        </div>
    }
    
    return (
        <div className="my-6">
         <div className="flex flex-col justify-center items-center my-10">
         <Audio
            height="50"
            width="50"
            color="#1D4ED8"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={loading}
/>
         </div>
         {result && (  <div className="flex flex-col justify-start items-start mx-3 gap-1">
            <h1 className="text-6xl font-bold ">{result.title}</h1>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-20 mx-1 my-2 self-start"></div>

            <p className="my-5">Blogged By - @{result.user_name}</p>
            <p>Posted - {dayjs(result.created_at).fromNow()}</p>

            <div>
            <div
                className="text-left "
                dangerouslySetInnerHTML={createMarkup( result.content)}
            ></div>
               
            </div>
         </div>)}
       
        </div>
    )
}
export default Blogs