import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Product from "./Components/Product";

import { Routes, Route } from "react-router-dom";
import Not from "./Components/Not";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Not/> */}
      <Routes>
        <Route path="" element={<Home />} />
        {/* nested route */}

        <Route path="Products" element={<Products />} />

        <Route path="Products/:id" element={<Product />} />

        <Route path="*" element={<Not />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

// "/ " is not mandatory"
//parent accept all infor from child use *

//outletfor child info
//to go from one page with valaue
