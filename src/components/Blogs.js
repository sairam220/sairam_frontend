import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import Blog from './Blog'

const Blogs = () => {
    const [blogs,setBlogs]=useState()

    useEffect(()=>{
        const sendRequest=async()=>{
            const res=await axios.get("http://localhost:5000/api/blog").catch(err=>console.log(err))
            const data=await res.data
            return data
        }

        sendRequest().then(data=>setBlogs(data.blogs))

    },[])

    console.log(blogs)

  return (
    <div>
        
        {blogs&& blogs.map((blog,index)=>(
           
            <Blog id={blog._id} isUser={localStorage.getItem('userId')===blog.user} key={index} title={blog.title} description={blog.description} image={blog.image} user={blog.user}/>
        ))}
    </div>
  )
}

export default Blogs