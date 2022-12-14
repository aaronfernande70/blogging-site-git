import React, { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button';
import useBase64 from '../../../utils/useBase64';
import Img from '../../atoms/Img/Img';
import ImageConverter from '../../ImageConverter';
import ImageContext from '../../../context/ImageContext';
export default function AddBlog() {


  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [featuredImage, setFeaturedImage] = useState()
  const [category, setCategory] = useState([])
  const contextData = useContext(ImageContext)

  // const [newBlog,setNewBlog]=useState(
  //   {
  //     title:'',
  //     content:'',
  //     image:contextData.blogImage
  //   }
  // )




  useEffect(() => {
    console.log(featuredImage)
  }, [featuredImage])

  const saveData = async () => {
    let res = await fetch('http://localhost:3000/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        { title: title, content: value, blog_img: contextData.blogImage,category:category }
      )
    })
    let data = await res.json();
    console.log(data)
    alert(data)

  }

  const formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'header', 'blockquote', 'code-block',
    'indent', 'list',
    'direction', 'align',
    'link', 'image', 'video', 'formula',
  ]

  // const imgModules ={
  //   toolbar: [
  //     ['image'],
  //   ]
  // } 

  let modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }
  // let [file, setFile] = useState([])

  //   let baseURL = useBase64(file)


  // function handleFileInputChange(e) {
  //   console.log(e.target.value)
  //   setFile( [e.target.value] )
  //   console.log(file)
  //  console.log( baseURL )



  // };

  return (
    <div className='m-10'>
      <h2>Post Title</h2>
      {/* <input type="text" value={title} onChange={(e)=>{
          setTitle(e.target.value)
      }}/> */}
      <Input type='text' name='blogTitle' onChangeHandler={(e) => {
        setTitle(e.target.value)
      }} />

      
      <select  onChange={(e)=>{
        console.log(e.target.value)
        setCategory([...category,e.target.value])
        console.log(category);
        
      }} name="categoy">
        <option value="food">food</option>
        <option value="technology">technology</option>
        <option value="nature">nature</option>
      </select>
<div>
  {
   category.length===0?"":category.map((item)=>{
      return (<span className='m-1 p-1 bg-black rounded text-white'>{item}</span>)
    })
  }
</div>
      <h2>featured Image</h2>
      {/* <Input type="file" name="file" onInput={(e)=>{handleFileInputChange(e)}}>Upload Image</Input> */}
      {/* <Img src={baseURL}/> */}
      <ImageConverter />
      <Img src={contextData.blogImage} />
      <h2>Post Content</h2>
      <ReactQuill theme="snow" value={value} modules={modules} onChange={setValue} formats={formats} />

      <hr></hr>
      <h1>How it will look on the webpage</h1>
      <div dangerouslySetInnerHTML={{ __html: value }} className="postDiv">
      </div>
      <hr></hr>

      <Button onClickHandler={() => {
        saveData()
      }}>Add Blog</Button>
      {/* <Post/> */}
    </div>
  );
}