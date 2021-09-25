import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
       <div className="Not-Found">
           <h2>Sorry</h2>
           <p>That page could not be found.</p>
           <Link to="/">Go back to home page..
           </Link>
       </div>
    );
}
 
export default NotFound;