import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [author, setAuthor] = useState('Ram');
  const [isPending,setPending] = useState(false);
  const history = useHistory();

  const handleSubmit=(e)=> {
    e.preventDefault();
    const blog = {title,desc,author};
    
    console.log('aa gya yahan');
    setPending(true);
    fetch('http://localhost:8000/blogs',{
        method : 'POST',
        headers : {"Content-type":"application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log('Added new blog');
        setPending(false);
        history.push('/')
        //window.location = "/"
    })
  }

    return (
      <div className="create">
          <h2>Add Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog titile:</label>
            <input 
              type="text"
              placeholder="Enter Title here"
              required
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
            <label>Blog Desc:</label>
            <textarea 
              type="textArea"
              placeholder="Enter Desc here"
              required
              value={desc}
              onChange={(e)=> setDesc(e.target.value)}
            />
            <label>Blog Author:</label>
            <select
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}>
              
              <option value="Ram">Ram</option>
              <option value="Shyam">Shyam</option>
            </select>
            {!isPending &&<button>Add Blog</button>}
            {isPending &&<button disabled>Adding new blog ..</button>}
          </form>
      </div>  
    );
}
 
export default Create
