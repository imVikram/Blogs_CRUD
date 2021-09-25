import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

const [blogs,setBlog] = useState([]);
const [IsPending, setIsPending]= useState(true);

useEffect(()=>{
console.log('hook, use effect ran');
fetch('http://localhost:8000/blogs')
.then(res=>{
  return res.json();
})
.then(data=>{
  console.log(data);
  setBlog(data);
  setIsPending(false);
})
},[]);
    return ( 
        <div className="Home">
          {IsPending && <div>Loading..</div>}
          {blogs && <BlogList blogs={blogs} title="All blogs!"/>}
        </div>
     );
}
 
export default Home;