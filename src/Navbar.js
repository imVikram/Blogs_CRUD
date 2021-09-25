import React from 'react';
import ReactDOM from 'react-dom';
const Navbar = () => {
    return (  
        <nav className="Navbar">  
        <h1>The Vikram blog</h1>
        <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        </div>
        </nav>  
    );
}
 
export default Navbar;