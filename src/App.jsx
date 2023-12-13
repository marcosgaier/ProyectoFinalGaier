import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import { CartProvider } from "./components/context/CartContext"; 
const App = () => {
  return (
    <CartProvider> 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:categoryName" element={<ItemListContainer />} />
          <Route path="/producto/:productId" element={<ItemDetailContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
