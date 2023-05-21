import DOMPurify from "dompurify";

const BlogCard = (props) =>  {
    

    const {id , createdAt  , content , username , email , title, user_profile , short} = props;
    console.log(user_profile)
    const createMarkup = (html) => {
        return {
          __html: DOMPurify.sanitize(html)
        };
      };
    // console.log('Te content is: ' , content)
    const text_ = createMarkup(content)
    console.log(text_)
    return (

        <div className="my-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src='https://as1.ftcdn.net/v2/jpg/03/18/60/62/1000_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg' alt="" />
        </a>
        <div className="p-5 flex flex-col justify-start items-start text-left">
            <div className="flex justify-center items-center gap-2 my-1">
                <img src={user_profile} className="rounded-full w-8 h-8"/>
                <p className="text-gray-300 mx-2"> @{username}</p>
            </div>
            <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {title}
            </h5>
            </a>
            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <div
                className="preview"
                dangerouslySetInnerHTML={text_ }
            ></div> */}
           <p className="text-white my-3">{short}</p>
           {/* {text_.html} */}
            {/* {text_.slice(0 , 170)}... */}
            {/* </p> */}
            <a
            href={`/blogs/${id}`}
            className="inline-flex justify-center self-center  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Read more
            <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
                />
            </svg>
            </a>
        </div>
        </div>


        </div>
    )
}
export default BlogCard