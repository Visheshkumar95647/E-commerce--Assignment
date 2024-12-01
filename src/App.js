import React from 'react';
import Dash from "./Components/Dash";
import ProductContext from "./Components/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
      <ProductContext>
      <Routes>
        <Route path = {"/"} element = {<Dash/>}/>
        <Route path = {"/cart"} element = {<Cart/>}/>
      </Routes>
    </ProductContext>
    <Footer/>
    </Router>
  );
}

export default App;
