import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { useState } from "react";
import Header from './components/header';
import Home from './components/Home';
import data from './components/product.json';
import Products from './components/Products';
import ViewCart from './components/ViewCart';
import { cartContext } from './components/CartContext';
import { SearchProvider } from './components/SearchContext';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        {/* Wrap the SearchProvider inside the Router */}
        <SearchProvider>
          <Header products={products} cart={cart} />
          {/* <div className="container"> */}
            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route path="/Product/:Category" element={<Products products={products} />} />
              <Route path="/cart" element={<ViewCart />} />
            </Routes>
          {/* </div> */}
        </SearchProvider>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
