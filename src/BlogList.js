import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
const BlogList = ({blogs, title}) => {

    //const blogs = props.blogs;
    //const title = props.title;
    //console.log(props,blogs);
    return ( 
        <div className="blog-list"> 
       <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
             <Link to={`/blog/${blog.id}`}>
             <h2>{blog.title} </h2>
                    <p><b>writen by : {blog.author}</b></p>
                     <p>Des: {`${blog.desc.substring(0,50)}...`}<a href="#">Read more</a></p> 
             </Link>
            
                   
                    
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;