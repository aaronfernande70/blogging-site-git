import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../../redux/actions/blogs.action';
import Blog from '../../molecules/Blog/Blog';

export default function BlogList() {
    let {allBlogs,allBlogs_loaded} = useSelector(state=>state.allBlogs)
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllBlogs())
    },[allBlogs_loaded])
    console.log(allBlogs)
  return (
    <div className='p-5 border'>
        {
            allBlogs?.map(blog=>{
                return(<Blog blog={blog} key={blog.id} />)
            })
        }
    </div>
  )
}
