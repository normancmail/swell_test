import React, { useState } from "react";
import ItemList from "./ItemList";
import Cart from "./Cart";
import Navbar from "./NavBar";

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <div>
        <Navbar setShow={setShow} />
        {show ? (
          <ItemList />
        ) : (
          <Cart />
        )}
      </div>
    </>
  );
}
export default App;
