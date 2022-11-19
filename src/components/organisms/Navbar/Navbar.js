import React, { useContext } from 'react'
import StyledButton from '../../atoms/Button/StyledButton'
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import Button from '../../atoms/Button';

export default function Navbar() {
    let contextData= useContext(AuthContext)
    let navigate = useNavigate()
    console.log(contextData.loggedIn)

    const onClickHandler=()=>{
        contextData.setLoggedIn(false)
        alert("logged out")
    }
    const showAllBlogs=()=>{
      
    }
    const showMyBlogs=()=>{

    }
    const addBlog=()=>{
      navigate("/addBlog")
    }
    return (
      <div className='bg-slate-300 px-10 flex min-w-screen justify-between py-2'>
        <div className=''>
          <Link to="allBlogs">
            <Button bg="inherit" text='black' onClickHandler={showAllBlogs}>All Blogs</Button>
          </Link>
          <Link to='myBlogs'>
            <Button bg="inherit" text='black' disabled={!contextData.loggedIn} onClickHandler={showMyBlogs}>My Blogs</Button>
          </Link>
          <Link to='addBlog'>
            <Button bg="inherit" text='black' disabled={!contextData.loggedIn} onClickHandler={addBlog}>Add Blog</Button>
          </Link>
          
        </div>
        <div>
          {
            contextData.loggedIn?<Button onClickHandler={()=>{onClickHandler()}}>Logout</Button>: <Link to="/auth">
            <Button bg="#404040" className='text-white'>Login or Signup</Button>
            </Link>
          }
        </div>
      </div>
  
  )
}
