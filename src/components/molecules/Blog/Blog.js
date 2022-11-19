import React from 'react'
import Img from '../../atoms/Img/Img'

export default function Blog({blog}) {
  return (
    <div className=' border my-4 border-black flex justify-between'>
        <div className='w-3/4 min-h-40 m-3'>
        <div>{blog.title}</div>
        <div>{blog.content}</div>
        <div>{blog.likes}</div>
        <div>{blog.date_created}</div>
        
        <div>
          {
            blog.category.map( cat => <span>{cat}</span> )
          }
        </div>
        </div>
        <div className='m-3'>
          <Img src={blog.blog_img} alt={blog.title}  width='200px'/>
        </div>
      
    </div>
  )
}
