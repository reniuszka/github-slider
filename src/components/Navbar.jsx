import React from "react";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <FaGithub className="icon" />
        <h2>Github selected slider</h2>
      </div>
    </nav>
  );
};
