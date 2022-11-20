import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { getAllBlogs } from '../../../redux/actions/blogs.action';
import Blog from '../../molecules/Blog/Blog';

export default function BlogList() {
    // let contextData=useContext(AppContext)
    let {allBlogs,allBlogs_loaded} = useSelector(state=>state.allBlogs)
   let {id}=useParams()
   console.log(id)
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllBlogs())
    },[allBlogs_loaded])
    let userId=sessionStorage.getItem("user-id")
let blogs
//  console.log(contextData.myBlogs)

// if(!id){
//     blogs=allBlogs
// }
    if(id==="myBlogs"){
        // console.log(contextData.myBlogs)
        console.log((userId))
     blogs=( allBlogs?.filter(blog=>{
           return(blog.blogger_id===parseInt(userId)) 
        }) )
        // console.log(setBlogs(a))
        
        // allBlogs?.pop(1)
    //     console.log(blogs)
    // console.log(allBlogs[0].blogger_id===parseInt(userId))
    }
    if(id==="allBlogs") {
        blogs=allBlogs
    }
    // console.log(blogs)
    console.log(allBlogs)
  return (
    <div className='p-5 border'>
        {
          blogs?.map(blog=>{
                return(<Blog blog={blog} key={blog.id} />)
            })
        }
    </div>
  )
}
