import React from "react";
import "../App.css";

import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const hadnlechange = (id) => {
    console.log("clik");
    if (id === 1) {
      navigate("/Products/1");
    } else if (id === 2) {
      navigate("/Products/2");
    } else if (id === 3) {
      navigate("/Products");
    }
  };

  return (
    <div className="navbar_links">
      {/* //link of navigation path */}
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/Products">Products</Link>
      </p>
      <p>
        <Link to="/About">About</Link>
      </p>

      <button onClick={() => hadnlechange(1)}>goto 1</button>
      <button onClick={() => hadnlechange(2)}>got to 2</button>
      <button onClick={() => hadnlechange(3)}>All products</button>

      {/* where to go on click */}
      {/* use router heere also */}
    </div>
  );
}

export default Navbar;
