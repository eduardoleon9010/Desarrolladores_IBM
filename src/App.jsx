import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Browse from "./pages/browse/Browse";
import Cart from "./pages/cart/Cart";
import { AppProvider } from "./context/AppContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
