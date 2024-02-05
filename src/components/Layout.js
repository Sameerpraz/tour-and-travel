import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const ref = useRef();

  const showNavbar = () => {
    ref.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <h2>log</h2>
        <nav ref={ref}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      {children}
    </>
  );
};

export default Layout;
