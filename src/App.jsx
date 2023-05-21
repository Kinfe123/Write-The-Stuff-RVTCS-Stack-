import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindcssLogo from './assets/tailwindcss.svg'
import supabaseLogo from './assets/supabase.svg'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react'
import {AiFillGithub} from 'react-icons/ai'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Write from './pages/Write';
import SignInPage from './pages/SignInPage';

function App() {
  
  const user = useUser();
  

  return (
    <div>

      
      <BrowserRouter>
      <Navbar/>
            

     
            
      <Routes>

    
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/write" element={<Write />} />
        <Route path='/signin' element={<SignInPage />}/>
        <Route path='/*' element={<NotFound />}/>

   
        {/* <Route path="/:id" element={<Update />} /> */}
        <Route path='/about' element={<About />} />
 
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App


 
   
      // {user.isSignedIn && <p>Hellow {user.user && user.user.fullName} , 👩‍💻 Welcome back</p>}
      // {!user.isSignedIn && <div>
      //    <p className='my-2'>Signed In?</p>
      //       <SignedOut>
      //            <SignInButton mode='modal' />
      //        </SignedOut>
      
      // </div>}
      // <div className="card">
      //  <SignedIn>
      //   <div className='absolute top-0 right-0 my-5 mx-5'>
          
      //   <UserButton afterSignOutUrl={window.location.href} />
      //   </div>
      // </SignedIn>
      // {/*
      // Optional way to do it
      
      // <SignedOut>
      //   <SignInButton mode='modal' />
      // </SignedOut> */
       
      // </div>
     
      // <p className="read-the-docs my-4">
      //   Click on the logos to learn more
      // </p>

      // <footer className='absolute bottom-0 right-0'>
      //   <p>Made with 😡<a href="https://bit.ly/KINFISHTECH"  rel="noreferrer" target='_blank' className='decoration-slice mx-1 my-1'>KIINFEMICHAEL TARIKU[KINFISH]</a></p>
      // </footer>
     
  
