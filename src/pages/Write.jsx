import { useUser } from "@clerk/clerk-react"
import { useState } from "react";
import {supabase} from '..//configs/supabaseClient'
import { useNavigate } from "react-router-dom";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Audio } from "react-loader-spinner";
const Write = () => {
    const navigate = useNavigate()
    const [title , setTitle] = useState()
    const [loading , setLoading] = useState(false)
    const [content , setContent] = useState()
    const [error , setError] = useState('')
    const [display , setDisplay] = useState('')

    const user = useUser();
  

    if(!user.isSignedIn){
        navigate('/signin')
         
        
    } 
    const handleClick = async () => {
        
        setLoading(true)
        console.log(convertedContent)
        const converted = `...${convertedContent}'`
        console.log(converted)
        
        const firstName = user.user.firstName
        const lastName = user.user.lastName
        const combined = (firstName && lastName) ? firstName   : firstName
        if (!title || !content) {
            setLoading(false)
            setError('Please fill in all the fields correctly.')
            return
          }
        const { data, error } = await supabase
        .from('posts')
        .insert([
        { content: convertedContent, email: user.user.emailAddresses[0].emailAddress, title: title , user_name: combined , user_profile: user.user.profileImageUrl},
        ]).select('*')
        

        if(data){
            console.log(data)
            setDisplay('✅ You have successfully bloged it.')
            setLoading(false)
            setTimeout(() => {
                navigate('/')

            } , 2000)

        }else {
            setLoading(false)
            setDisplay('❌ Something went wrong')
            console.log('The error: ' , error)
        }

        
        
       
    }
            const [editorState, setEditorState] = useState(() =>
            EditorState.createEmpty()
        );

        const [convertedContent, setConvertedContent] = useState(null);
        const handleEditorChange = (state) => {
            setEditorState(state);
            convertContentToHTML();
        };
        const convertContentToHTML = () => {
            let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
            setConvertedContent(currentContentAsHTML);
        };
        const createMarkup = (html) => {
            return {
            __html: DOMPurify.sanitize(html)
            };
        };
        console.log(createMarkup(convertedContent).__html)
    return (
        <div>

        <div className="flex flex-col justify-center items-center my-10">
            <h1 className="text-xl font-bold">Hey 👋 {user.user && user.user.firstName} Just Write SomeThing.</h1>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-10 mx-3 my-1 self-center"></div>


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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            </div>


        <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
            Write The Blog Here
        </label>
            <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
        />
        <textarea
            id="message"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={1}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Say i am human..."
            defaultValue={""}
        />
         <button type="submit" className= "px-12 py-4 font-bold  my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Blog It.</button>

         <div className="flex flex-col justify-center items-center">
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
         {(!loading && display) && <div>{display}</div> }
        
    
    </div>
       
    )
}
export default Write 