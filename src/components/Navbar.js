import React, { useState } from "react";
import logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenlinks] = useState(false);
  const toggleNavebar = () => {
    setOpenlinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <button onClick={toggleNavebar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
