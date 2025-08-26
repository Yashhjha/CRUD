import React from "react";
import { Link } from "react-router-dom";
import Register from "./../Auth/Register";
import bgimg from "../../../assets/images/hero.jpg";
import '../Landing/Landing.css'

const Landing = () => {
  return (
    <div className="hero">
      <div className="fir">
        <div className="intro-text">
        <h1>
          <span className="tagline1">Organize work and life</span>
          <span className="tagline2">Finally</span>
        </h1>
        <p> hajoadjpower</p>
        <Link className="btn red" to="/register">
          Register
        </Link>
        <Link className="btn blue" to="/login">
          Login
        </Link>
        
      </div>
      </div>
      
      <div className="sec">
          <img className="bg"
            src={bgimg}
            alt="background Image"
           
            
          />
        </div>
    </div>
  );
};

export default Landing;
