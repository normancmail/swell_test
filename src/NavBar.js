import React from "react";

const Navbar = ({ setShow }) => {
  return (
    <nav>
      <button onClick={()=> setShow(true)}> Show Products</button>
      <button onClick={()=> setShow(false)}> Show Cart</button>
    </nav>
  );
};

export default Navbar;