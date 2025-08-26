

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import toast from "react-hot-toast";



const Navbar = () => {
    const navigate = useNavigate();

    const logoutHandler= ()=>{
        localStorage.removeItem('todoapp')
        navigate('/login')
        toast.success("logout successful")

    }
  return (
    <nav className="navbar">
      <div className="nav-logo">TodoApp</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
                                 
        
        <button onClick={logoutHandler}>Logout</button>
      </ul>
    </nav>
  );
};

export default Navbar;
