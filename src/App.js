import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import ToolsAndEquipment from "./components/Categories-pages/ToolsAndEquipment";
import Coffee from "./components/Categories-pages/Coffee";
import Beans from "./components/Categories-pages/Beans";
import Others from "./components/Categories-pages/Others";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="tools-equipment" element={<ToolsAndEquipment />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="beans" element={<Beans />} />
          <Route path="others" element={<Others />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
