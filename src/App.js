import { useRef } from "react";
import "./App.css";
import { FaBars, FaKeyboard, FaTimes } from "react-icons/fa";

const App = () => {
  const ref = useRef();

  const showNavbar = () => {
    ref.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <h2>log</h2>
        <nav ref={ref}>
          <a href="/#">Home</a>
          <a href="/#">Home</a>
          <a href="/#">Home</a>
          <a href="/#">Home</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default App;
