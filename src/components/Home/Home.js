import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="navbar">
      
     <nav >
        <Link to="/" >Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Home;
