import { useEffect, useState } from 'react'
import {supabase} from '../configs/supabaseClient'
import BlogCard from '../components/BlogCard'

const Home = () => {

    const [result , setResult] = useState('')
    const [error , setError] = useState()



    const fetchData = async () => {

        let { data: posts, error } = await supabase
            .from('posts').select('*')
        

        if(posts) {
            setResult(posts);
            setError(null)
        }if(error){
            setResult(null)
            setError(error)
        }
    }


    useEffect(() => {

        fetchData()

    } , [])

    console.log(result)
     


    return (
        <div>
            <div className='flex flex-col justify-start items-center'>

                <h1 className='self-start mx-3 my-3 font-bold text-2xl'>Recent Blogs</h1>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-20 mx-3 self-start"></div>

            </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
            {result && result.map((each) => {
                return (
                    <BlogCard id = {each.id} createdAt={each.created_at} email={each.email} content = {each.content}  username={each.user_name} title = {each.title} user_profile={each.user_profile } short={each.short_desc} />
                )
            })}

        </div>

            
       
        </div>
    )
}
export default Home