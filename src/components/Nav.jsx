import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/orders">Orders</Link> | <Link to="/trucks">Trucks</Link>;
    </nav>
  );
};

export default Nav;
